import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import LogoLight from "../../images/logo_light.png";
const Footer = () => {
  return (
    <section>
      <div className="px-10 h-auto py-12 my sm:px-10 lg:px-24 grid sm:grid-cols-1 lg:grid-cols-2 sm:grid grid-cols-1 bg-red mt-40 items-center">
        <span className="text-3xl font-bold text-white mt-5 mb-5">
          Subscribe Our Newsletter
        </span>
        <div className="flex justify-end  ">
          <input
            type="text"
            placeholder="   Enter email adress"
            className="outline-none w-full "
          />
          <button className="text-white bg-black py-3 px-9 text-xl ">
            Subscribe
          </button>
        </div>
      </div>
      <footer className="bg-black text-white p-10 sm:p-10 lg:p-24 relative ">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col  items-start gap-7">
            <img src={LogoLight} alt="" />
            <p>
              If you are going to use of Lorem Ipsum need to be sure there isnt
              hidden of text
            </p>
            <span className="flex gap-4">
              <FaFacebookF />
              <AiOutlineTwitter />
              <AiOutlineGooglePlus />
              <AiOutlineYoutube />
              <BsInstagram />
            </span>
          </div>
          <ul className="flex flex-col  items-start gap-4">
            <li className="text-2xl capitalize font-bold">Useful Links</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Location</li>
            <li>Affiliates</li>
            <li>Contact</li>
          </ul>
          <ul className="flex flex-col  items-start gap-4">
            <li className="text-2xl capitalize font-bold">Category</li>
            <li>Men Us</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Best Saller</li>
            <li>New Arrivals</li>
          </ul>
          <ul className="flex flex-col  items-start gap-4">
            <li className="text-2xl capitalize font-bold">My Account</li>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
          <ul className="flex flex-col  items-start gap-4">
            <li className="text-2xl capitalize font-bold">Contact Info</li>
            <li>
              <span className="flex justify-center items-center gap-5">
                <GoLocation className="w-1/6" /> 123 Street, Old Trafford, New
                South London,UK
              </span>
            </li>
            <li>
              {" "}
              <span className="flex justify-center items-center gap-5">
                <AiOutlineMail />
                info@sitename.com
              </span>
            </li>
            <li>
              <span className="flex justify-center items-center gap-5">
                <BsPhone />+ 457 789 789 65
              </span>{" "}
            </li>
          </ul>
        </section>
        <hr className="mt-36 text-hr" />
        <div className="m-5 grid lg:grid-cols-2 sm:grid-cols-1">
          <p>© 2020 All Rights Reserved by Bestwebcreator</p>
          <span className="flex gap-2 justify-end">
            <FaCcVisa className="tex" />
            <FaCcMastercard className="tex" />
            <FaCcPaypal className="tex" />
            <FaCcDiscover className="tex" />
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
