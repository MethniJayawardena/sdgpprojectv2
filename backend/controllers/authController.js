
import User from "../models/User.js";// Importing the User model
import bcrypt from 'bcryptjs';// Importing bcrypt for password hashing
import jwt from 'jsonwebtoken';// Importing jsonwebtoken for token generation

// Register endpoint
export const register = async (req,res)=>{
    
    try{

        // Check if the username is already taken
        const existingUsername = await User.findOne({ username: req.body.username });
        if (existingUsername) {
            return res.status(400).json({ success: false, message: 'Username already taken' });
        }

        // Check if the email is already taken
        const existingEmail = await User.findOne({ email: req.body.email });
        if (existingEmail) {
            return res.status(400).json({ success: false, message: 'Email already taken' });
        }

        // Hashing the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        // Creating a new user instance
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password:hash,
            photo: req.body.photo,
            address: req.body.address,
            fullname: req.body.fullname,
            age: req.body.age,


        });

         // Saving the new user to the database
        await newUser.save();

        res.status(200).json({success:true, message: 'Successfully created'});

    }catch(err){        
        res.status(500).json({success:false, message: 'Failed to create. Try again'});
}

}

// Login endpoint
export const login = async (req,res) =>{

    const email = req.body.email
    try{

        // Finding the user by email
        const user = await User.findOne({email})

        //if user doesnt exist
        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }

        // Checking if the password is correct
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCorrectPassword){
            return res
            .status(401)
            .json({
                success:false, 
                message: 'Incorrect email or password. Please Try Again!'})
        }

        // Extracting password and role, and generating JWT token
        const {password,role,...rest} = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15d"}
        );
        
         // Setting token as a cookie and sending token and user data in response
        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        })
        .status(200)
        .json({
            token,
            data:{... rest},
            role,
        })
    }catch(err){
        return res
            .status(500)
            .json({
                success:false, 
                message: 'Failed to login'})
    }
};