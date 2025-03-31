import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("form submitted");
    
        const endpoint = 'http://localhost:3000/auth/register';
    
        const userData = { username, email, password };
    
        const fetchOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        }
    
        const response = await fetch(endpoint, fetchOptions);
    
        const data = await response.json();
    
        console.log("Registeration successful:", data);

        navigate("/");

    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-140 h-80 bg-orange-200/30 shadow-orange-300 shadow-[8px_8px_0px_0px] border">
                <h1 className="text-2xl text-center py-4">Register/Sign Up</h1>

                <form onSubmit={handleSubmit}>
                    <div className="w-[90%] mx-auto mt-6 flex justify-between mb-4">
                        <label htmlFor="fullname" className="text-xl">
                            User Name:
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Your Name"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
