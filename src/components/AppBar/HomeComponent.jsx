import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const PagesComponent = () => {
  return (
    <div>
      <div className="group cursor-pointer  ">
        <span className="  hover:text-red">
          <NavLink to={"/"} className="flex items-center text-sm font-semibold	">
            HOME <BiChevronDown />
          </NavLink>
        </span>
        <div className="group-hover:block hidden  flex-col absolute h-fit  bg-transparent cursor-pointer md:block xlg:block  w-52 pl-5 z-50 ">
          <div className="bg-white translate-y-3 shadow-md">
            <NavLink
              to={"/"}
              className={`hidden group-hover:block cursor-pointer  hover:text-red  m-3 text-base 	 `}
            >
              Fashion 1
            </NavLink>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Fashion 2
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Furniture 1
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Furniture 2
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Electronics 1
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Electronics 1
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesComponent;
