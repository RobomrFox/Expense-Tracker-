import express from 'express';

import Category from '../models/Category.js'

const router = express.Router();


router.post('/', async (req, res) => {
    const { name, amount } = req.body;

    if (!name) {
        return res.status(401).json({
            error: "Name Field can not be Empty"
        });
    }

    let amountToSave = null;
    if (amount !== undefined && amount !== null && amount !== "") {
        const numericAmount = Number(amount);
        if (isNaN(numericAmount) || numericAmount < 0) {
            return res
                .status(400)
                .json({ error: "Amount must be a Positive Number." });
        }
        amountToSave = numericAmount;
    }

    const userId = req.session.user.id;

    const existingCategory = await Category.findOneby({
        name: name, userId: userId
    })


    if (existingCategory) {
        return res.status(300).json({
            msg: "This Category already exisits"
        })
    } else {

        const newCategory = Category({
            name,
            amount,
            createdAt: {
                type: Date,
                default: Date.now()
            },
            userId
        });

        await newCategory.save();

        return res.json({
            msg: "Successfully Created a Category."
        });
    }



})


export default router;