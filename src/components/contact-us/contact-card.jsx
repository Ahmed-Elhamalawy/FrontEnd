import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import "../../Assets/mail-icon.css";
const ContactCard = () => {
  return (
    <section className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-10 sm:px-10 lg:px-24 gap-6  ">
      <ul id="container">
        <li id="icon">
          <CiMap />
        </li>
        <h1>Address</h1>
        <p className="m-1">123 Street, Old Trafford, London, UK</p>
      </ul>
      <ul id="container">
        <li id="icon">
          <CiMail />
        </li>
        <h1>Email Address</h1>
        <p className="m-1">info@yourmail.com</p>
      </ul>
      <ul id="container">
        <li id="icon">
          <CiMobile4 />
        </li>
        <h1>Phone</h1>
        <p className="m-1">+ 457 789 789 65</p>
      </ul>
    </section>
  );
};

export default ContactCard;
