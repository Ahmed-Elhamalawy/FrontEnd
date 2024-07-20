import shopImg from "../../images/Shop.jpg";

const InsideShop = () => {
  return (
    <div className="hidden  md:group-hover:block z-50 absolute bg-transparent  w-full inset-x-0 mx-auto px-24   ">
      <div className="bg-white translate-y-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-white p-5 shadow-md ">
          <ul className="flex flex-col justify-start items-start gap-5  ">
            <li className="text-gray-950 font-bold">SHOP PAGE LAYOUT</li>
            <li className="text-gray-950">Shop List View</li>
            <li className="text-gray-950">Shop List Left Sidebar</li>
            <li className="text-gray-950">Shop List Right Sidebar</li>
            <li className="text-gray-950">Left Sidebar</li>
            <li className="text-gray-950">Right Sidebar</li>
            <li className="text-gray-950">Shop Load More</li>
          </ul>

          <ul className="flex flex-col justify-start items-start gap-5 border-l border-black pl-4 border-opacity-20">
            <li className="text-gray-950 font-bold">OTHER PAGES</li>
            <li className="text-gray-950">Cart</li>
            <li className="text-gray-950">Checkout</li>
            <li className="text-gray-950">My Account</li>
            <li className="text-gray-950">Wishlist</li>
            <li className="text-gray-950">Compare</li>
            <li className="text-gray-950">Order Completed</li>
          </ul>
          <ul className="flex flex-col justify-start items-start gap-5 border-l border-black pl-4 border-opacity-20">
            <li className="text-gray-950 font-bold">PRODUCT PAGES</li>
            <li className="text-gray-950">Default</li>
            <li className="text-gray-950">Left Sidebar</li>
            <li className="text-gray-950">Right Sidebar</li>
            <li className="text-gray-950">Thumbnails Left</li>
          </ul>
          <ul
            className="flex items-center justify-center border-l border-black pl-4 border-opacity-20 h-auto
          "
          >
            <img src={shopImg} className="size-48"></img>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsideShop;
