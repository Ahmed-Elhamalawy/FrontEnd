import { TbHeadset } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { SyncLoader } from "react-spinners";
import Appbar from "../../components/AppBar/appbar";
import Footer from "../../components/Footer/footer";
import { useEffect, useState } from "react";
import Aos from "aos";
import image1 from "../../images/Home/fashion 1/new collection 1.jpg";
import image2 from "../../images/Home/fashion 1/new collection 2.jpg";
import image5 from "../../images/Home/fashion 1/image-5.png";
import "../../Assets/mail-icon.css";
import AllProducts from "../../components/Home/Fashion1/products";
import HeaderSwiper from "../../components/Home/Fashion1/header-swiper.jsx";
import CommentsSwiper from "../../components/Home/Fashion1/comments-swiper.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Fashion1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");

  const categories = [
    { id: 1, name: "men's clothing", label: "men clothing" },
    { id: 2, name: "women's clothing", label: "women clothing" },
    { id: 3, name: "jewelery", label: "jewelery" },
    { id: 4, name: "electronics", label: "electronics" },
  ];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <div data-aos="fade-in">
          <Appbar activeFashion1={"text-red"} />
          <div className="w-full">
            <HeaderSwiper />
          </div>

          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-10 mx-6  lg:mx-20  my-24">
            <div
              id="zoom-in-parent"
              className="flex relative group overflow-hidden duration-150 size-fit"
              data-aos="fade-right"
            >
              <img
                src={image1}
                alt=""
                className="group-hover:scale-110  transform transition-transform duration-300"
              />
              <span className="flex flex-col items-start justify-center absolute bottom-12 right-12 gap-1">
                <h1 className="lg:text-xl font-bold sm:text-base md:text-xl">
                  Super Sale
                </h1>
                <h1 className="lg:text-3xl font-bold text-2xl">
                  New Collection
                </h1>
                <h1>Shop Now</h1>
              </span>
            </div>
            <div
              className="flex relative group overflow-hidden duration-150 size-fit"
              data-aos="fade-left"
            >
              <img
                src={image2}
                alt=""
                className="group-hover:scale-110  transform transition-transform duration-300"
              />
              <span className="flex flex-col items-start justify-center absolute bottom-12 right-12 gap-1">
                <h1 className="lg:text-xl font-bold text-2xl ">New Season</h1>
                <h1 className="lg:text-3xl font-semibold sm:text-base">
                  Sale 40% Off
                </h1>
                <h1>Shop Now</h1>
              </span>
            </div>
          </div>
          <section>
            <div className="flex flex-col grid-cols-1 items-center justify-center gap-8">
              <h1 className="text-3xl font-bold">Exclusive Products</h1>
              <span className="flex items-center justify-center gap-5  ">
                {categories.map((category) => (
                  <span
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={` capitalize  cursor-pointer hover:text-red transition-colors ${
                      selectedCategory === category.name
                        ? "text-red font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {category.label}
                  </span>
                ))}
              </span>
            </div>
            <div className="overflow-hidden lg:h-[500px] max-md:h-[1800px]">
              <AnimatePresence mode="wait">
                {categories.map(
                  (category) =>
                    selectedCategory === category.name && (
                      <motion.div
                        key={category.name}
                        initial={{ x: 2000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -2000, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <AllProducts limit={"4"} category={category.name} />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
            <div className="relative lg:h-[80vh] bg-white">
              <div className="sm:flex-col translate-y-10 my-10 lg:h-[68vh]  grid  justify-center lg:grid-cols-2 bg-[#f4f9fc] px-10 lg:px-24 pb-5">
                <span>
                  <img
                    src={image5}
                    alt=""
                    className="lg:absolute -translate-y-12  "
                  />
                </span>
                <span className="lg:flex lg:flex-col lg:items-start lg:justify-center gap-2">
                  <h1 className="text-red">New season trends!</h1>
                  <h1 className="text-3xl font-bold">Best Summer Collection</h1>
                  <h1 className="text-2xl font-semibold">
                    Sale Get up to 50% Off
                  </h1>
                  <button id="closing-btn" className=" w-1/3 mt-3 rounded">
                    Shop Now
                  </button>
                </span>
              </div>
            </div>

            <div className="flex flex-col bg-red bg-opacity-5 h-[60vh] justify-center">
              <h2 className="self-center my-5 text-3xl font-bold">
                Our Client Say!
              </h2>
              <CommentsSwiper />
            </div>
          </section>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 px-24 my-20">
            <div className="relative flex items-center px-4">
              <div className="w-full after:h-3/4 after:w-px after:bg-black after:bg-opacity-20 after:right-0 after:absolute  flex flex-col justify-center items-center gap-3 p-2">
                <FiTruck className="size-12 font-light text-light text-opacity-40" />
                <h3 className="text-2xl font-semibold">Free Delivery</h3>
                <p className="text-center text-base font-semibold text-black text-opacity-70">
                  If you are going to use of Lorem, you need to be sure there
                  anything
                </p>
              </div>
            </div>
            <div className="relative flex items-center px-4">
              <div className="after:h-3/4 after:w-px after:bg-black after:bg-opacity-20 after:right-0 after:absolute w-full flex flex-col justify-center items-center gap-3 p-2">
                <GiCash className="size-12 font-light text-light text-opacity-40" />
                <h3 className="text-2xl font-semibold">30 Day Return</h3>
                <p className="text-center text-base font-semibold text-black text-opacity-70">
                  If you are going to use of Lorem, you need to be sure there
                  anything
                </p>
              </div>
            </div>
            <div className="relative flex items-center px-4">
              <div className=" w-full flex flex-col justify-center items-center gap-3 p-2">
                <TbHeadset className="size-12 font-light text-light text-opacity-40" />
                <h3 className="text-2xl font-semibold">Free Delivery</h3>
                <p className="text-center text-base font-semibold text-black text-opacity-70">
                  If you are going to use of Lorem, you need to be sure there
                  anything
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Fashion1;
