import mongoose , {Schema , Document} from "mongoose";

export interface User extends Document {
    name : string;
    email  : string;
    password : string;
    role : string[];
}

export enum Role {
    CREATOR = "CREATOR",
    VIEWER = "VIEWER",
    VIEW_ALL = "VIEW_ALL"
}

const userSchema : Schema = new Schema({
    name : {type : String,required : true},
    email : {type : String , required : true},
    password : {type : String, required : true},
    role : [{type : String , enum : Object.values(Role) , default : Role.VIEWER}]
})


export const UserModel = mongoose.model<User>('user',userSchema)