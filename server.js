import express from "express";
import mongoose from 'mongoose';

const app=express();
const port=5500;
app.use(express.json());
// app.post("eventCreation",(res,req)=>{
// const data= 


// });

const Mongo_Url = "mongodb+srv://abhinavagni4450:<PXZotNtNVhBgvSwu@cluster0.rdvedcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const Connection = () =>{

    mongoose.connect(Mongo_Url).then(() =>{
        console.log("DB Connected")
    }).catch(function(error){
        console.log("Connection error :", error)
    })
    
    }

 Connection();

app.listen(port,()=>
    {
        console.log("server is running");
    });

