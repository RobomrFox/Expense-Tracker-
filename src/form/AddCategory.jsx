import React, { useState } from "react";
import { toast } from 'react-toastify';

function AddCategory({onCategoriesAdded}) {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    async function handleCategoryForm(event) {
        event.preventDefault();

        const trimmedName = name.trim();

        let amountToSend = null;
        if (amount && amount.trim() !== "") {
            const numericAmount = Number(amount);
            if (isNaN(numericAmount) || numericAmount < 0) {
                toast.error("If provided, Amount must be a valid non-negative number.");
                return;
            }
            amountToSend = numericAmount;
        }

        const Category = {
            name: trimmedName,
            ...(amountToSend !== null && {amount: amountToSend})
        }

        const endpoint = 'http://localhost:3000/api/category'

        const fetchOptions = {
            method: "POST",
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Category)
        }

        try {
            const response = await fetch(endpoint, fetchOptions);
            const responseData = await response.json();
    
            if (response.ok) {
                toast.success(responseData.msg || "New Category Added");
                setName("");
                setAmount("");

                //Adding new Category to home
                onCategoriesAdded();
                
            } else {
                toast.error(responseData.error || responseData.msg || "Action Failed. Try Again");
            }
        } catch (error) {
            // Catch network errors or issues reaching the server
            console.error("Fetch error:", error);
            toast.error("Network error. Could not reach server.");
        }

    }



    return (
        <div className="max-w-2xl bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
            <h2 className="text-3xl font-bold mb-6">Create a Category</h2>
            <form onSubmit={handleCategoryForm}>
                <div className="mb-5">
                    <label
                        htmlFor="categoryName"
                        className="block text-sm font-bold text-black/90 mb-2"
                    >
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="categoryName"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        placeholder="e.g., Groceries"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                    />
                </div>

                <div className="mb-8">
                    <label
                        htmlFor="budgetAmount"
                        className="block text-sm font-bold text-black/90 mb-2"
                    >
                        Amount
                    </label>
                    <input
                        type="number"
                        id="budgetAmount"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                        placeholder="e.g., 350"
                        step="0.01"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-md hover:bg-black/95 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 cursor-pointer transition-all duration-200 active:scale-95"
                    >
                        <span>Create Budget</span>
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
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddCategory;
