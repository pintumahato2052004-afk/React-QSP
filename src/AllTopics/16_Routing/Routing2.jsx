import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import NotFound from "./NotFound";


const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

const Routing2 = () => {
    return <RouterProvider router={myRoutes} />;

};

export default Routing2;