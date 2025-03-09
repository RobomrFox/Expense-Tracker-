import mongoose from "mongoose";

async function run() {
    await mongoose.connect("mongodb://localhost:27017/expense-tracker");
};

run();

const Schema = new mongoose.Schema({
    username: String, 
    age: Number, 
    email: String,
    password: String,
});

const User = mongoose.model('User', Schema);

export default User;
