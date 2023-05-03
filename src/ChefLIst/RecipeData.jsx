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
          
         
             {recipeData?.map(recipe=>( <div key={recipe.name} style={{ display: 'flex ', flexDirection: 'column', alignItems: 'center' }}>
                {recipe?.chef?.[0] ? (
  <div className='text-center p-4  '>
    <img src={recipe.chef[0].picture} alt="" className='rounded-full w-80 h-64 mx-auto' />
    <p className='font-bold text-3xl text-accent '>{recipe.chef[0].name}</p>
    <p className='font-serif text-2xl py-2
'>{recipe.chef[0].des}</p>
    <p className='flex justify-center text-xl  '><BiLike/>{recipe.chef[0].likes}</p>
    <p  className="badge badge-success badge-outline "><span>Number Of recipe: </span>{recipe.chef[0].num_recipes}</p>
    <p className='text-xl pt-2'>{recipe.chef[0].workplace_name}</p>
    <hr className='border-slate-400 my-2' />
  </div>
  
) : null}
                <div className="card card-compact w-1/2 bg-gray-500 shadow-xl my-4">
  <figure><img src={recipe.image}  /></figure>
  <div className="card-body">
    <h2 className="card-title ">{recipe.name}</h2>
    <p><span className='text-xl font-bold text-green-400'>Ingredients: </span>{recipe.ingredients}</p>
    <p><span className='text-xl font-bold text-green-400'>Way of Making: </span>{recipe.way_of_making}</p>
    <p className=' flex justify-center '><FaEye/>{recipe.views}</p>
  </div>
</div> 


             </div> ))}

           
        </div>
    );
};

export default RecipeData;