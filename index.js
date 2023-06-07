import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
// line 6:helps to import module as react in package.json

const app=express();
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())

 ///for connection of database
 mongoose.connect('mongodb://localhost:27017/mywebd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
    // Additional code or operations after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });



  //user schema -variable for storing data or model in these format data will stored
  const userSchema=mongoose.Schema({
    name:String,
    email:String,
    passwrd:String
  })

  const User=new mongoose.model("user",userSchema)
 //Routes

 //post-helps to send data to destination
 app.post("/login",(req,res)=>{
   const {email,passwrd}=req.body
   User.findOne({email:email},(err,user)=>{
    if(user){
         if(passwrd===user.passwrd)
         {
            res.send({message:"login successfull",user:user})
         }
         else{
            res.send({message:'didnt cmatch password'})
         }
    }
    else{
        res.send({message:"user not registerd"})
    }
   })
 })

 app.post("/register",(req,res)=>{
   const {name,email,passwrd}=req.body  
   ///findOne -function given by mongod to find if there preexist data with initiall entered data or
   // it can be assumed like to check if user is registerd already
   User.findOne({email:email},(err,user)=>{
    if(user)
    {
       
        res.send({message:'user already registerd'})
    }
    else{   
         const user=new User({     ///helps to create new object for user with data=name,email,passwrd
        name,
        email,
        passwrd
       })
       user.save(err=>{  //save function help to save the data user that is created above
        if(err){
            res.send(err)
        }
        else {
            res.send({message:"successfully registered"})
        }
       })}
   })

 })

 app.listen(9002,()=>{
    console.log("BE started at port 9002")
 })