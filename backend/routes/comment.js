const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const Post = require('../models/post');
const Comment = require('../models/comment');
const verifyToken = require('../verifyToken')


//create
router.post("/create", verifyToken, async (req, res) => {
    try {


        const newComment = new Post(req.body);

        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//Update
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedComment);
    }
    catch (err) {
        res.status(500).json(err)
    }
})



//delete comment
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json("Comment has been deleted");
    }
    catch (err) {
        res.status(500).json(err)
    }
})



//get  post comments
router.get("/post/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId })
        res.status(200).json(comments);
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//export modules
module.exports = router;