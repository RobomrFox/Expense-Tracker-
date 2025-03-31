function ExpenseRecords() {
    return (
        <div className="container max-w-300 mt-10 font-mono">
            <div className="flex">
                <div className="text-2xl"><label className="font-bold">Expenses</label>
                    <div className="ml-5 mt-5 text-base">
                        <label>Selected Category: </label>
                        <select id="categories" className="rounded-lg bg-purple-700 text-white text-center mr-10">
                            <option selected>All Expenses</option>
                            <option value="C1">Category 1</option>
                            <option value="C2">Category 2</option>
                            <option value="C3">Category 3</option>
                        </select>
                        <label>Filter Display: </label>
                        <select id="timeDisplays" className="rounded-lg bg-purple-700 text-white text-center">
                            <option selected>Lifetime</option>
                            <option value="D1">Past Week</option>
                            <option value="D2">Past Month</option>
                            <option value="D3">Past 6 Months</option>
                            <option value="D4">Past Year</option>
                        </select>
                    </div>
                    <div className="flex mt-10 text-base justify-between">
                        <label>Name</label>
                        <label>Amount</label>
                        <label>Category</label>
                        <label>Date</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpenseRecords;