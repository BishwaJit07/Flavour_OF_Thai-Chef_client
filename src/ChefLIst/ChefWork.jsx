import React from 'react';

const ChefWork = () => {
    return (
        <div>
            <div className="carousel w-50 h-40% m-4">
  <div id="slide1" className="carousel-item relative w-full">
    <img className='w-full h-50%' src="https://wallpaperaccess.com/full/2006005.jpg" />
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
    <img src="https://static.vecteezy.com/system/resources/previews/019/614/255/original/thai-food-tom-yum-soup-thai-food-recipes-vector.jpg" className="w-full h-50%" />
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