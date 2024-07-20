import { BiChevronDown } from "react-icons/bi";
import "../../Assets/index.css";
const BlogComponent = () => {
  return (
    <div>
      <div className="group cursor-pointer  ">
        <span className="  hover:text-red">
          <li className="flex items-center text-sm font-semibold	">
            BLOG <BiChevronDown />
          </li>
        </span>
        <div className="group-hover:block hidden  flex-col absolute h-fit  bg-transparent cursor-pointer md:block xlg:block  w-52 pl-5 z-50 ">
          <div className="bg-white translate-y-3 shadow-md">
            <li
              id="left-arrow"
              className={`hidden group-hover:block cursor-pointer  hover:text-red  m-3 text-base 	 `}
            >
              Grids
            </li>
            <li
              id="left-arrow"
              className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 "
            >
              Masonary
            </li>
            <li
              id="left-arrow"
              className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 "
            >
              Single Post
            </li>
            <li
              id="left-arrow"
              className="hidden group-hover:block cursor-pointer  hover:text-red m-3 text-base	 "
            >
              List
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
