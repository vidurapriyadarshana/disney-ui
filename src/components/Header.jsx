import React, { useState } from "react";
import logo from "./../assets/images/Disney.png";
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import profile from "./../assets/profile/pfp21.webp";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Originals", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv },
    { name: "Watch List", icon: HiPlus },
    { name: "Search", icon: HiMagnifyingGlass },
  ];

  return (
    <div className="flex items-center gap-8 bg-[#141414] py-4 px-6 justify-between p-5">
      <div className="flex items-center gap-8 relative">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] md:w-[100px] object-cover"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-8">
          {menu.slice(0, 3).map((item, index) => (
            <HeaderItem key={index} name={""} Icon={item.icon} />
          ))}

          <div className="md:hidden relative" onClick={() => setToggle(!toggle)}>
            <HeaderItem name="" Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-black border-[1px] border-gray-800 p-3 px-5 py-4">
                {menu.slice(3).map((item, index) => (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <img src={profile} alt="" className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
