// src/form/AddExpense.jsx
import React from "react";

function AddExpense() {
    return (
        <div className="max-w-2xl bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
            <h2 className="text-3xl font-bold mb-6">Add New Expense</h2>
            <form>

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
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white appearance-none"
                    >

                        <option value="">Select Category</option>

                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-md hover:bg-black/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        cursor-pointer"
                    >
                        <span>Add Expense</span>
                        {/* Simple SVG for plus icon in circle */}
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
