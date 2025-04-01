import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    category: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


const Expense = mongoose.model('Expense', expenseSchema);


export default Expense;