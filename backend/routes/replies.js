const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Post=require('../models/Post')
const Reply=require('../models/Reply')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create",verifyToken,async (req,res)=>{
    try{
        const newReply=new Reply(req.body)
        const savedReply=await newReply.save()
        res.status(200).json(savedReply)
    }
    catch(err){
        res.status(500).json(err)
    }
     
})

//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedReply=await Reply.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedReply)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Reply.findByIdAndDelete(req.params.id)
        
        res.status(200).json("Reply has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})




//GET POST COMMENTS
router.get("/forum/:forumId",async (req,res)=>{
    try{
        const replies=await Reply.find({forumId:req.params.forumId})
        res.status(200).json(replies)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router