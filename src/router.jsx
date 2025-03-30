
import { createBrowserRouter, useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Error from "./pages/Error";
import { expenseLoader } from "./helper/ExpenseLoader";
import ExpenseRecords from "./components/ExpenseRecords";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Register';

//Layout for permanent Sidebar
const Layout = () => {

  const expenseData = useLoaderData();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="main-content flex-grow p-4">
        <Outlet context={{expenseData}}/>
        
      </div>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    loader: expenseLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Categories",
        element: <h1>Categories</h1>,
      },
    ],
  },
]);

export default router;
