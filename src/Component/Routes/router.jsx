import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Login/Login"
import Register from "../Login/Register"
import About from "../Pages/About"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    children:[
       {
         path : '/',
        element: <Home/>

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