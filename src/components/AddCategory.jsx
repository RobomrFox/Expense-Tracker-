import Modal from 'react-bootstrap/Login'

function AddCategory() {
    return (
        <div className="fixed mx-auto my-50 min-h-50 max-w-80 rounded-lg border-2 border-neutral-300 font-mono text-center">
            <div className="py-8 font-bold"><label>ADD CATEGORY</label></div>
            <div className=""><label>Name</label></div>
            <div className="pb-5"><input className="border-1 border-neutral-500"></input></div>
            <div className="py-8 space-x-10">
                <button className="border-1 border-black-500 rounded-xl min-w-25">BACK</button>
                <button className="bg-blue-500 text-white rounded-xl min-w-25">CREATE</button>
            </div>
        </div>
    )
}
export default AddCategory;