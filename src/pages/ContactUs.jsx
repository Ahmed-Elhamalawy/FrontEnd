import { useEffect, useState } from "react";
import Appbar from "../components/AppBar/appbar";
import Footer from "../components/Footer/footer";
import Breadcrumbs from "../components/contact-us/Breadcrumbs";
import ContactCard from "../components/contact-us/contact-card";
import GetInTouch from "../components/contact-us/get-intouch";
import Aos from "aos";
import { SyncLoader } from "react-spinners";

const ContactUs = () => {
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
        <span className=" absolute left-1/2 top-1/2 ">
          <SyncLoader color="#ff324d" />
        </span>
      ) : (
        <div data-aos="fade-in" data-aos-duration="1000">
          <Appbar activeContactus={"text-red"} />
          <div className="flex flex-col justify-between bg-lightgGrey h-44 items-center  sm:px-10 lg:px-24 md:flex-row mb-28">
            <h1 className="text-3xl font-bold	">Contact</h1>
            <Breadcrumbs
              section1={"Home"}
              section2={"pages"}
              section3={"contact"}
            />
          </div>
          <div>
            <ContactCard />
          </div>
          <GetInTouch />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ContactUs;
