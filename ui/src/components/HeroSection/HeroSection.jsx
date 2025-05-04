import React from "react";
import HeroImg from "../../assets/img/hero-img.png";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover bg-center text-left h-svh w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0"> </div>
        <main className="px-10 lg:px-24 z-10">
          <div className="text-left">
            <h2 className="text-2xl text-white">T-Shirt / Tops</h2>
          </div>
          <p className="mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl">
            Summer Value Pack
          </p>
          <p className="mt-3 text-white font-light sm:mt-5 sm:max-w-xl text-2xl">
           cool / colorful / comfy
          </p>
          <button className="mt-6 text-center w-44 h-12 bg-white border rounded-lg text-orange-400 text-base hover:bg-black hover:text-white">Shop Now</button>
        </main>
    </div>
  );
};

export default HeroSection;
