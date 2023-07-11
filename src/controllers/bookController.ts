import { Request, Response } from "express";
import { BooksModel } from "../models/BooksModel";
import { Role } from "../models/UserModel";



export const createBooks = async (req: Request, res: Response) => {
  try {
    const { bookName, writer, price, userId, name } = req.body;
    const bookData = await new BooksModel({ bookName, writer, price, publisher:name,createdBy: userId,createdAt: new Date()});

    bookData.save();

    res.status(201).json({ msg: "Created successfully" });
  } catch (err) {
    
    res.status(400).json({ msg:"something went wrong please try again" });
  }
};

export const viewBooks = async (req: Request, res: Response) => {
  const {role, userId}=req.body
  const {old,new:newBook}=req.query

  
  try{
    const timeValue:any={}
    if(old==="1"){
      timeValue.createdAt={$lte: new Date(Date.now() - 10* 60 * 1000)}
    }else if(newBook==="1"){
      timeValue.createdAt={$gt: new Date(Date.now() - 10* 60 * 1000)}
    }

    if(role.includes(Role.VIEW_ALL)){
      const allBooks= await BooksModel.find(timeValue)
      console.log(allBooks.length, allBooks, "allBooksa")
      if(allBooks.length>0){
        res.status(200).send({msg:"Books fetched successfully",Books:allBooks})
      }else{
        res.status(200).send({msg:"Books fetched successfully",Books:"No Books Found"})
      }
      
    }
    else if(role.includes(Role.VIEWER)){
      const createdBy=userId
      const authorizedBooks= await BooksModel.find({createdBy, ...timeValue})
      if(authorizedBooks.length>0){
        res.status(200).send({msg:"Books fetched successfully",Books:authorizedBooks})
      }else{
        res.status(200).send({msg:"Books fetched successfully",Books:"No Books Found"})
      }
    }else{
      res.status(400).json({ msg:"you are not authorized"});
    }

  }catch(err){
    res.status(400).json({ msg:"something went wrong please try again" });
  }
 
};

export const deleteBook= async(req:Request, res:Response)=>{
    const paramsId:any=req.query.creatorId
    const {userId}=req.body
    
    
    try{
        const data:any =await BooksModel.findById(paramsId)
        console.log(data,"post..")
        if(data.createdBy.equals(userId)){
             await data.deleteOne()
             res.status(200).json("post deleted successfully")
        }else{
            res.status(403).json("not authorized!")
        }
    }catch(err){
        res.status(500).json({msg:"something went wrong please try again "})
    }
}
export const updateBook= async(req:Request, res:Response)=>{
    const paramsId:any=req.query.creatorId
    const {userId}=req.body
   
    
    try{
        const data:any =await BooksModel.findById(paramsId)
        console.log(data,"post..")
        if(data.createdBy.equals(userId)){
             await data.updateOne({$set:req.body})
             res.status(200).json("post updated successfully")
        }else{
            res.status(403).json("not authorized!")
        }
    }catch(err){
        res.status(500).json({msg:"something went wrong please try again "})
    }
}
