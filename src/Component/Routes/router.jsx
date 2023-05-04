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
import Chef from "../../ChefLIst/chef";
import ChefData from "../../ChefLIst/RecipeData";
import RecipeData from "../../ChefLIst/RecipeData";
import Blogs from "../Pages/Blogs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      exact: true,
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
         path : '/blogs',
        element: <Blogs/>

        },
     

        {
          path: '/chef/:id',
          element: <PrivateRoute><RecipeData></RecipeData></PrivateRoute>,
          loader: ({ params }) => fetch(`https://flavor-of-thai-server-bishwajit07.vercel.app/recipe/${params.id}`).then(res => res.json())
        },
      
        
    ]


    },
  ]);

export default router ;