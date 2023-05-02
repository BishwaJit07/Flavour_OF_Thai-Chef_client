import React from 'react';
import { Outlet } from 'react-router-dom';


import Home from '../Pages/Home';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
             <Outlet/>
             <Footer/>
          
        </div>
    );
};

export default Layout;