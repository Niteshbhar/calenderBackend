import express from "express";
import mongoose from 'mongoose';
import add from "./schema.js";
const app=express();
const port=5500;
app.use(express.json());
app.post("/eventCreation",async(req,res)=>{
    try{
        const data= await add.create(req.body);
        res.status(200).send(data);
    }
    catch(err)
    {
      console.log(err,"something went wrong");
    }
});

app.get("/", (req, res) => {
    res.send("Server is Working");
  });
const Mongo_Url = "mongodb+srv://abhinavagni4450:PXZotNtNVhBgvSwu@cluster0.rdvedcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


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
        console.log(`server is running, ${port}`);
    });

