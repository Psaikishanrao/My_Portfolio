const express=require('express')
const app=express()
const connection=require("./config/db")
require('dotenv').config();
connection();
const port=process.env.PORT


app.listen(port,()=>{
    console.log('server running on 5000')
})