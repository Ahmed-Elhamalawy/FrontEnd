import photo1 from "../../images/Home/products 1.jpg";
import photo2 from "../../images/Home/products 2.jpg";
import photo3 from "../../images/Home/products 3.jpg";

const InsideProducts = () => {
  return (
    <div className="hidden  md:group-hover:block absolute bg-transparent  w-full inset-x-0 mx-auto px-24   z-50 ">
      <div className="translate-y-10 bg-white">
        <section className="bg-white shadow-md h-auto ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-white p-5  relative top-3">
            <ul className="flex flex-col justify-start items-start gap-4  bg-white">
              <li className="text-black font-bold">WOMANS</li>
              <li className="text-black">Shop List View</li>
              <li className="text-black">Shop List Left Sidebar</li>
              <li className="text-black">Shop List Right Sidebar</li>
              <li className="text-black">Left Sidebar</li>
              <li className="text-black">Right Sidebar</li>
            </ul>

            <ul className="flex flex-col justify-start items-start gap-4 border-l border-black pl-4 border-opacity-20">
              <li className="text-black font-bold">MEN</li>
              <li className="text-black">Cart</li>
              <li className="text-black">Checkout</li>
              <li className="text-black">My Account</li>
              <li className="text-black">Wishlist</li>
              <li className="text-black">Compare</li>
            </ul>
            <ul className="flex flex-col justify-start items-start gap-4 border-l border-black pl-4 border-opacity-20">
              <li className="text-black font-bold">KIDS</li>
              <li className="text-black">Default</li>
              <li className="text-black">Thumbnails Left</li>
              <li className="text-black">Left Sidebar</li>
              <li className="text-black">Right Sidebar</li>
              <li className="text-black">Thumbnails Left</li>
            </ul>
            <ul className="flex flex-col justify-start items-start gap-4 border-l border-black pl-4 border-opacity-20">
              <li className="text-black font-bold">ACCESSORIES</li>
              <li className="text-black">Thumbnails Left</li>
              <li className="text-black">Default</li>
              <li className="text-black">Left Sidebar</li>
              <li className="text-black">Right Sidebar</li>
              <li className="text-black">Thumbnails Left</li>
            </ul>
          </div>
          <div className="flex items-center justify-center bg-white mb-4 lg:grid-cols-3 z-50 h-56 ">
            <div className="mb-5 mx-4  relative">
              <img src={photo1} alt="" className="bg-cover" />
              <span className="absolute bottom-6 right-6">
                <h1 className="text-xl">10% Off</h1>
                <h1 className="text-2xl font-semibold">New Arrival</h1>
                <h1 className="text-xl font-light">Shop Now</h1>
              </span>
            </div>
            <div className="mb-5 mx-4 relative ">
              <img src={photo2} alt="" className="bg-cover" />
              <span className="absolute bottom-6 right-6">
                <h1 className="text-xl">15% Off</h1>
                <h1 className="text-2xl font-semibold">Men's Fashion</h1>
                <h1 className="text-xl font-light">Shop Now</h1>
              </span>
            </div>
            <div className="mb-5 mx-4  relative">
              <img src={photo3} alt="" className="bg-cover" />
              <span className="absolute bottom-6 right-6">
                <h1 className="text-xl">23% Off</h1>
                <h1 className="text-2xl font-semibold">Kids Fashion</h1>
                <h1 className="text-xl font-light">Shop Now</h1>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InsideProducts;
