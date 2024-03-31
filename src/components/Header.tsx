import React, { useState } from "react";
import logo from "./../assets/images/disneyPlusLogo.png";
import avator from "./../assets/images/Carl_Fredricksen.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { IconType } from "react-icons";

function Header() {
  type NameIconPair = {
    name: string;
    icon: IconType;
  };

  const [toggle, setToggle] = useState(false);

  const menu: NameIconPair[] = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex w-screen items-center justify-between pl-2 pr-2 md:pl-5 pr-5 pb-0 mt-0">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="disneylogoImg"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
        </div>

        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem key={""} name={""} Icon={HiDotsVertical} />

          {toggle ? (
            <div className="absolute mt-3 bg-[#0d045e] border-[1px] border-gray-700 p-3 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src={avator}
        className="w-[40px] rounded-full mr-5"
        alt="avatorImg"
      />
    </div>
  );
}

export default Header;
