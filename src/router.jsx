
import { createBrowserRouter, useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Error from "./pages/Error";
import { expenseLoader } from "./helper/ExpenseLoader";

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
