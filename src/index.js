//require('dotenv').config({path: './env'})
import dotenv from "dotenv";

import mongoose from "mongoose";
//import { DB_NAME } from "./constant"; 
import connectDB from "./db/data.js";


dotenv.config({
    path: './env'
})


connectDB();










// import express from "express";
// const app=express()
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("errorr",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR : ",error)
//         throw err
//     }
// })()