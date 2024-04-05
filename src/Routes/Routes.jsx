import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Loyouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Data/news.json')
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: () => fetch('/Data/news.json')
        },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;