import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaBookmark, FaEye, FaHandPointRight, FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Rating from 'react-rating';

const RecipeData = ({}) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const addToFavorites = (recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe.r_id]);
  };

  const notify = (recipe) => {
    addToFavorites(recipe);
    setBtnDisabled(favoriteRecipes.includes(recipe.r_id));
    toast("Yup! The recipe is your favorite.");
  };
 

    const {id}=useParams();
    const recipeData = useLoaderData();
    console.log(recipeData);


    
    return (
    <div>


 {/* <ChefData/> */}
 {recipeData?.map(recipe=>(
<div key={recipe.name} style={{ display: 'flex ', flexDirection: 'column', alignItems: 'center' }}>   {recipe?.chef?.[0] ? (
  <div className='text-center p-4  '>
    <img src={recipe.chef[0].picture} alt="" className='rounded-full w-80 h-64 mx-auto' />
    <p className='font-bold text-3xl text-accent '>{recipe.chef[0].name}</p>
    <p className='font-serif text-2xl py-2
'>{recipe.chef[0].des}</p>
    <p className='flex justify-center text-xl  '><BiLike/>{recipe.chef[0].likes}</p>
    <p  className="badge badge-success badge-outline "><span>Number Of recipe: </span>{recipe.chef[0].num_recipes}</p>
    <p  className="badge badge-success badge-outline "><span>Experience: </span> {recipe.chef[0].years_of_experience} Years</p>
    <p className='text-xl pt-2'><span className='font-bold'>Currently working in :</span> {recipe.chef[0].workplace_name}</p>
    <hr className='border-slate-400 my-2' />
    <p className='text-2xl font-bold text-secondary'>Here Is some Favourite recipe of our beloved Chef</p>
  </div>
  
) : null}</div>))}




    {/* recipe  */}
<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6'>
     
             {recipeData?.map(recipe=>( <div key={recipe.name} style={{ display: 'flex ', flexDirection: 'column', alignItems: 'center' }} >


                <div className="card card-compact  bg-gray-500 shadow-xl m-4 h-5/6 w-5/6  text-center " >
                 
  <figure><img src={recipe.image} className='p-2 rounded-2xl h-96 w-full ' /></figure>
  <div className="card-body flex flex-col items-center">
  <h2 className="card-title text-3xl font-bold mb-4 text-white">{recipe.name}</h2>
    <div><span className='text-xl font-bold text-green-400'>Ingredients: </span>
    <ul >
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index} className='flex justify-center '><FaHandPointRight className='m-2'/>{ingredient}</li>
    ))}
  </ul></div>
    <p><span className='text-xl font-bold text-green-400'>Way of Making: </span>{recipe.way_of_making}</p>
    
  
    <p className=' flex justify-center '><FaEye/>{recipe.views}</p>


  
    <p className='btn' onClick={() => notify(recipe)} disabled={favoriteRecipes.includes(recipe.r_id)}>{<FaHeart/>}</p> <ToastContainer />
   
    </div>
    <div >
        <Rating
  placeholderRating={recipe.ratings}
  readonly
  emptySymbol={<FaRegStar />}
  placeholderSymbol={<FaStar className='text-warning'/>}
  fullSymbol={< FaStar />} 
/> {recipe.ratings}
        </div>

   </div>

   </div> ))}

           
        </div>

         

    </div>

    );
};

export default RecipeData;