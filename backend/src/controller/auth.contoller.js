const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")


async function registerUserController(req,res) {
    
    const { username , email, password } = req.body ;

    if (!username || !email || !password){
        return res.status(400).json({ message : "All Fileds are required" })
    }

    const isUserExists = await userModel.findOne({
        $or:[{username},{email}]
    })

    if(isUserExists){
        return res.status(400).json({ message : "The user alread Exists" })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username, email,
        password:hash
    })

    const token = jwt.sign(
        { id: user._id, username:user.username },
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
        message:"USer registered successfully",
        user:{
            id:user._id,
            username: user.username,
            email:user.email
        }
    })

}

async function loginUserController(req,res) {
    
    const {username , email , password } = req.body;
    
    const user = await userModel.findOne({ $or:[{email},{username} ]})

    if(!user){
        return res.status(400).json({message : "Invalid Email or Username"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
        return res.status(400).json({message : "Invalid Password "})
    }

    const token = jwt.sign(
        { id: user._id, username:user.username },
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
        message:"User Loggined successfully",
        user:{
            id:user._id,
            username: user.username,
            email:user.email
        }
    })


}

async function logoutUserController(req,res) {
    
    const  token  = req.cookies.token
    if(token){
        await tokenBlacklistModel.create({ token })

    }

    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "None",
    });

    res.status(200).json({ message: "User Logged out successfully"})
    
}


async function getMeController(req,res) {
    
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message:"User Data Fetched successfully",
        user:{
            id:user._id,
            username: user.username,
            email:user.email
        }
    })

}


module.exports = { registerUserController , loginUserController  , logoutUserController , getMeController  }