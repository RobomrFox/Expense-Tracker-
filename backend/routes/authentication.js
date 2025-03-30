import express from 'express';
import User from '../db.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, email, password} = req.body;

    //null data handling
    if (!username || !email || !password) {
        return res.status(400).json({
            error: "Username, email, and password are required."
        })
    }

    //no registeration existing user
    const existingUser = await User.findOne({
        username
    })

    const existingEmail = await User.findOne({
        email
    })

    if (existingUser) {
        return res.status(400).json({
            erro: "UserName already in DB."
        })
    }

    if (existingEmail) {
        return res.status(400).json({
            erro: "User Already Exists."
        })
    }

    //Hasing Password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    //Registering New User in DB
    const newUser = User({
        username,
        email,
        password: hashedPassword
    });

    const savedUser = await newUser.save();

    //New Session
    req.session.user = {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email
    }

    res.status(201).json({
        message: "User registered and logged in successfully!"
    })

})


export default router;