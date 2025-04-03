import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, amount, category } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "Name Field can not be Empty",
        });
    }

    const numericAmount = Number(amount);
    if (amount === undefined || amount === null || isNaN(numericAmount) || numericAmount <= 0) {
        return res.status(400).json({
            error: "Amount must be a positive number.",
        });
    }

    if (!req.session || !req.session.user || !req.session.user.id) {
        return res.status(401).json({ error: "Authentication required." });
    }
    const userId = req.session.user.id;

    const newExpense = new Expense({
        name,
        amount: numericAmount,
        category: category,
        userId,
    });

    await newExpense.save();

    return res.json({
        msg: "Successfully Created an Expense.",
    });
});

router.get('/', async (req, res) => {
    if (!req.session || !req.session.user || !req.session.user.id) {
      return res.status(401).json({ error: "Authentication required." });
    }
    const userId = req.session.user.id;
    const expenses = await Expense.find({ userId }).sort({ createdAt: -1 });
    return res.status(200).json(expenses);
});


router.delete('/:id', async (req, res) => {
    const expenseId = req.params.id;

    if (!(req.session && req.session.user && req.session.user.id)) {
        return res.status(401).json({ error: "Authentication required."});
    }

    const userId = req.session.user.id;

    const deletedExpense = await Expense.findOneAndDelete({
        _id: expenseId,
        userId: userId
    })

    if(!deletedExpense) {
        return res.status(401).json({
            error: "Expense Not Found or Denied"
        })
    }


    return res.status(200).json({
        msg: `Expense '${deletedExpense}' deleted Successfully`,
        name: `${deletedExpense.name}`
    })
})

router.post('/:id', async (req, res) =>  {

    const id = req.params.id;

    if (!req.session || !req.session.user || !req.session.user.id) {
        return res.status(401).json({
            error: "Authentication Required."
        })
    }

    const userId = req.session.user.id;

    const existingExpense = await Expense.find

})

export default router;
