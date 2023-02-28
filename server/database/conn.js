import mongoose from "mongoose";
import { process } from 'dotenv';

export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}