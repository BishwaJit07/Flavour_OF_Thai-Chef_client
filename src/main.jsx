import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Component/Layout/Layout.jsx'
import router from './Component/Routes/router.jsx'
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
    </AuthProvider> 
  </React.StrictMode>,
)
