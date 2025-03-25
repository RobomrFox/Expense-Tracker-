import AddCategory from "./AddCategory";
import React ,{useState} from "react";

function Topbar() {

    const [show, setShow] = useState(false)

    const ShowPopup = () => {
        if (show == true){
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    return (
        <div className="container max-w-200 mx-auto">
            <div className="flex flex-row justify-center text-neutral-600 font-mono">
                <div className="mt-2 mx-3 w-35 text-center">
                    <button onClick={ShowPopup}>ADD CATEGORY</button>
                    {
                        show && (<AddCategory/>)
                    }
                </div>
                <div className="mt-2 mx-3 w-35 text-center"><button>DELETE CATEGORY</button></div>
                <div className="mt-2 mx-3 w-35 text-center"><button>ADD EXPENSE</button></div>
            </div>
        </div>
    )
}
export default Topbar;