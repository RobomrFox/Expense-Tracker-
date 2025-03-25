// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Home, homeLoader } from "./pages/home";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Error from "./pages/Error";

// Your Layout component wraps all pages
const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="main-content flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "Categories",
        element: <h1>Categories</h1>,
      },
    ],
  },
]);

export default router;
