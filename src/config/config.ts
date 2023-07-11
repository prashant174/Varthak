import mongoose from 'mongoose'
import dotenv from  'dotenv'

dotenv.config()

const dbUrl = process.env.MONGOBD as string;
export const connection = mongoose.connect(dbUrl)