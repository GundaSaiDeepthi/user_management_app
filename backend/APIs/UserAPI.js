//Create min-express app
import exp from 'express';
import { UserModel } from '../models/UserModel.js';
export const UserApp=exp.Router()

//USER API 

//Create User
UserApp.post('/users',async(req,res)=>{
    //get new user
    const newUser=req.body
    //create user document
    const newUserDocument=new UserModel(newUser)
    //save new user
    let user=await newUserDocument.save()
    //send res
    res.status(201).json({message:"User Created",payload:user})
})

//Read all Users
UserApp.get("/users",async(req,res)=>{
    //read all users
    let usersList=await UserModel.find({status:true})
    //send res
    res.status(200).json({message:"Users",payload:usersList})
})

//Read a User by ID
UserApp.get("/users/:id",async(req,res)=>{
    //get user id from url
    let uid=req.params.id;
    //find user by id
    let user=await UserModel.findOne({_id:uid,status:true})
    //check user
    if(!user){
        return res.status(404).json({message:"User Not Found"})
    }
    //send res
    res.status(200).json({message:"User Found",payload:user})
})

//Delete a User by ID
UserApp.delete('/users/:id',async (req,res)=>{
     //get user id from url
    let uid=req.params.id;
    //find user and change status to false
   let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
   //check user
   if(!user){
     return res.status(404).json({message:"User Not Found"})
   }
   //send res
    res.status(200).json({message:"User removed"})
})

//Activate User(Change status to true)
//PUT(complete change in resource) & PATCH(partial change in resource)
UserApp.patch("/users/:id",async(req,res)=>{
     //get user id from url
    let uid=req.params.id;
    //find user and change status to true
   let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
   
   //send res
    res.status(200).json({message:"User activated",payload:user})
})


//Update a User by ID