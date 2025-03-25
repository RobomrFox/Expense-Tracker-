function AddCategory() {

    return (
        <dialog id="addCategoryModal" className="min-h-50 max-w-80 mx-auto my-auto rounded-xl font-mono text-center">
                <div className="py-5 mb-5 font-bold">
                    <label>ADD CATEGORY</label>
                </div>
                 <div>
                    <div>
                        <label>Name</label>
                    </div>
                    <div className="mt-1 mb-5 mx-5 border-1 rounded-sm">
                        <input></input>
                    </div>
                </div>
                <div className="py-5">
                    <form method="dialog" className="space-x-5">
                        <button className="btn min-w-20">BACK</button>
                        <button className="btn bg-blue-500 text-white rounded-xl min-w-20">CREATE</button>
                    </form>
                </div>
            </dialog>
    )
}
export default AddCategory;