function AddCategory({ closeAddCatModal }) {
    function bgClickCloseModal(e) {
        if (e.target.id === "modal-bg") {
            closeAddCatModal();
        }
    }
    return (
        <div id="modal-bg" className="absolute top-0 left-0 w-screen h-screen font-mono text-center bg-zinc-700/50 flex flex-col
        justify-center items-center" onClick={bgClickCloseModal}>
            <div className="bg-white rounded-lg">
                <div className="py-5 font-bold">
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
                    <div className="space-x-5">
                        <button className="min-w-20" onClick={closeAddCatModal}>BACK</button>
                        <button className="bg-blue-500 text-white rounded-xl min-w-20" onClick={closeAddCatModal}>CREATE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddCategory;