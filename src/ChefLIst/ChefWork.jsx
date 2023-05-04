import React from 'react';

const ChefWork = () => {
    return (
        <div className="flex flex-col justify-center items-center "> <h3 className=' text-orange-400  text-center text-2xl font-bold underline underline-offset-2 pb-4'>Chef Work's</h3>
            <div className="carousel md:h-5/6 w-5/6 lg:h-5/6  ">
             
  <div id="slide1" className="carousel-item relative w-full">
    <img className='w-full h-50%' src="https://wallpaperaccess.com/full/4393446.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://zardyplants.com/wp-content/uploads/2021/02/Vegan-Tom-Kha-05-rotated.jpg" className="w-full h-50%" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.heinens.com/wp-content/uploads/2022/01/Red-Curry-Shrimp-800x550-1.jpg" className="w-full h-50%"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://www.johornow.com/wp-content/uploads/sites/2/2016/08/5.jpg" className="w-full h-50%" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
                 </div>
        </div>
    );
};

export default ChefWork;