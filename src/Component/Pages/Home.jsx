import React from 'react';


const Home = () => {
    return (
        <div>
          <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1334138116/vector/thai-food-top-view-vector-illustration-food-menu-design-template-hand-drawn-sketch-thai-food.jpg?s=612x612&w=0&k=20&c=v9rGSkBb1Dc0ulnVhrZD1n7_vuNKqbIx-w3H9zioFxA=" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpLOd0jo5ZAtDhE22uDmdjiXa-N4TY0aL351EXRCu0_BFTeO1j-VYmviZ6wjKSjz1AO4&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1273241306/photo/thai-food.jpg?s=612x612&w=0&k=20&c=dkf6Qb3-8DNnixgXnd8Axmpgd-QosQ396HL57xb0eMs=" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://static.vecteezy.com/system/resources/previews/019/614/255/original/thai-food-tom-yum-soup-thai-food-recipes-vector.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;