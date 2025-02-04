import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const {jwt_token} = req.cookies;
  jwt.verify(jwt_token, 'UserAuthentication', (err, data)=>{
    if(err) {res.status(400).send('User not logged in')}
    else { req._id = data.id;
    next();}
  })
};
