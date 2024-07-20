import { useEffect, useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Accordion from "./Accordion";
import Logoimg from "../../../src/images/logo_dark .png";
import { useSelector } from "react-redux";

const SmScreenNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const carts = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  return (
    <nav className="lg:hidden w-full flex flex-col  h-16 z-50  px-4 sm:px-4">
      <div className="flex flex-row px-10 justify-between w-full h-16 items-center">
        <div>
          <img src={Logoimg} alt="" href="/" className="w-25 h-10" />
        </div>
        <div className="flex gap-3 relative">
          <CiSearch className="text-2xl h-full " />
          <CiShoppingCart className="text-2xl h-full " />
          <button onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
          <span className=" absolute -top-2 right-12 bg-red text-white rounded-full size-4 text-xs	  flex justify-center items-center">
            {totalQuantity}
          </span>
        </div>
      </div>
      <menu
        className={`overflow-auto max-h-96 absolute translate-y-16 w-3/4 mx-8 bg-white shadow-md ${
          showMenu ? "" : "hidden"
        }`}
      >
        <Accordion />
      </menu>
    </nav>
  );
};

export default SmScreenNavBar;
