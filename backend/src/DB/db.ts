import mongoose from "mongoose";

export default async function createDB(){
    try {
        const res = await mongoose.connect("mongodb://localhost:27017/second-brain");
        console.log(res.connection.host)
    } catch (error) {
        console.log("Error while connecting to db!!")
    }
}