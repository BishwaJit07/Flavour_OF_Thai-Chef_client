import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BgCarousel from '../../Carousel/BgCarousel';
import Chef from '../../ChefLIst/chef';
import ChefWork from '../../ChefLIst/ChefWork';


const Home = () => {

 

    return (
        <div className='flex flex-col justify-center'>
                

                 <div><BgCarousel/></div>
                <div > <Chef/></div>
                <div className='mx-4'><ChefWork/></div>
        </div>
    );
};

export default Home;