function Topbar() {
    return (
        <div>
            <div className="container max-w-200 mx-auto">
                <div className="flex flex-row justify-center text-neutral-600 font-mono">
                    <div className="mt-2 mx-3 w-35 text-center">
                        <button className="btn" onClick={() => document.getElementById('addCategoryModal').showModal()}>ADD CATEGORY</button>
                    </div>
                    <div className="mt-2 mx-3 w-35 text-center"><button>DELETE CATEGORY</button></div>
                    <div className="mt-2 mx-3 w-35 text-center"><button>ADD EXPENSE</button></div>
                </div>
            </div>

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
        </div>
        
    )
}
export default Topbar;