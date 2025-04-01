import express from 'express';

import Category from '../models/Category.js'

const router = express.Router();


router.post('/category', async (req, res) => {
    const { name, amount } = req.body;

    if(!name) {
        return res.status(401).json({
            error: "Name Field can not be Empty"
        });
    }

    if (amount < 0 || !typeof(amount) === 'number') {
        return res.status(401).json({
            error: "Amount can not be Negative."
        })
    }

    const existingCategory = await Category.findOneby({
        name
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
            }
        });

        const saveCategory = await newCategory.save();
    }

    return res.json({
        msg: "Successfully Created a Category."
    })

})