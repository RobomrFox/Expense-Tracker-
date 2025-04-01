import { useState, useEffect, Children } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";


const ProtectedRoutes = ({children}) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isAuthenticated, setIsAuthenticated ] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const Authenticated = async () => {
            const response = await fetch('http://localhost:3000/auth/status', {
                credentials: "include"
            });

            if (response.ok) {
                const data = await response.json();

                if (data.loggedIn && data.user) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }

            } else {
                setIsAuthenticated(false);
            }

            setIsLoading(false);
            
        }

        Authenticated();
    }, []);

   // Prevent multiple toasts
    useEffect(() => {
        if (!isLoading && isAuthenticated === false) {
            toast.error("User Not logged In... Redirecting to Logging Page");
        }

        //dependency becuase isAuthenticated & isLoading has multiple checks
    }, [isLoading, isAuthenticated]);


    if (isLoading) {
        return(
            <div>
                Fetching Data... Loading...
            </div>
        )
    }

    if (!isAuthenticated) {
        
        return(
            <>
                <Navigate to='/login' state={{from: location}}></Navigate>
            </>
        )
    }

    return children;
};


export default ProtectedRoutes;