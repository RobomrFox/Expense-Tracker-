import Settings from "./Settings";
import { useState } from "react";

const Sidebar = function () {
    const [checkSettingsModal, toggleSettingsModal] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const name = "Avi";

    function closeToggleSettingsModal() {
        toggleSettingsModal(false);
    }

    return (
        <>
            <aside className={`${isCollapsed ? "w-16" : "w-64"} bg-purple-200 border-r transition-all duration-300 flex flex-col justify-between h-full overflow-y-auto`}>

                <div className="mt-4 mx-2 p-2 bg-purp-300/10 flex">

                    <div className={`${isCollapsed ? "w-0" : "w-64"} gap-2 items-center transition-all flex overflow-hidden`}>

                        <svg width="40" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 8c0-.478-.379-1-1-1h-13c-.62 0-1 .519-1 1v13c0 .621.52 1 1 1h13c.478 0 1-.379 1-1zm-13.5.5h12v12h-12zm-2.5-2.5h13.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-13.75c-.53 0-1 .47-1 1v13.75c0 .414.336.75.75.75s.75-.336.75-.75zm-2.5-2.5h13.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.25c-.53 0-1 .47-1 1v14.25c0 .414.336.75.75.75s.75-.336.75-.75z" fillRule="nonzero" /></svg>

                        <span className="text-xl">Expense</span>
                    </div>

                    <button className={` ${isCollapsed ? "" : "ml-auto"} hover:bg-purple-500/10 rounded cursor-pointer`} onClick={() => {
                        setIsCollapsed(prevState => !prevState);

                        }}>
                        <svg className={`${isCollapsed ? "rotate-180" : " " } transition-transform duration-200`}  width="40" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4 3c-.478 0-1 .379-1 1v16c0 .62.519 1 1 1h16c.621 0 1-.52 1-1v-16c0-.478-.379-1-1-1zm15.5 1.5v15h-4v-15zm-15 15v-15h9.5v15zm6.342-3.679c.137.124.299.179.458.179.358 0 .7-.284.7-.705v-6.59c0-.422-.342-.705-.7-.705-.159 0-.321.055-.458.178-1.089.982-2.684 2.417-3.576 3.22-.17.153-.266.371-.266.601 0 .229.096.448.265.601.893.803 2.487 2.239 3.577 3.221zm-.342-5.317v2.991l-1.66-1.496z" fillRule="nonzero" /></svg>
                    </button>
                </div>

                <nav className="flex flex-col">

                    <div className="flex gap-2 hover:bg-purple-500/10 rounded p-2 mx-2 cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
                            <path stroke-linecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <div className={`${isCollapsed ? "w-0" : "w-64"} transition-all flex overflow-hidden`}>
                            <span className="text-xl">Home</span>
                        </div>
                    </div>

                    <div className="flex gap-2 hover:bg-purple-500/10 rounded p-2 mx-2 cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg>
                        <div className={`${isCollapsed ? "w-0" : "w-64"} transition-all flex overflow-hidden`}>
                            <span className="text-xl">Categories</span>
                        </div>
                    </div>

                    <div className="flex gap-2 hover:bg-purple-500/10 rounded p-2 mx-2 cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                        <div className={`${isCollapsed ? "w-0" : "w-64"} transition-all flex overflow-hidden`}>
                            <span className="text-xl">Budget</span>
                        </div>
                    </div>

                    <div className="flex gap-2 hover:bg-purple-500/10 rounded p-2 mx-2 cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <div className={`${isCollapsed ? "w-0" : "w-64"} transition-all flex overflow-hidden`}>
                            <span className="text-xl">Transaction</span>
                        </div>
                    </div>

                    <hr className="my-2 border-purple-800/20" />

                    <button onClick={() => toggleSettingsModal(true)} className="flex gap-2 items-center mx-2 p-2 hover:bg-purple-500/10 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>
                        <div className={`${isCollapsed ? "w-0" : "w-64"} transition-all flex overflow-hidden`}>
                            <span className="text-xl">Settings</span>
                        </div>
                    </button>
                    {checkSettingsModal && <Settings closeToggleSettingsModal={closeToggleSettingsModal}/>}
                </nav>

                <div className="flex ml-4 mb-4 h-full items-end">
                    <div className="gap-2 flex items-center">
                        <div className="aspect-square rounded-full border flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className={`${isCollapsed ? "w-0" : "w-64"} transition-all flex overflow-hidden`}>
                            <span className="text-xl truncate">Hi, {name}</span>
                        </div>
                    </div>
                    <span></span>
                </div>

            </aside>
        </>)

}
export default Sidebar;