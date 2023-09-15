const mongoose=require('mongoose')

const ReplySchema=new mongoose.Schema({
    reply:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    forumId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Reply",ReplySchema)