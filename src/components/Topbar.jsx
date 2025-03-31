import { useState } from "react";
import AddCategory from "../form/AddCategory";
import AddExpense from "../form/AddExpense";
import DeleteCategory from "../form/DeleteCategory";

function Topbar() {
    const [checkAddCatModal, toggleAddCatModal] = useState(false);
    const [checkDelCatModal, toggleDelCatModal] = useState(false);
    const [checkAddExpModal, toggleAddExpModal] = useState(false);

    function closeAddCatModal() {
        toggleAddCatModal(false);
    }
    function closeDelCatModal() {
        toggleDelCatModal(false);
    }
    function closeAddExpModal() {
        toggleAddExpModal(false);
    }

    return (
        <div>
            <div className="container max-w-200 mx-auto">
                <div className="flex flex-row justify-center text-neutral-600 font-mono">
                    <div className="mt-2 mx-3 w-35 text-center"><button onClick={() => toggleAddCatModal(true)}>ADD CATEGORY</button></div>
                    {checkAddCatModal && <AddCategory closeAddCatModal={closeAddCatModal}/>}
                    <div className="mt-2 mx-3 w-35 text-center"><button onClick={() => toggleDelCatModal(true)}>DELETE CATEGORY</button></div>
                    {checkDelCatModal && <DeleteCategory closeDelCatModal={closeDelCatModal}/>}
                    <div className="mt-2 mx-3 w-35 text-center"><button onClick={() => toggleAddExpModal(true)}>ADD EXPENSE</button></div>
                    {checkAddExpModal && <AddExpense closeAddExpModal={closeAddExpModal}/>}
                </div>
            </div>
        </div>
    )
}
export default Topbar;