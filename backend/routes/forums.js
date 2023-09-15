const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Forum=require('../models/Forum')
const Comment=require('../models/Comment')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create",verifyToken,async (req,res)=>{
    try{
        // console.log(req.body)
        const newForum=new Forum(req.body)
        const savedForum=await newForum.save()
        
        res.status(200).json(savedForum)
    }
    catch(err){
        
        res.status(500).json(err)
    }
     
})

//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedForum=await Forum.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedForum)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Forum.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({forumId:req.params.id})
        res.status(200).json("Forum has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET FORUM DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const forum=await Forum.findById(req.params.id)
        res.status(200).json(forum)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET FORUMS
router.get("/",async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            //ignore case
            title:{$regex:query.search, $options:"i"}
        }
        const forums=await Forum.find(query.search?searchFilter:null)
        res.status(200).json(forums)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER FORUMS
router.get("/user/:userId",async (req,res)=>{
    try{
        const forums=await Forum.find({userId:req.params.userId})
        res.status(200).json(forums)
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports=router