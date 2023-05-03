import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefData = () => {
    const {id}=useParams();
    const chefData = useLoaderData();
    console.log(chefData);

    

    return (
        <div>
            {/* <h1>chef data {chefData.length}</h1> */}
        </div>
    );
};

export default ChefData;