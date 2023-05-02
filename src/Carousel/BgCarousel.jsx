import React, { useEffect, useState } from 'react';

const BgCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://wallpaperaccess.com/full/2006005.jpg",
    "https://t3.ftcdn.net/jpg/03/47/51/90/360_F_347519014_ab0HcxsUn6y6eUNFweoDN4xtib44pULG.jpg",
    "https://media.istockphoto.com/id/609791046/photo/som-tum.jpg?s=612x612&w=0&k=20&c=ufIcXQf92UUmiebO2SdUupE9QT5pxRC-UijhN3UJero=",
    "https://static.vecteezy.com/system/resources/previews/019/614/255/original/thai-food-tom-yum-soup-thai-food-recipes-vector.jpg",
    "https://www.thespruceeats.com/thmb/D9hctWPH31A5oiQ34J4Hknc6x0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);
    return (
        <div>
             <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${images[currentImage]}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there </h1>
          <p className="mb-5">
            Looking For Best Thai Food? why not
            Chek out our Famous chefs Famous Recipe?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BgCarousel;