import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 20,
        require: true
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

export default mongoose.model('User', userSchema);