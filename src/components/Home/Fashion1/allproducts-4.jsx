import { BiZoomIn } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { BiCartAdd } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../Assets/index.css";
import { Link } from "react-router-dom";

const AllProducts4 = () => {
  const [Products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=4"
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-8 px-10 sm:px-10px my-10 w-full">
      {Products.map((item) => (
        <div
          id="products-card"
          className="w-auto bg-lightgGrey size-80 transition ease-in-out duration-500 relative group"
          key={item.id}
        >
          <img src={item.image} className="size-72 w-full " />
          <div className="absolute top-0 left-0 w-full h-72 hidden group-hover:block bg-black opacity-20 transition duration-300 ease-in-out delay-700"></div>
          <div className="flex flex-col  px-2 translate-y-5 items-start">
            <Link to={`/product/${item.id}`}>
              <h2 className="text-sm font-bold hover:text-red">
                {item.title.slice(0, 29)}...
              </h2>
            </Link>
            <p className="text-red font-bold w-full flex items-center gap-4">
              ${item.price}
            </p>
          </div>
          <div className=" top-1/3 left-1/4 absolute  group-hover:flex gap-2  h-full w-full  z-50 hidden">
            <BiCartAdd className="size-8 p-1 font-extralight text-3xl text-red hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg" />
            <TbArrowsShuffle2 className="size-8 p-1 font-extralight text-3xl text-red hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg" />
            <BiZoomIn className="size-8 p-1 font-extralight text-3xl text-red hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg" />
            <FcLikePlaceholder className="size-8 p-1 font-extralight text-3xl text-red hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts4;
