import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const createToken = (id) => {
    // Token creation logic can be added here

    return jwt.sign({ id }, process.env.JWT_SECRET)
}
//route for user login
const loginUser = async (req,res) =>{
    try{
        const {email, password} = req.body;
        //check if user exists
        const user = await userModel.findOne({email});
        if(!user){
            return  res.status(400).json({message: "user does not exist"});
        }
        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        //generate token
        const token = createToken(user._id);
        res.status(200).json({message: "Login successful", token});

    }catch(error){
        res.status(500).json({message: "Server Error"})
    }



}


//route for user registration
const registerUser = async (req,res) =>{
    try{
        const {name, email, password} = req.body;
        // if user already exist or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.status(400).json({message: "User already exists"})
        }
        //validate email format and strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Invalid Email"})
        }
        if(password.length < 8){
            return res.status(400).json({message: "Password must be at least 8 characters"})
        }
//hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
//create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        const user = await newUser.save();
        //token generation can be added here for authentication
        const token = createToken(user._id);
        res.status(201).json({message: "User registered successfully", token} )

    }catch(error){
        res.status(500).json({message: "Server Error"})
    }
   

}
//route for admin login
const adminLogin = async (req,res) =>{
    try{
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            return res.status(200).json({message: "Admin login successful", token});
    }else{
        return res.status(400).json({message: "Invalid admin credentials"});
    }

}
    catch(error){
        res.status(500).json({message: "Server Error"})
    }
}
export {loginUser, registerUser, adminLogin}