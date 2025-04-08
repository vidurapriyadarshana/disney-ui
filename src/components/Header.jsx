import React from "react";
import logo from "./../assets/images/Disney.png";
import { HiHome, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import profile from "./../assets/profile/pfp21.webp"

const Header = () => {
  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Star", icon: HiStar },
    { name: "Play", icon: HiPlayCircle },
    { name: "Watchlist", icon: HiTv },
    { name: "Originals", icon: HiPlus },
    { name: "More", icon: HiDotsVertical },
  ];

  return (
    <div className="flex items-center gap-8 bg-[#141414] py-4 px-6 justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] md:w-[100px] object-cover"
        />

        <div className="flex gap-8 items-center">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>

      <img src={profile} alt="" className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
