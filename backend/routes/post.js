const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Post = require('../models/post');
const Comment = require('../models/comment');
const verifyToken = require('../verifyToken')



//create
router.post("/create",verifyToken,async (req,res)=>{
    try{
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put("/:id",verifyToken,async (req,res)=>{
    try{
        const updatedUser=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err)
    }
})



//delete
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted");
    }
    catch(err){
        res.status(500).json(err)
    }
})





//get post details
router.get("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        res.status(200).json(info);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get posts
router.get("/",async (req,res)=>{

    const query=req.query
    
    try{
        const searchFilter={
            title:{$regex:query.search,$options:"i"}
        }
        const post=await Post.find(query.search?searchFilter:null)
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err)
    }
})


//get  user posts
router.get("/user/:userId",async (req,res)=>{
    try{
        const posts=await Post.find({userId:req.params.userId})
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err)
    }
})




module.exports = router;