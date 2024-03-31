import React from "react";
import { IconType } from "react-icons";

type NameIconPair = {
  name: string;
  Icon: IconType;
};

function HeaderItem({ name, Icon }: NameIconPair) {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
