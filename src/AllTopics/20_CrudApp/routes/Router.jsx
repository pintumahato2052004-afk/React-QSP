import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateUserPage from "../pages/CreateUserPage";
import AllUserPage from "../pages/AllUserPage";
import EditUserPage from "../pages/EditUserPage";

export const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/create-user",
                element: <PrivateRoute><CreateUserPage /></PrivateRoute>
            },
            {
                path: "/all-users",
                element: <PrivateRoute><AllUserPage /></PrivateRoute>
            },
            {
                path:"/edit-user/:id", //dynamic router
                element:(
                    <PrivateRoute>
                        <EditUserPage />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);