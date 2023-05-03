import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiLike } from "react-icons/bi";
import Serve from './Serve';
const Chef = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch ('http://localhost:3000/chef/')
        .then(res => res.json())
        .then(data =>setChefs(data))
        .catch(error=> console.error(error))
    },[])

    return (
        <div className=''> <p className='text-center font-extrabold text-orange-600 text-5xl py-2 m-4 font-serif border-2 border-gray-600'>Some of Our Famous Chef</p>
        
               <div>
               {chefs?.map(chef => (
                <p key={chef.id}>

<div className="card card-side  bg-secondary shadow-xl m-8 flex flex-col  md:flex-row lg:flex-row">
  <figure><img className='w-80 h-80' src={chef.picture} alt="Movie"/></figure>
  <div className="card-body text-center">
    <div>
    <h2 className="card-title justify-center text-2xl">{chef.name}</h2>
    </div>
  <div>
  <p > <span className='font-semibold '>Years of exprience:</span> {chef.years_of_experience} Year</p>
    <p>
    <span className='font-semibold'>Numbers of recipes: </span>{chef.num_recipes}
    </p>
    <p><span className='font-semibold'>Gender: </span>{chef.gender}</p>
    <p className='flex justify-center'><BiLike/>{chef.likes}</p>

    <p>{chef.recipe?.map(item=>(
      <p key={item.map}>
        <p>Recipe:{item.name}</p>
      </p>
    ))}</p>
  </div>
       
       
   
    <div className="card-actions justify-center">
      <Link to={`/chef/${chef.id}`} className="btn btn-primary">View Recipe</Link>
    </div>
  </div>
</div>
{/* <div className="card w-96 bg-base-100 shadow-xl m-8 flex">
  <figure className="px-10 pt-10  ">
    <img src={chef.picture}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title">{chef.name}</h2>
    <p > <span className='font-semibold'>Years of exprience:</span> {chef.years_of_experience} Year</p>
    <p>
    <span className='font-semibold'>Numbers of recipes: </span>{chef.num_recipes}
    </p>
    <p><span className='font-semibold'>Gender: </span>{chef.gender}</p>
   
        <div className='flex'><BiLike/><p>{chef.likes}</p></div>
    <div className="card-actions">
    <div className="card-actions justify-center">
      <Link to={`/chef/${chef.id}`} className="btn btn-primary">View Recipe</Link>
    </div>
    </div>
  </div>
</div> */}
                </p>
            ))}
               </div>
               <div className="divider"></div>
               <div ><Serve/></div>
               <div className="divider"></div>
        </div>
    );
};

export default Chef;