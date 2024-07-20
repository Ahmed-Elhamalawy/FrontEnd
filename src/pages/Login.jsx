import LoginForm from "../components/Login/Login-form";
import "../Assets/login.css";
import { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import Aos from "aos";
import "aos/dist/aos.css";
const Login = () => {
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
    <section className="w-full h-screen relative">
      {loading ? (
        <span className=" absolute left-1/2 top-1/2">
          <SyncLoader color="#ff324d" />
        </span>
      ) : (
        <div id="loginContainer" data-aos="fade-in">
          <div className="h-screen w-full bg-gray-100 flex  items-center justify-center ">
            <div
              className="backdrop-blur-sm w-1/3 min-h-40 rounded-md shadow-md text-center py-4 px-3 "
              data-aos="fade-up"
            >
              <div
                id="login-logo"
                className="text-2xl font-bold  text-white mb-5"
              ></div>

              <LoginForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
