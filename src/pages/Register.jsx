import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-140 h-80 bg-orange-200/30 shadow-orange-300 shadow-[8px_8px_0px_0px] border">
                <h1 className="text-2xl text-center py-4">Register/Sign Up</h1>

                <form action="" method="post">
                    <div className="w-[90%] mx-auto mt-6 flex justify-between mb-4">
                        <label htmlFor="fullname" className="text-xl">
                            User Name:
                        </label>
                        <input
                            id="userName"
                            type="text"
                            placeholder="Your Name"
                            className="focus:shadow-orange-400/50 focus:shadow text-xl border pl-1 focus:outline-none"
                        />
                    </div>
                    <div className="w-[90%] mx-auto flex justify-between mb-4">
                        <label htmlFor="email" className="text-xl">
                            User Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            className="focus:shadow-orange-400/50 focus:shadow text-xl border pl-1 focus:outline-none"
                        />
                    </div>
                    <div className="w-[90%] mx-auto flex justify-between">
                        <label htmlFor="password" className="text-xl">
                            Enter Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            className="focus:shadow-orange-400/50 focus:shadow text-xl border pl-1 focus:outline-none"
                        />
                    </div>

                    <div className="flex justify-around mt-8 w-[95%] mx-auto">
                        <button className="border-orange-400/50 border shadow-orange-300 hover:shadow-[0_0_0_2px] transition-shadow duration-300 p-2 rounded-2xl">
                            Register
                        </button>

                        <Link to="/login">
                            <button className="border-orange-400/50 border shadow-orange-300 hover:shadow-[0_0_0_2px] transition-shadow duration-300 p-2 rounded-2xl">
                                To Login
                            </button>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
