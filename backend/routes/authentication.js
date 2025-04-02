import express from 'express';
import User from '../models/Users.js';
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
            error: "UserName already Exisits."
        })
    }

    if (existingEmail) {
        return res.status(400).json({
            error: "Email Already Exists."
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

});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({
            error: "Email Field is Empty."
        });
    }

    if (!password) {
        return res.status(400).json({
            error: "Password Field is Empty."
        });
    }

    //User Exist Checks
    const existingUser = await User.findOne({ email });


    if (existingUser) {
        const storedPassword = existingUser.password;

        const passwordMatch = bcrypt.compare(password, storedPassword);

        if (passwordMatch) {
            req.session.user = {
                id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email
            }

            return res.json({
                msg: "You're Logged In Now."
            })
        } else {
            return res.status(401).json({
                error: "Password Isn't Correct!"
            })
        }
    } else {
        return res.status(400).json({
            error: "No User with this Email. Please Register Now!"
        })
    }

});


router.get('/status', async (req, res) => {

    if (req.session.user) {
        return res.json({
            loggedIn: true,
            user: req.session.user
        });
    } else {
        return res.json({
            loggedIn: false, 
            user: null
        })
    }
});


export default router;