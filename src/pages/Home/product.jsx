import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GiCash } from "react-icons/gi";
import { ImLoop2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import axios from "axios";
import Appbar from "../../components/AppBar/appbar";
import Footer from "../../components/Footer/footer";
import Breadcrumbs from "../../components/contact-us/Breadcrumbs";
import Rating from "../../components/product/rating";
import { TbArrowsShuffle } from "react-icons/tb";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart";
import Sizes from "../../components/product/sizes";

const FetchSingleProduct = () => {
  const carts = useSelector((store) => store.cart.items);
  // console.log(carts);
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [counter, setCounter] = useState(1);
  const increamentHandler = () => {
    setCounter((value) => value + 1);
  };
  const decreamentHandler = () => {
    setCounter((value) => value - 1);
  };

  console.log(carts);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        productId: item.id,
        quantity: counter,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      {loading ? (
        <span className=" absolute left-1/2 top-1/2">
          <SyncLoader color="#ff324d" />
        </span>
      ) : (
        <div data-aos="fade-in" data-aos-duration="1000">
          <div>
            <Appbar />
            <div className="flex flex-col justify-between bg-lightgGrey h-44 items-center  sm:px-10 lg:px-24 md:flex-row mb-28">
              <h1 className="text-3xl font-bold	">Product Detail</h1>
              <Breadcrumbs
                section1={"Home"}
                section2={"pages"}
                section3={"product Details"}
              />
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-2 sm:mx-10 lg:mx-24 gap-10 ">
              <div className=" max-h-[528px] border-light border-opacity-50 border ">
                <div className=" h-[500px] relative bg-white m-2 w-auto flex items-center justify-center">
                  <div className="h-full absolute top-0 left-0 bottom-0  w-full  bg-black opacity-5  "></div>
                  <img
                    className="max-h-[500px]  self-center"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col  ">
                <h1 className="font-bold text-2xl hover:text-red cursor-pointer">
                  {item.title}
                </h1>
                <span className="font-bold text-2xl text-red mt-5 flex  justify-between">
                  <span>${item.price}</span>
                  <Rating />
                </span>
                <p className="text-black opacity-80 text-lg my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus blandit massa enim. Nullam id varius nunc id varius
                  nunc.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="flex gap-2 items-center ">
                    <IoMdCheckmarkCircle className="text-red  size-5 bg-white" />
                    <h1>1 Year AL Jazeera Brand Warranty</h1>
                  </span>
                  <span className="flex gap-2 items-center ">
                    <ImLoop2 className="text-red  size-5 bg-white" />
                    <h1> 30 Day Return Policy</h1>
                  </span>
                  <span className="flex gap-2 items-center ">
                    <GiCash className="text-red size-5 bg-white" />
                    <h1>Cash on Delivery available</h1>
                  </span>
                </div>
                <div className="flex gap-3 items-center my-5">
                  Size
                  <Sizes />
                </div>
                <hr className="text-black opacity-30" />
                <div className="flex items-center my-5 gap-5">
                  <button onClick={decreamentHandler} disabled={counter === 1}>
                    <AiOutlineMinus className=" size-10 p-3 bg-black bg-opacity-20 rounded-full hover:bg-light" />
                  </button>
                  <div className="border border-black border-opacity-40 w-16 h-12 text-center text-3xl">
                    {counter}
                  </div>
                  <button onClick={increamentHandler}>
                    <AiOutlinePlus className="size-10 p-3 bg-black bg-opacity-20 rounded-full hover:bg-light" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn overflow-hidden bg-red text-white hover:bg-white hover:text-red w-1/3<HiOutlineShoppingCart />"
                    id="closing-btn"
                  >
                    <HiOutlineShoppingCart className="size-5" />
                    Add to Cart
                  </button>
                  <TbArrowsShuffle className="size-8 font-light hover:text-red p-1 cursor-pointer" />
                  <AiOutlineHeart className="size-8 font-light hover:text-red p-1 cursor-pointer" />
                </div>
                <hr className="text-black opacity-30" />
                <div className="flex flex-col gap-2 mt-3 ">
                  <h1>
                    <span className="font-bold text-black text-opacity-55">
                      SKU:
                    </span>
                    BE45VGRT
                  </h1>
                  <h1>
                    <span className="font-bold text-black text-opacity-55">
                      Category:
                    </span>
                    {item.category}
                  </h1>
                  <h1>
                    <span className="font-bold text-black text-opacity-55">
                      tags:
                    </span>
                    {item.category} Luxury
                  </h1>
                </div>
                <span className="font-bold text-black text-opacity-55 mt-2 flex gap-10 items-center">
                  Share:
                  <div className="flex gap-3">
                    <AiFillFacebook className="text-black text-opacity-75 size-5" />
                    <AiOutlineGooglePlus className="text-black text-opacity-75 size-5" />
                    <BsTwitter className="text-black text-opacity-75 size-5" />
                    <BsYoutube className="text-black text-opacity-75 size-5" />
                    <FaInstagramSquare className="text-black text-opacity-75 size-5" />
                  </div>
                </span>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchSingleProduct;
