const Sidebar = function () {
    return (
        <div className="fixed top-0 container max-w-30 h-screen bg-purple-900">
            <div className="flex flex-col items-center font-semibold font-mono text-white">
                <div className="mt-8"><button>EXPENSES</button></div>
                <div className="my-8"><button>REVIEW</button></div>
                <div className="mb-8"><button>AUDIT LOG</button></div>
                <div className="mb-8"><button>LOGOUT</button></div>
            </div>
        </div>
    )
}
export default Sidebar;