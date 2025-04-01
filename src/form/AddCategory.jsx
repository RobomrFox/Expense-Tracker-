// src/form/AddCategory.jsx
import React from "react";

function AddCategory() {
  return (
    <div className="max-w-2xl bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
      <h2 className="text-3xl font-bold mb-6">Create a Category</h2>
      <form>
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
            placeholder="e.g., 350"
            step="0.01"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-md hover:bg-black/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer"
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
