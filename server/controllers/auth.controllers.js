import User from "../models/user.model.js";
import { hashPassword } from "../utils/hash.js";

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