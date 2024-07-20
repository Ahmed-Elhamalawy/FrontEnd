import Appbar from "../components/AppBar/appbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

const Mainlayout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <span className=" absolute left-1/2 top-1/2">
          <SyncLoader color="#ff324d" />
        </span>
      ) : (
        <div>
          {" "}
          {/* <Appbar /> */}
          <Outlet />
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
};

export default Mainlayout;
