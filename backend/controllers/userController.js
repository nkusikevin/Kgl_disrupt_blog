const asyncHandler = require("express-async-handler");
const Users = require("../models/userModal");
const generateToken = require("../utils/middleWare/genearateToken");

//@desc Register NewUser
//@route Post /api/Users/register
//@access Private

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const userExist = await Users.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exits ");
  }
  const user = await Users.create({
    username,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});
//@desc Login User
//@route Post /api/Users/
//@access Public
const loginUser = asyncHandler(async(req,res)=>{
const {email,password}= req.body
const user = await Users.findOne({email})
if(user && (await user.matchPassword(password))){
res.json({
  _id:user._id,
  name:user.name,
  email:user.email,
  isAdmin:user.isAdmin,
  token:generateToken(user._id)
})
}else{
  res.status(401)
  throw new Error("invalid email or password")
}
})
module.exports = {
  registerUser,
  loginUser,
};
