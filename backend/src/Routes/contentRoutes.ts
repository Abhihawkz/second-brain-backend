import express from "express"
import {boolean, z} from "zod"
import { Content, Link, User } from "../schema/dbSchema";
import userMiddleware, { generateHash } from "../middleware/userMiddleware";
const router = express.Router();

const contentSchema = z.object({
    title:z.string(),
    link:z.string(),
    type:z.enum(["youtube","twitter"])
})

router.post("/add", userMiddleware ,async(req,res)=>{
    const {success} = contentSchema.safeParse(req.body);
    console.log(success)
    console.log(req.body)
    if(!success){
        res.json({msg:"invalid input types"})
    }
    const content = await Content.create({
        title:req.body.tilte,
        link:req.body.link,
        type:req.body.type,
        userId:req.user
    })


    res.json({content:content})


})

router.get('/all', userMiddleware , async(req,res)=>{
    const content = await Content.find({userId:req.user})
    res.json({content:content})
})


router.delete("/:id",userMiddleware,async(req,res)=>{
    const id = req.params.id;
    await Content.findOneAndDelete({_id:id})
    res.json({msg:'successfully Deleted'})
})

router.post("/share",userMiddleware,async(req,res)=>{
   const {share} = req.body.share;
   const lit = Boolean(share);
   if(lit){
    const existingLink = await Link.findOne({
        userId:req.user
    })
    if(existingLink){
        res.json({link :`share/${existingLink.hash}`})
        return
    }else{
        const hash = generateHash(10);
        await Link.create({userId:req.user,hash:hash})
    }
   }else{
    await Link.deleteOne({userId:req.user})
    res.json({msg:"shareable link deleted"})
   }
})

router.get("/:share",async(req,res)=>{
    const share = req.params.share;
    const exisitnglink = await Link.findOne({
        hash:share
    })
    if(exisitnglink){
        const  content = await Content.find({userId:exisitnglink.userId})
        const user = await User.findOne({_id:exisitnglink.userId})
        res.json({
            username:user?.username,
            content:content,
        })
    }else{
        res.json({msg:"Invalid link"})
    }
})

export default router;