import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Error from "./pages/Error";
import ExpenseRecords from "./components/ExpenseRecords";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Register';
import ProtectedRoutes from "./components/ProtectedRoutes";

// Layout for permanent Sidebar
const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto p-4">
        <Outlet />
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
    element: <ProtectedRoutes><Layout /></ProtectedRoutes>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // You can add additional child routes here if needed
      // For example:
      // {
      //   path: "expenses",
      //   element: <ExpenseRecords />
      // }
    ],
  },
]);

export default router;