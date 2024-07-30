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

app.get("/", async (req, res) => {
    try{
        const data= await add.find();
        res.status(200).send(data);
    }
    catch(err)
    {
      console.log(err,"something went wrong");
    }
  });

  app.get("/getById/:id", async (req, res) => {
    try{
        const data= await add.findById({_id:req.params.id});
        res.status(200).send(data);
    }
    catch(err)
    {
      console.log(err,"something went wrong");
    }
  });

  app.delete("/deleteById/:id", async (req, res) => {
    try{
        const data= await add.findByIdAndDelete({_id:req.params.id});
        res.status(200).send(data);
    }
    catch(err)
    {
      console.log(err,"something went wrong");
    }
  });

//for update

app.post("/updateEvent/:id",async(req,res)=>{
    try {
        let Data = req.body;
    
        // Ensure that _id is not part of the update data
        delete Data._id;
    
        console.log(Data);
        
        let detail;
        detail = await add.findOneAndUpdate(
          { _id: req.params.id },    // Query to find the document
          { $set: Data },     // Update object with $set to update the fields
          { new: true }              // Options to return the updated document
        );
        
        res.status(200).json({ message: "Information has been updated", detail });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
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

