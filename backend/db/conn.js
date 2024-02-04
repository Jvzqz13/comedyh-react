import mongoose from "mongoose";

export async function conn(){
    try {

        await mongoose.connect(process.env.ATLAS_URI);
        console.log('connected to Mongodb');
        
    } catch (error) {
        console.log(error.message);
        
    }
}