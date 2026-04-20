import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Router";

const CrudApp = () => {
  return <RouterProvider router={myRoutes}/>
}

export default CrudApp;