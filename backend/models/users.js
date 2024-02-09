import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 9;


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(value){
                return /\S+@\S+\.\S+/.test(value);
            }, 
            message: props => `${props.value} is not a valid email address`
        }
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 20,
        require: true
    },
    username: {
        type: String,
        minLength: 4,
        maxLength: 20,
        unique: true,
        lowercase: true
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

userSchema.index({email: 1});
userSchema.index({username: 1});

userSchema.pre('save', async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})



export default mongoose.model('User', userSchema);