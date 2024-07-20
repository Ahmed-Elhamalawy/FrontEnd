import { BiChevronDown } from "react-icons/bi";
import InsideShop from "./inside-shop-component";

const ShopComponent = () => {
  return (
    <div className="flex items-center  group   text-sm font-semibold	">
      <span className="hover:text-red cursor-pointer">SHOP</span>{" "}
      <BiChevronDown />
      <span>
        <InsideShop />
      </span>
    </div>
  );
};

export default ShopComponent;
