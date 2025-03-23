function AddExpense() {
    return (
        <div className="min-h-100 max-w-80 mx-auto my-auto rounded-lg border-2 border-neutral-300 font-mono text-center">
            <div className="py-8 font-bold"><label>ADD EXPENSE</label></div>
            <div className=""><label>Name</label></div>
            <div className="pb-5"><input className="border-1 border-neutral-500"></input></div>
            <div className=""><label>Amount</label></div>
            <div className="pb-5"><input className="border-1 border-neutral-500"></input></div>
            <div className=""><label>Category</label></div>
            <div className="pb-13">
                <select id="categories" className="border-1 border-neutral-500">
                    <option selected>Select Category</option>
                    <option value="C1">Category 1</option>
                    <option value="C2">Category 2</option>
                    <option value="C3">Category 3</option>
                </select>
            </div>
            <div className="py-8 space-x-10">
                <button className="border-1 border-black-500 rounded-xl min-w-25">BACK</button>
                <button className="bg-blue-500 text-white rounded-xl min-w-25">CREATE</button>
            </div>
        </div>
    )
}
export default AddExpense;