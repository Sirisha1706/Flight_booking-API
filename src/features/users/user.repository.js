import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import {userModel} from './user.schema.js'


export const registerUser = async(data)=>{
    try{
        data.password = await bcrypt.hash(data.password, 12);
        const newUser = new userModel(data);
        await newUser.save();
        return {success:true, res: newUser};
    }
    catch(err){
        return {success: false, err};
    }
    
}

export const loginUser = async(data) =>{
    try{
        const {email, password} = data;
        const user = await userModel.findOne({email});
        if(!user) return {success: false, err:'user not found'}
        else{
            let user_Auth = await bcrypt.compare(password, user.password);
            if(user_Auth){
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '30m'});
                return {success: true, res:user, token}
            }
            else{
                return{success: false, err: 'Password is incorrect'}
            }
        }
    }
    catch(err){
        return{success: false, err}
    }
};