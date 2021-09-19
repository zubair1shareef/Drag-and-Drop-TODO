const express = require("express")
const router=express.Router()
const mongoose = require('mongoose')
const Data=mongoose.model('Data')
const reqlogin=require("../middlewares/checkLogin")
const User=mongoose.model("User")

router.post('/createtodo',(req,res)=>{
    const{title,body,cretedby}=req.body
    const data=Data({
        title,
        body,
        //cretedby:req.user
       cretedby
    })
   // req.user.password=undefined
    data.save()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)})
})
router.get('/showtodo',(req,res)=>{
    Data.find().populate("cretedby" ,"name").then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })

})

router.delete('/deletetodo/:createdId',(req,res)=>{
    Data.findOne({_id:req.params.createdId}).then(found=>{
        if(!found){
            res.status(404).json({error:"not found"})
        }
        found.remove()
        .then(result=>{
            res.json({result})
        })
        .catch(err=>{
            console.log(err)
        })
    })

})
router.get('/searchdata/:Id',(req,res)=>{
    Data.findOne({_id:req.params.Id}).then(resu=>{
        res.json(resu)
    }).catch(err=>{
        console.log(err)
    })
})


module.exports=router