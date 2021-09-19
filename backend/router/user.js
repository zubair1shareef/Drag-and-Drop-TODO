const express=require('express');
const router=express.Router();
const mongoose = require('mongoose')
const User=mongoose.model("User")

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../key');
const reqlogin=require("../middlewares/checkLogin")

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    if(!name|| !email ||!password){
        res.status(422).json({error:"enter all the fields"})
    }
    User.findOne({email:email}).then(found=>{
        if(found){
           return res.status(422).json({error:"user already exist"})
        }
       else{
        bcrypt.hash(password,10).then(hash=>{
            const user=new User({
                name,
                email,
                password:hash
            })
            user.save()
            .then(user=>{
                res.json({user})
            })
            .then(err=>{
                res.json({error:err})
            })
           
            .catch(error=>{
                console.log(error)
            })
        })
        .catch(err=>{
            console.log(err);
        })
       }

    })
  
})

router.post("/signin",(req,res)=>{

    const{email,password}=req.body
    User.findOne({email:email}).then(found=>{
        if(!found){
           return res.status(404).json({error:"user not found"})

        }
        bcrypt.compare(password,found.password).then(match=>{
            if(match){
                const token = jwt.sign({_id:found._id}, JWT_SECRET);
                const {name,email}=found
                return res.json({token,user:{name,email}})
            }
            else{
                res.json({message:"usr not found"})
            }
        })

    })
})

router.get("/check",reqlogin,(req,res)=>{
    res.json({message:"hello"})
})

module.exports=router