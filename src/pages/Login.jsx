import { Link } from 'react-router-dom';

const LoginPage = () => {


    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-140 h-80 bg-purple-200/30 shadow-purple-200 shadow-[8px_8px_0px_0px] border">
                <h1 className="text-2xl text-center py-4">Login/Sign In</h1>

                <form action="" method="post">
                    <div className="w-[90%] mx-auto mt-10 flex justify-between mb-4">
                        <label htmlFor="email" className="text-xl">User Email: </label>
                        <input className="focus:shadow-purple-400/50 focus:shadow text-xl border pl-1 focus:outline-none" id="email" type="text" />
                    </div>
                    <div className="w-[90%] mx-auto flex justify-between">
                        <label htmlFor="password" className="text-xl">Enter Password: </label>
                        <input className="focus:shadow-purple-400/50 focus:shadow text-xl border pl-1 focus:outline-none" id="password" type="text" />
                    </div>

                    <div className="flex justify-around mt-8 w-[95%] mx-auto">
                        <button className="border-purple-400/50 border shadow-purple-500
             hover:shadow-[0_0_0_2px]
             transition-shadow duration-300 p-2 rounded-2xl ">
                            Submit
                        </button>


                        <Link to="/register">
                            <button className="border-purple-400/50 border shadow-purple-500
                        hover:shadow-[0_0_0_2px]
                        transition-shadow duration-300 p-2 rounded-2xl">
                                Register
                            </button>
                        </Link>

                    </div>

                </form>

            </div>
        </div>
    )
}


export default LoginPage;