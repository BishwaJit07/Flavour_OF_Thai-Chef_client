import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefData from './ChefData';

const RecipeData = ({}) => {
    const {id}=useParams();
    const recipeData = useLoaderData();
    console.log(recipeData);
    return (
        <div style={{ display: 'flex ', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
            {/* <ChefData/> */}
            <h1>recipe data {recipeData.length}</h1>
         
             {recipeData?.map(recipe=>( <p key={recipe.name}>
                
                <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
  <figure><img src={recipe.image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe.name}</h2>
    <p><span className='text-xl font- semibold text-orange-800'>Ingredients: </span>{recipe.ingredients}</p>
    <p><span className='text-xl font- semibold text-orange-800'>Way of Making: </span>{recipe.way_of_making}</p>
    <p className=' flex justify-center '><FaEye/>{recipe.views}</p>
  </div>
</div> 


             </p> ))}

           
        </div>
    );
};

export default RecipeData;