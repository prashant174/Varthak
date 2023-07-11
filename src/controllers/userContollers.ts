import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    const alreadyExists = await UserModel.findOne({ email });

    if (alreadyExists) {
       res.status(401).send({ msg: "User already exists, try other username" });
    }else{
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await new UserModel({ email, name, password:hashPassword, role });
       user.save();
      res.status(201).send({ msg: "SignUp successfull" });
    }

    
  } catch (err) {
    res.status(401).send({ msg: "Something went wrong please try again" });
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { email , password } = req.body;
   
    const user = await UserModel.findOne({email})

    if(!user){
        return res.status(404).send({msg : "User not present please login first"})
    }

    const isPassword = await bcrypt.compare(password, user.password); 

    if (!isPassword) {
        return res.status(401).json({ msg: 'wrong credentials' });
      }

      const secretKey = process.env.secret as string;
      const token = jwt.sign({ userId: user._id, name: user.name, role: user.role }, secretKey);
      res.status(201).send({msg : "Login Successful" , token})
  } catch (err) {
    res.status(401).send({ msg: "Something went wrong please try again" });
  }
};



