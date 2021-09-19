const mongoose = require("mongoose")
const {ObjectId}=mongoose.Schema.Types

const formSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required:true
    },
    cretedby:{
        type:ObjectId,
        ref:"User"
    }


},{timestamps:true})

mongoose.model("Data",formSchema)