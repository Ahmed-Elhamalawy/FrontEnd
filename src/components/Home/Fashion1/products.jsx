import { AiOutlineHeart } from "react-icons/ai";
import { BiZoomIn } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { BiCartAdd } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Aos from "aos";
import "../../../Assets/index.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart";
import RatingStars from "../../product/ratingStares";
import Colors from "../../product/colors";

const AllProducts = ({ category, limit }) => {
  const carts = useSelector((store) => store.cart.items);
  // console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        productId: item.id,
        quantity: 1,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };
  const [Products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-8 px-10 sm:px-10px my-10 w-full">
      {Products.map((item) => {
        console.log(item);
        return (
          <div
            id="products-card"
            className=" w-auto bg-lightgGrey size-96 transition ease-in-out duration-500  relative group"
            key={item.id}
          >
            <img src={item.image} className="size-72 w-full " />
            <div
              id="card-img-bg"
              className="absolute top-0 left-0 w-full h-72"
            ></div>
            <div className="flex flex-col  px-2 py-2 items-start ">
              <Link to={`/product/${item.id}`}>
                <h2 className="text-sm font-bold hover:text-red w-full ">
                  {item.title.slice(0, 20)}...
                </h2>
              </Link>
              <p className="text-red font-bold w-full flex items-center gap-4  ">
                ${item.price}
              </p>
              <div className="flex flex-row  gap-1 ">
                <RatingStars rating={item.rating.rate} />
                <p>{`(${item.rating.count})`}</p>
              </div>
            </div>
            <div className=" top-1/3 left-1/4 absolute  group-hover:flex gap-2  h-full w-full  z-50 hidden">
              <div id="card-icon1">
                <BiCartAdd
                  onClick={() => handleAddToCart(item)}
                  className="rounded-sm  size-8 p-1 font-extralight text-3xl text-black hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg"
                />
              </div>

              <TbArrowsShuffle2
                id="card-icon2"
                className="rounded-sm size-8 p-1 font-extralight text-3xl text-black hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg"
              />
              <BiZoomIn
                id="card-icon3"
                className="rounded-sm size-8 p-1 font-extralight text-3xl text-black hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg"
              />
              <AiOutlineHeart
                id="card-icon4"
                className="rounded-sm size-8 p-1 font-extralight text-3xl text-black hover:text-white hover:bg-red cursor-pointer bg-white transition ease-in-out duration-500 shadow-lg"
              />
            </div>
            <div className="absolute hidden bottom-3 left-2 group-hover:block ">
              <Colors />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
