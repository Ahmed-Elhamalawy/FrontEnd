import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import photo1 from "../../../images/Home/banner1.jpg";
import photo2 from "../../../images/Home/banner2.jpg";
import photo3 from "../../../images/Home/banner3.jpg";

const HeaderSwiper = () => {
  return (
    <div>
      <Swiper
        className="w-full h-full"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${photo1})`,
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="flex flex-col gap-5 absolute  translate-y-48 translate-x-28">
              <h3 id="firstSlide" className="text-2xl font-semibold">
                Get up to 50% off Today Only!
              </h3>
              <h1 id="secondSlide" className="text-5xl font-bold">
                Woman Fashion
              </h1>
              <div id="thirdSlide">
                <button id="closing-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${photo2})`,
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-5 absolute translate-y-48 translate-x-28">
              <h3 id="firstSlide" className="text-2xl font-semibold  ">
                50% off in all products
              </h3>
              <h1 id="secondSlide" className="text-5xl font-bold">
                Man Fashion
              </h1>
              <div id="thirdSlide">
                <button id="closing-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${photo3})`,
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col gap-5  absolute translate-y-48 translate-x-28">
              <h3 id="firstSlide" className="text-2xl font-semibold">
                Taking your Viewing Experience to Next Level
              </h3>
              <h1 id="secondSlide" className="text-5xl font-bold">
                Summer Sale
              </h1>
              <div id="thirdSlide">
                <button id="closing-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
