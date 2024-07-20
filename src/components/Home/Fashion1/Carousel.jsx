import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import photo1 from "../../../images/Home/header1.png";
import photo2 from "../../../images/Home/header2.png";
import photo3 from "../../../images/Home/header3.png";

const Carousel = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="carousel w-full  " id="carousel">
      <div id="slide1" className="carousel-item relative w-full ">
        <div className="flex justify-around  w-full  bg-yellow">
          <span className="self-center  flex flex-col items-start gap-5  translate-x-24">
            <h1 className="font-bold">Get up to 50% off Today Only!</h1>
            <h1 className="text-6xl font-bold">Woman Fashion</h1>
            <button className="btn bg-white mt-5">Shop Now</button>
          </span>
          <img src={photo1} className="translate-x-11" />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full ">
        <div className="flex justify-around  w-full bg-red">
          <span className="self-center  flex flex-col items-start gap-5">
            <h1 className="font-bold">Get up to 50% off Today Only!</h1>
            <h1 className="text-6xl font-bold">Woman Fashion</h1>
            <button className="btn bg-white mt-5">Shop Now</button>
          </span>
          <img src={photo2} />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full bg-blue">
        <div className="flex flex-row justify-around  w-full">
          <span className="self-center">
            {" "}
            <h1 className="font-bold" data-aos="fade-left">
              Get up to 50% off Today Only!
            </h1>
            <h1 className="text-6xl font-bold">Woman Fashion</h1>
            <button className="btn bg-white mt-5">Shop Now</button>
          </span>
          <img src={photo3} />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
