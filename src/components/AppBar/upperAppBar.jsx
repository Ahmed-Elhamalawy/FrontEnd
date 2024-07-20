import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { TbArrowsShuffle } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import DropDown from "../../atoms/Dropdown";

const UpperAppBar = () => {
  const [languageOpened, setLanguageOpened] = useState(false);
  const [currancyOpened, setCurrancyOpened] = useState(false);
  return (
    <div className=" flex flex-col w-full  h-12 items-center justify-between  md:flex-row px-10 xl:px-24  ">
      <div className="flex flex-row justify-center items-center gap-3">
        <DropDown
          opened={languageOpened}
          setOpened={setLanguageOpened}
          title={"Language"}
        >
          <div className="p-3 bg-white rounded-md shadow-md min-h-fit min-w-fit translate-y-3">
            <button className="mb-3">English</button>
            <button className="mb-3">France</button>
          </div>
        </DropDown>
        <DropDown
          opened={currancyOpened}
          setOpened={setCurrancyOpened}
          title={"currancy"}
        >
          <div className="p-3 bg-white rounded-md shadow-md min-h-24 min-w-10 translate-y-3">
            <button className="mb-3">English</button>
            <button className="mb-3">Arabic</button>
          </div>
        </DropDown>
        <span className="flex items-center">
          <CiMobile4 />
          123-456-789
        </span>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 ">
        <div className="flex items-center gap-1 cursor-pointer hover:text-red">
          <TbArrowsShuffle />
          Compare
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-red">
          <AiOutlineHeart /> Wishlist
        </div>
        <NavLink
          to={"/login"}
          className="flex items-center gap-1 cursor-pointer hover:text-red"
        >
          <BsPerson /> login
        </NavLink>
      </div>
    </div>
  );
};

export default UpperAppBar;
