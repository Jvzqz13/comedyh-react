import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 4,
        maxLength: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 20,
        require: true
    },
    age: {
        type: Number,
        min: 18
    }
}, { 
    timestamps:true,
    toJSON:{
        transform: function(doc, retDoc){
            delete retDoc.password;
            retDoc;
        }
    }
})