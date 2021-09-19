const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {MONGOURI}=require('./key')
const morgan = require("morgan");

const PORT=5000
//oSwuV3UEFaSdW5Wh

const middware=(req,res,next)=>{
    console.log("middlewaere")
    next()
}


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
      }
 )
 app.use(express.json())
 app.use(morgan("dev"));
 require('./models/user')
 require('./models/data')
 require('./models/datadone')
app.use(require("./router/user"))
app.use(require("./router/data"))
app.use(require("./router/datadone"))



mongoose.connection.on('connected',()=>{
    console.log("database connected")
})
mongoose.connection.on('error',(err)=>{
    console.log("database error:",err)
})


app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log("server is runnig at port ",PORT)
})