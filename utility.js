
const JWT = require("jsonwebtoken");

const authenticate = (request,response,next) => {
  const userId = request.headers['x-user-id'];
  if(!userId){
    response.sendStatus(401);
    return;
  }
  
  const accessToken = userId && JWT.sign(userId,process.env.JWT_ACCESS_SECRET_KEY);
  if(accessToken != process.env.JWT_ACCESS_TOKEN){
    response.sendStatus(403);
    return;
  }

  next();
}

module.exports = {authenticate};
