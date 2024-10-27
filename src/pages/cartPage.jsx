import { useSelector } from "react-redux";
import Appbar from "../components/AppBar/appbar";
import Footer from "../components/Footer/footer";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Breadcrumbs from "../components/contact-us/Breadcrumbs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ShoppingCart = () => {
  const carts = useSelector((store) => store.cart.items);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <span className=" absolute left-1/2 top-1/2">
          <SyncLoader color="#ff324d" />
        </span>
      ) : (
        <div>
          <Appbar />

          <div className="flex flex-col justify-between bg-lightgGrey h-44 items-center  sm:px-10 lg:px-24 md:flex-row mb-28">
            <h1 className="text-3xl font-bold	">Shopping cart</h1>
            <Breadcrumbs
              section1={"Home"}
              section2={"pages"}
              section3={"Shopping cart"}
            />
          </div>
          <div>
            {
              <div>
                {carts.length > 0 ? (
                  <div className="grid grid-cols-5  text-center  mx-24 max-md:mx-2 border-b border-black border-opacity-20 pb-3">
                    <li className="list-none col-span-2 font-bold text-2xl max-md:text-sm">
                      Product
                    </li>
                    <li className="list-none font-bold text-2xl max-md:text-sm">
                      Price
                    </li>
                    <li className="list-none font-bold text-2xl max-md:text-sm">
                      Quantity
                    </li>
                    <li className="list-none font-bold text-2xl max-md:text-sm">
                      Total
                    </li>
                  </div>
                ) : (
                  <span className="w-full flex justify-center items-center text-3xl font-bold ">
                    your cart is empty !!
                  </span>
                )}
              </div>
            }
            <div>
              {carts.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 bg-white text-center my-3 mx-24 max-md:mx-2 border-b border-black border-opacity-20"
                >
                  <div className="col-span-2 flex justify-center items-center gap-4">
                    <img
                      src={item.image}
                      className="size-44  p-2 max-md:hidden  "
                    />
                    <h1 className="w-32">{item.title}</h1>
                  </div>
                  <div className="flex items-center justify-center">
                    <h1 className="text-center">${item.price}</h1>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* <h2 className="text-center"> {item.quantity}</h2> */}

                    <button>
                      <AiOutlineMinus className=" size-5 mx-2 p-1 bg-black bg-opacity-20 rounded-full hover:bg-light" />
                    </button>
                    <div className="border border-black border-opacity-40 w-16 h-10 text-center text-3xl">
                      {item.quantity}
                    </div>
                    <button>
                      <AiOutlinePlus className="size-5 mx-2 p-1 bg-black bg-opacity-20 rounded-full hover:bg-light" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <h2 className="text-center">
                      ${item.quantity * item.price}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
