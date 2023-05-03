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
         path : '/blogs',
        element: <Blogs/>

        },
        // {
        //   path: '/chef/:id',
        //   element: <RecipeData/>,
        //   loader: ({params})=>fetch(`http://localhost:3000/recipe/${params.id}`)
        // },
        
        // {
        //   path: '/chef/:id',
        //   element: <ChefData/>,
        //   loader: ({params})=>fetch(`http://localhost:3000/chef/${params.id}`)
        // },

        // {
        //   path: '/chef/:id',
        //   element: (
        //     <>
        //       <RecipeData />
        //       <ChefData />
        //     </>
        //   ),
        //   loader: async ({ params }) => {
        //     const recipeResponse = await fetch(`http://localhost:3000/recipe/${params.id}`);
        //     const recipeData = await recipeResponse.json();
            
        //     const chefResponse = await fetch(`http://localhost:3000/chef/${params.id}`);
        //     const chefData = await chefResponse.json();
            
        //     return { recipeData, chefData };
        //   },
        // }

        {
          path: '/chef/:id',
          element: <RecipeData />,
          loader: ({ params }) => fetch(`https://flavor-of-thai-server-bishwajit07.vercel.app/recipe/${params.id}`).then(res => res.json())
        },
      
        
    ]


    },
  ]);

export default router ;