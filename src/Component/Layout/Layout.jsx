import React from 'react';
import { Outlet } from 'react-router-dom';
import Chef from '../../ChefLIst/chef';


import Home from '../Pages/Home';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Layout = () => {
    return (
        <div >
           
            <Header/>
          
            <div >
          <Outlet/>
            </div>
             <Footer/>
          
        </div>
    );
};

export default Layout;