const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Announcement=require('../models/Announcement')
const Comment=require('../models/Comment')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create",verifyToken,async (req,res)=>{
    try{
        const newAnnouncement=new Announcement(req.body)
        // console.log(req.body)
        const savedAnnouncement=await newAnnouncement.save()
        
        res.status(200).json(savedAnnouncement)
    }
    catch(err){
        
        res.status(500).json(err)
    }
     
})

//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedAnnouncement=await Announcement.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedAnnouncement)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Announcement.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({announcementId:req.params.id})
        res.status(200).json("Announcement has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET ANNOUNCEMENT DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const announcement=await Announcement.findById(req.params.id)
        res.status(200).json(announcement)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ANNOUNCEMENTS
router.get("/",async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            //ignore case
            title:{$regex:query.search, $options:"i"}
        }
        const announcements=await Announcement.find(query.search?searchFilter:null)
        res.status(200).json(announcements)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER ANNOUNCEMENTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const announcements=await Announcement.find({userId:req.params.userId})
        res.status(200).json(announcements)
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports=router