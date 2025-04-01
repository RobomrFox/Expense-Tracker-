import { Content } from '@radix-ui/react-tooltip';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';




const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        const endpoint = 'http://localhost:3000/auth/login';

        const userData = { email, password };

        const fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
            credentials: 'include'
        }

        const response = await fetch(endpoint, fetchOptions);

        if (response.ok) {
            const data = await response.json();
            toast.success("Login successful");
            navigate('/');
        } else {
            const errorData = await response.json();
            console.log('Login Failed: ', errorData);
            toast.error(errorData.error || "Login Failed. Please Try Again!");
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-140 h-70 bg-purple-200/30 shadow-purple-200 shadow-[8px_8px_0px_0px] border">
                <h1 className="text-2xl text-center py-4">Login/Sign In</h1>

                <form onSubmit={handleLogin}>
                    <div className="w-[90%] mx-auto mt-6 flex justify-between mb-4">
                        <label htmlFor="email" className="text-xl">User Email: </label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="focus:shadow-purple-400/50 focus:shadow text-xl border pl-1 focus:outline-none" id="email" type="text" />
                    </div>
                    <div className="w-[90%] mx-auto flex justify-between">
                        <label htmlFor="password" className="text-xl">Enter Password: </label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            className="focus:shadow-purple-400/50 focus:shadow text-xl border pl-1 focus:outline-none" id="password" type="password" />
                    </div>

                    <div className="flex justify-around mt-8 w-[95%] mx-auto">

                        <Link to="/register">
                            <button className="border-purple-400/50 border shadow-purple-500
                        hover:shadow-[0_0_0_2px]
                        transition-shadow duration-300 p-2 rounded-2xl">
                                Register
                            </button>
                        </Link>

                        <button className="border-purple-400/50 border shadow-purple-500
             hover:shadow-[0_0_0_2px]
             transition-shadow duration-300 p-2 rounded-2xl ">
                            Submit
                        </button>

                    </div>

                </form>
                            <h2 className='ml-18 mt-1'>Register as new User</h2>
            </div>
        </div>
    )
}


export default LoginPage;