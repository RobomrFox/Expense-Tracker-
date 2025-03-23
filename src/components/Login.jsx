function Login() {
    return (
        <div className="h-screen bg-neutral-500">
            <div className="container max-w-80 mx-auto py-20">
                <div className="flex flex-col items-center rounded-xl bg-neutral-50 shadow-lg">
                    <div className="pt-8"><label>Username</label></div>
                    <div className="pt-1"><input className="border-1 border-black-500" name="logUsername"></input></div>
                    <div className="pt-8"><label >Password</label></div>
                    <div className="pt-1"><input className="border-1 border-black-500" name="logPassword"></input></div>
                    <div className="pt-15"><button className="bg-blue-600 rounded-xl text-white px-6 py-0.5">Login</button></div>
                    <div className="p-8"><button className="">Register</button></div>
                </div>
            </div>
        </div>
    )
}
export default Login;