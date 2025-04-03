import { useEffect, useState } from "react";

const TransactionPage = () => {

    const [expenseData, setExpenseData] = useState([])
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');



    async function fetchAllExpenses() {
        const response = await fetch('http://localhost:3000/api/expenses', {
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            setExpenseData(data);
        } else {
            const errorData = await response.json();
            //do Something later
        }
    }

    useEffect(() => {
        fetchAllExpenses();
    }, fetchAllExpenses);


    const handleDates = () => {

    }

    const handleInputchange = () => {

    }




    return (
        <>
            <div>
                <div className="flex flex-col gap-4 px-4 max-w-90 p-4 border-dashed border-2 border-gray-400 rounded-md">
                    <div className="flex items-center justify-between">
                        <label htmlFor="startDate" className="text-gray-900 font-medium">
                            Select Start Date:
                        </label>
                        <input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={handleDates}
                            className="ml-4 border border-gray-300 rounded-md px-2 py-1 focus:border-gray-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="endDate" className="text-gray-900 font-medium">
                            Select an End Date:
                        </label>
                        <input
                            id="endDate"
                            type="date"
                            value={endDate}
                            onChange={handleDates}
                            className="ml-4 border border-gray-300 rounded-md px-2 py-1 focus:border-gray-500 focus:outline-none"
                            style={{ caretColor: "#1f2937" }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 px-5 rounded-md hover:bg-black/95 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-gray-900 cursor-pointer transition-all duration-200 active:scale-95"
                        onSubmit={handleDates}
                    >
                        Submit
                    </button>

                </div>

            </div>
        </>
    )
}


export default TransactionPage;