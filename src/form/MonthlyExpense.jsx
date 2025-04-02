import React from 'react';
import { toast } from 'react-toastify';

function ExpenseTable({ expenses , onEditOrDelete }) {


  //handling Dates
  function formatDate(inputDate) {
    if(!inputDate) {
        return 'N/A';
    }

    let dateObject = new Date(inputDate);

    if(isNaN(dateObject.getTime())) {
        return 'Invalid Date';
    }

    const formatType = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }

    return dateObject.toLocaleDateString('en-US', formatType);

  }

  const handleCheckboxChange = (event, expenseId) => {
    console.log(`Checkbox changed for ${expenseId}, checked: ${event.target.checked}`);
  };

  const handleEdit = (expenseId) => {
    console.log(`Edit action triggered for ${expenseId}`);
  };

  const handleDelete = async (expenseId) => {
    console.log(`Delete action triggered for ${expenseId}`);

    const endpoint = `http://localhost:3000/api/expenses/${expenseId}`

    const fetchOptions = {
        method: 'DELETE',
        credentials: 'include'
    }

    const response = await fetch(endpoint, fetchOptions);

    if (response.ok) {
        const data = await response.json();
        toast.success(`Expense '${data.name} delted`);
        
        onEditOrDelete();

    } else {
        const errorData = await response.json();
        toast.error(`${errorData.msg}`)
    }
  };

  console.log(expenses);

  return (
    <div className="mt-8 mb-8">
      <h3 className="text-2xl font-bold mb-4">Monthly Expenses</h3>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4">
                <label htmlFor="SelectAll" className="sr-only">Select All</label>
                <input type="checkbox" id="SelectAll" className="size-4 rounded border-gray-300" />
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">Category</th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">Date</th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">Amount</th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {expenses.map((expense) => (
              <tr key={expense._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <label htmlFor={`SelectRow-${expense._id}`}/>
                  <input
                    type="checkbox"
                    id={`SelectRow-${expense._id}`}
                    className="size-4 rounded border-gray-300"
                    onChange={(e) => handleCheckboxChange(e, expense._id)}
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {expense.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {expense.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {formatDate(expense.createdAt)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {`$${expense.amount.toFixed(2)}`}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <div className="flex items-center gap-x-2">
                    <button
                      onClick={() => handleEdit(expense._id)}
                      className="p-1 text-gray-500 hover:text-indigo-600 rounded focus:outline-none hover:scale-110 transition-all duration-200 active:scale-100"
                      title="Edit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
                    </button>
                    <button
                      onClick={() => handleDelete(expense._id)}
                      className="p-1 text-gray-500 hover:text-red-600 active:scale-100 hover:scale-110 transition-all duration-200"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseTable;
