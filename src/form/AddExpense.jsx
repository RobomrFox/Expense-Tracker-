import React, { useState } from "react";
import { toast } from 'react-toastify';

function AddExpense() {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    async function handleAddExpenseForm(event) {
        event.preventDefault();

        const trimmedName = name.trim();
        if (!trimmedName) {
            toast.error("Expense Name cannot be empty.");
            return;
        }

        let amountToSend = null;
        const trimmedAmount = amount.trim();
        if (trimmedAmount !== "") {
            const numericAmount = Number(trimmedAmount);
            if (isNaN(numericAmount) || numericAmount <= 0) {
                toast.error("Amount must be a valid positive number.");
                return;
            }
            amountToSend = numericAmount;
        } else {
            toast.error("Amount cannot be empty.");
            return;
        }

        const categoryToSend = category.trim() !== "" ? category.trim() : null;

        const expenseData = {
            name: trimmedName,
            amount: amountToSend,
            category: categoryToSend
        };

        const endpoint = 'http://localhost:3000/api/expenses';

        const fetchOptions = {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expenseData)
        };

        try {
            const response = await fetch(endpoint, fetchOptions);
            const responseData = await response.json();

            if (response.ok) {
                toast.success(responseData.msg || "Expense Added Successfully!");
                setName('');
                setAmount('');
                setCategory('');
            } else {
                toast.error(responseData.error || responseData.msg || "Failed to add expense.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Network error. Could not reach server.");
        }
    }

    return (
        <div className="max-w-2xl bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
            <h2 className="text-3xl font-bold mb-6">Add New Expense</h2>
            <form onSubmit={handleAddExpenseForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                    <div>
                        <label
                            htmlFor="expenseName"
                            className="block text-sm font-bold text-black/90 mb-2"
                        >
                            Expense Name
                        </label>
                        <input
                            type="text"
                            id="expenseName"
                            placeholder="e.g., Coffee"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="amount"
                            className="block text-sm font-bold text-black/90 mb-2"
                        >
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="e.g., 3.50"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <label
                        htmlFor="budgetCategory"
                        className="block text-sm font-bold text-black/90 mb-2"
                    >
                        Budget Category
                    </label>
                    <select
                        id="budgetCategory"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white appearance-none"
                    >
                        <option value="">Select Category</option>
                        <option value="Food">Food (Hardcoded)</option>
                        <option value="Transport">Transport (Hardcoded)</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-md hover:bg-black/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
                    >
                        <span>Add Expense</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddExpense;
