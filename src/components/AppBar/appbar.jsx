import "../../Assets/index.css";

import { useEffect } from "react";
import Aos from "aos";
import "../../Assets/index.css";

import LGscreenNavbar from "./LG-screen Navbar";
import SmScreenNavBar from "./Sm-screen NavBar";
import UpperAppBar from "./upperAppBar";
const Appbar = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section className="shadow-sm bg-white flex flex-col">
      <UpperAppBar />
      <div className="h-px bg-hr w-full m-0 p-0"></div>

      <LGscreenNavbar />

      <SmScreenNavBar />
    </section>
  );
};

export default Appbar;
