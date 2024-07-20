import { useEffect, useState } from "react";
import ProductsComponent from "./ProductsComponent";
import BlogComponent from "./Blogcomponent";
import ShopComponent from "./ShopComponent";
import HomeComponent from "./HomeComponent";
import Logoimg from "../../../src/images/logo_dark .png";
import PagesComponent from "./PagesComponent";
import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const LGscreenNavbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  /*      -----------------------------------------*/

  /*      -----------------------------------------*/

  return (
    <nav
      id="sticky"
      className="hidden  bg-white lg:flex  justify-between w-full items-center pb-3 px-10 xl:px-24"
    >
      {/* Logo */}
      <div>
        <a href="#">
          <img src={Logoimg} alt="" href="#" className="w-25 h-10" />
        </a>
      </div>

      {/* MENU LIST  */}
      <div className="hidden lg:flex items-center justify-around gap-3 ">
        <HomeComponent />
        <PagesComponent />
        <ProductsComponent />
        <BlogComponent />
        <ShopComponent />
        <NavLink
          to="/contact-us"
          className="hover:text-red text-sm font-semibold"
          activeClassName="active"
        >
          CONTACT US
        </NavLink>
      </div>
      <div className="  flex gap-3 relative">
        <CiSearch className="text-xl h-full " />
        <NavLink to={"/ShoppingCart"}>
          <CiShoppingCart className="text-xl h-full peer cursor-pointer" />
        </NavLink>
        <div className="cursor-pointer absolute  hidden peer-hover:block z-50 bg-transparent top-0 left-5 w-14 h-96 hover:flex justify-center items-center ">
          <div className="cursor-pointer z-50 bg-white -translate-y-16 ">
            {/* <ShoppingCart /> */}
          </div>
        </div>

        <span className=" absolute -top-2 right-1/3 bg-red text-white rounded-full size-4 text-xs	  flex justify-center items-center">
          {totalQuantity}
        </span>
      </div>
    </nav>
  );
};

export default LGscreenNavbar;
