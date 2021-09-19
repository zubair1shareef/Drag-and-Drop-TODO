const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
mongoose.model("User",userSchema)
