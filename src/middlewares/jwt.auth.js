import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
export const auth = async (req, res, next) => {
  const {jwt_token} = req.cookies;
  jwt.verify(jwt_token, process.env.JWT_SECRET , (err, data)=>{
    if(err) {res.status(400).send('User not logged in')}
    else { req._id = data.id;
    next();}
  })
};
