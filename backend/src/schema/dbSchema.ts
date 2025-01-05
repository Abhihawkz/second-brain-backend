import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required :true,
        unique:true,
    },
    password:{
        type:String,
        required :true,
    }
})

const contentSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    link:{
        type:String,
    },
    type:{
        type:String,
        enum :["youtube","twitter"]
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"Users"
    }
})

const linkSchema = new mongoose.Schema({
    hash:String,
    userId : {type:mongoose.Types.ObjectId,ref:"Users"}
})

const User = mongoose.model("Users",userSchema);
const Content = mongoose.model("Contents",contentSchema);
const Link = mongoose.model("Links",linkSchema);
export  {
    User,Content,Link
}