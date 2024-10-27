import Appbar from "../components/AppBar/appbar";
import Footer from "../components/Footer/footer";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import Breadcrumbs from "../components/contact-us/Breadcrumbs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart";

const ShoppingCart = () => {
  const carts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(removeFromCart({ ...item, quantity: 1 }));
  };
  const [loading, setLoading] = useState(false);

  const subTotal = carts
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const taxes = subTotal * (0.2).toFixed(2);
  const total = (Number(subTotal) + Number(taxes)).toFixed(2);

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

                    <button onClick={() => handleDecreaseQuantity(item)}>
                      <AiOutlineMinus className=" size-5 mx-2 p-1 bg-black bg-opacity-20 rounded-full hover:bg-light" />
                    </button>
                    <div className="border border-black border-opacity-40 w-16 h-10 text-center text-3xl max-md:text-lg max-md:border-0">
                      {item.quantity}
                    </div>
                    <button onClick={() => handleIncreaseQuantity(item)}>
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
            <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-white mt-20">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-medium text-gray-700">
                    Subtotal
                  </h2>
                  <span className="text-lg font-semibold">${subTotal}</span>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-lg font-medium text-gray-700">Taxes</h2>
                  <span className="text-lg font-semibold">${taxes}</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <h2 className="text-xl font-bold text-gray-900">Total</h2>
                  <span className="text-xl font-bold">${total}</span>
                </div>

                <button
                  className="w-full mt-6 px-6 py-3 bg-[#ff324d] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                  onClick={() => console.log("Checkout clicked")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
