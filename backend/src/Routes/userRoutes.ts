import express, { NextFunction } from "express"
import {z} from "zod"
import { User } from "../schema/dbSchema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const router = express.Router();




const signUpSchema = z.object({
    username:z.string(),
    email:z.string(),
    password:z.string()
})
router.post("/signup",async(req,res)=>{
    try {
        console.log(req.body)
        const {success} = signUpSchema.safeParse(req.body);
    if(!success){
        res.json({msg:"invalid input types"})
    }
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    const existingUser = await User.findOne({email:req.body.email})
    if(existingUser){
        res.json({msg:"user already exists"})
    }
    const user = await User.create({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })
    const token = jwt.sign({id:user._id},"mysecret")
    res.json({token:token})

        
    } catch (error) {
        console.log(`Error ${error}`)    
    }
    
})

const signInSchema = z.object({
    email:z.string(),
    password:z.string()
})

router.post("/signin",async(req,res)=>{
    const {success} = signInSchema.safeParse(req.body);
    if(!success){
        res.json({msg:"invalid input types"})
    }
    const existingUser = await User.findOne({email:req.body.email})
    if(!existingUser){
        res.json({msg:"user doesn't exist"})
    }
    const hashedPassword = await bcrypt.compare(req.body.password,existingUser?.password!);
    if(!hashedPassword){
        res.json({msg:"invalid Password"})
    }
 
    const token = jwt.sign({id:existingUser!._id},"mysecret")
    res.json({token:token})
})

export default router;