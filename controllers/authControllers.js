const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  try {
    const { email, password ,role} = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      message: "User registered successfully"
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

const login = async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email}) 
        if(!user) {
            return res.status(404).json({message: "User not found"})
        } else {
            const isPasswordValid = await bcrypt.compare(password , user.password)
            if(!isPasswordValid){
                return res.status(401).json({message: "Invalid password"})
            }else {
                const token = jwt.sign({userId: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"})
                res.status(200).json({message: "Login successful", token, role: user.role})
            }
        }
    }catch(error){
        res.status(500).json({message: "Error logging in", error: error.message})
    }
}

module.exports = {register , login};