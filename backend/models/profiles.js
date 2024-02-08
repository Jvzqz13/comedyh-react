import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true
    },
    subbedComedians: {
        type: String,
        enum: []
    }

}, { timestamps:true } )

export default mongoose.model('Profile', profileSchema)