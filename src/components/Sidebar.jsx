import { useState } from "react";

const Sidebar = function () {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    

    return(
    <>
        <aside className={`${isCollapsed ? "w-16" : "w-64"} bg-purple-200 border-r`}>

            <div className="mt-4 mx-2 p-1 bg-purp-300/10 flex justify-center">

                <div className={`${isCollapsed ? "hidden" : "initial flex items-center"} `}>

                    <svg width="40" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 8c0-.478-.379-1-1-1h-13c-.62 0-1 .519-1 1v13c0 .621.52 1 1 1h13c.478 0 1-.379 1-1zm-13.5.5h12v12h-12zm-2.5-2.5h13.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13.75c-.53 0-1 .47-1 1v13.75c0 .414.336.75.75.75s.75-.336.75-.75zm-2.5-2.5h13.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.25c-.53 0-1 .47-1 1v14.25c0 .414.336.75.75.75s.75-.336.75-.75z" fillRule="nonzero"/></svg>

                    <span>Tracks</span>
                </div>

                <button className={` ${isCollapsed ? "" : "ml-auto"} hover:bg-purple-500/10 rounded`} onClick={() => setIsCollapsed(prevState => !prevState)}>
                    <svg width="40" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4 3c-.478 0-1 .379-1 1v16c0 .62.519 1 1 1h16c.621 0 1-.52 1-1v-16c0-.478-.379-1-1-1zm15.5 1.5v15h-4v-15zm-15 15v-15h9.5v15zm6.342-3.679c.137.124.299.179.458.179.358 0 .7-.284.7-.705v-6.59c0-.422-.342-.705-.7-.705-.159 0-.321.055-.458.178-1.089.982-2.684 2.417-3.576 3.22-.17.153-.266.371-.266.601 0 .229.096.448.265.601.893.803 2.487 2.239 3.577 3.221zm-.342-5.317v2.991l-1.66-1.496z" fillRule="nonzero"/></svg>
                </button>
            </div>

            <nav className={`${isCollapsed ? "flex justify-center" : ""} mx-2 p-1 mt-30`}>
                <div className="flex items-center gap-1 hover:bg-purple-500/10 rounded p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    {!isCollapsed && <span>Home</span>}
                </div>
            </nav>

            <div>

            </div>

        </aside>
    </>)

}
export default Sidebar;