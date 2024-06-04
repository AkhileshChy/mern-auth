import User from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        if (!name) {
            return res.json({error: 'Name is required'});
        }
        if (!email) {
            return res.json({error: 'Email is required'})
        }
        if (!password || password.length < 6){
            return res.json({error: 'Password is required and should be atleast 6 characters long'})
        }
        const exist = await User.findOne({email});
        if (exist){
            return res.json({error: 'Email is already taken'})
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        return res.json(user);
    } catch (error) {
        console.log("Error in registerUser : ", error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.json({error: 'No user found'})
        }
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            });           
        } else{
            return res.json({error: "Passwords don't Match"});
        }
    } catch (error) {
        console.log("Error in loginUser : ", error)
    }
}

export const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}