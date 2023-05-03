import React from 'react';
import { BiLike } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefData from './ChefData';

const RecipeData = ({}) => {
    const {id}=useParams();
    const recipeData = useLoaderData();
    console.log(recipeData);
    return (
        <div >
            {/* <ChefData/> */}
          
         
             {recipeData?.map(recipe=>( <p key={recipe.name} style={{ display: 'flex ', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
                {recipe?.chef?.[0] ? (
  <div className='text-center p-2 '>
    <img src={recipe.chef[0].picture} alt="" className='rounded-full w-80 h-64 mx-auto' />
    <p className='font-bold text-3xl text-orange-600'>{recipe.chef[0].name}</p>
    <p >{recipe.chef[0].des}</p>
    <p className='flex justify-center'><BiLike/>{recipe.chef[0].likes}</p>
    <p ><span>Number Of recipe:</span>{recipe.chef[0].years_of_experience}</p>
    <p >{recipe.chef[0].workplace_name}</p>

  </div>
) : null}
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