const jwt =require('jsonwebtoken')
const {JWT_SECRET}=require("../key")
const mongoose = require('mongoose')
const User=mongoose.model('User')

module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status(401).json({error:"you must be login first"})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"auth error"})

        }
        const {_id}=payload
        User.findById(_id).then(userdata=>{
            req.user=userdata
            next()
        })

    })

}