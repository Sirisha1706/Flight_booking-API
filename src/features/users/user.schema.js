import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },
    password:{
        type: String
    }
})

export const userModel = mongoose.model('users', userSchema);