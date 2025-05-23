import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Error from "./pages/Error";
import ExpenseRecords from "./components/ExpenseRecords";
import LoginPage from "./pages/Login";
import RegisterPage from './pages/Register';
import ProtectedRoutes from "./components/ProtectedRoutes";
import TransactionPage from "./pages/transaction";
import BudgetPage from "./pages/budget";
import CategoriesPage from "./pages/categories";

// Layout for permanent Sidebar
const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-screen overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 h-screen overflow-y-auto">
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
      {
        path: "transactions",
        element: <TransactionPage />
      },
      {
        path: "budget",
        element: <BudgetPage />
      },
      {
        path: "categories",
        element: <CategoriesPage />
      }
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