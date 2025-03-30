import express from 'express';
import User from '../db';

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

    const existingEmail = await User.fineOne({
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


    
})