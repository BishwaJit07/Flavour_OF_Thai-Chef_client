import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Login/Login"
import Register from "../Login/Register"
import About from "../Pages/About"
import ErrorPage from "../../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
    children:[
       {
         path : '/',
        element: <Home/>,
      

        },
       {
         path : '/login',
        element: <Login/>

        },
       {
         path : '/register',
        element: <Register/>

        },
       {
         path : '/about',
        element: <About/>

        },
    ]


    },
  ]);

export default router ;