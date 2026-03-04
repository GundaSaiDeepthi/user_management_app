import { Schema,model } from "mongoose";

//Create User Schema with Validations
//name,email,dob,phone no.

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:[true,"Email already existed"]
    },
    dateOfBirth:{
        type:Date,
        required:[true,"Date of birth is required"],
    },
    mobileNumber:{
        type:Number,
    },
    status:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:"throw"
});
//Create User Model for User Schema
export const UserModel=model("user",userSchema)