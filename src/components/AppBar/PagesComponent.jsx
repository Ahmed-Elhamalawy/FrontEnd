import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const PagesComponent = () => {
  return (
    <div>
      <div className="group cursor-pointer  ">
        <span className="  hover:text-red">
          <div className="flex items-center text-sm font-semibold	">
            PAGES <BiChevronDown />
          </div>
        </span>
        <div className="group-hover:block hidden  flex-col absolute h-fit  bg-transparent cursor-pointer md:block xlg:block  w-52 pl-5 z-50 ">
          <div className="bg-white translate-y-3 shadow-md">
            <li
              to={"/"}
              className={`hidden group-hover:block cursor-pointer  hover:text-red  m-3 text-base 	 `}
            >
              About us
            </li>
            <NavLink
              to={"/contact-us"}
              className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 "
            >
              Contact us
            </NavLink>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Faq
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              404 Error page
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Login
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Register
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 ">
              Terms and Conditions
            </li>
          </div>
        </div>
        {/* <div className="hidden group-hover:block">
          <div className="group-hover:block hidden  flex-col absolute h-fit  bg-transparent cursor-pointer md:block xlg:block  w-52 pl-5 z-50 ">
            <li className="hidden group-hover:block cursor-pointer  hover:text-red   text-base	 ">
              About us
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red  text-base	 ">
              Contact us
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red  text-base	 ">
              Faq
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red  text-base	 ">
              404 Error page
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red  text-base	 ">
              Login
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red  text-base	 ">
              Register
            </li>
            <li className="hidden group-hover:block cursor-pointer  hover:text-red  text-base	 ">
              Terms and Conditions
            </li>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PagesComponent;
