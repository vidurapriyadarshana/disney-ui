import React from "react";
import disney from "./../assets/images/Disney.png";
import marval from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";

import disneyV from "./../assets/Videos/disney.mp4";
import marvalV from "./../assets/Videos/marvel.mp4";
import nationalGV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
import starwarV from "./../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: marval, video: marvalV },
    { id: 3, image: nationalG, video: nationalGV },
    { id: 4, image: pixar, video: pixarV },
    { id: 5, image: starwar, video: starwarV },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 md:px-16 px-5">
      {productionHouseList.map((item) => (
        <div key={item.id} className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          ></video>
          <img src={item.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
