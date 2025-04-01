import mongoose from 'mongoose'



const categorySchema = new mongoose.Schema({
    name: String,
    amount: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


const Category = mongoose.model('Category', categorySchema);


export default Category;