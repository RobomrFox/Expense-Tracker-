function DeleteCategory({ closeDelCatModal }) {
    function bgClickCloseModal(e) {
        if (e.target.id === "modal-bg") {
            closeDelCatModal();
        }
    }
    return (
        <div id="modal-bg" className="absolute top-0 left-0 w-screen h-screen font-mono text-center bg-zinc-700/50 flex flex-col
        justify-center items-center" onClick={bgClickCloseModal}>
            <div className="bg-white rounded-lg">
                <div className="py-5 font-bold">
                    <label>DELETE CATEGORY</label>
                </div>
                <div>
                    <div>
                        <label>Category</label>
                    </div>
                    <div className="pb-13 mx-9">
                        <select id="categories" className="border-1 border-neutral-500">
                            <option selected>Select Category</option>
                            <option value="C1">Category 1</option>
                            <option value="C2">Category 2</option>
                            <option value="C3">Category 3</option>
                        </select>
                    </div>
                </div>
                
                <div className="py-5">
                    <div className="space-x-5">
                        <button className="min-w-20" onClick={closeDelCatModal}>BACK</button>
                        <button className="bg-blue-500 text-white rounded-xl min-w-20" onClick={closeDelCatModal}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteCategory;