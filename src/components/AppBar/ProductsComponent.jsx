import { BiChevronDown } from "react-icons/bi";
import InsideProducts from "./inside-Products-component";

const ProductsComponent = () => {
  return (
    <div className="flex items-center  group   text-sm font-semibold	">
      <span className="hover:text-red cursor-pointer">PRODUCTS</span>
      <BiChevronDown />
      <span>
        <InsideProducts />
      </span>
    </div>
  );
};

export default ProductsComponent;
