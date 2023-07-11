import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export const authenticate = async ( req : Request , res : Response , next : NextFunction) =>{
    try {
      const token = req.headers?.authorization?.split(" ")[1]
      
      if(!token){
        return res.status(401).send({ msg : "login first"})
      }
      const secretKey = process.env.secret as string;
      const decoded : any = jwt.verify(token , secretKey)

      if(!decoded){
        return res.status(401).send({msg : "not authorized"})
      }
      req.body.userId = decoded.userId;
      req.body.role = decoded.role;
      req.body.name=decoded.name;
      next()
    } catch (error) {
      res.status(401).send({ msg: "Something went wrong please try again" });
    }
}