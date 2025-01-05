import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";


interface jwtPayload {
    id:mongoose.Types.ObjectId
}
export default function userMiddleware(req:Request,res:Response,next:NextFunction){
    const token =  req.headers?.["authorization"];
    if(!token){
        res.json({msg:"your not authenticated"});
    }
    try {
        const decoded = jwt.verify(token!,"mysecret") as jwtPayload;
        req.user = decoded.id;
        next();
    } catch (error) {
        res.json({msg:"your not authenticated"})
    }
}

export function generateHash(len:number){
    const options = "qwertyuiopasdfghjklzxcvbnm1234567890"
    const length = options.length;
    let hash = "";
    for(let i = 0; i<len; i++){
        hash +=options[Math.floor(Math.random()*length)];
    }
    return hash;
}