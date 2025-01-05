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
        required :true,
    },
    link:{
        type:String,
        required:true,
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

const User = mongoose.model("Users",userSchema);
const Content = mongoose.model("Contents",contentSchema);

export  {
    User,Content
}