import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

import photo1 from "../../../images/Home/fashion 1/user1.jpg";
import photo2 from "../../../images/Home/fashion 1/user2.jpg";
import photo3 from "../../../images/Home/fashion 1/user3.jpg";

const CommentsSwiper = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-4/6">
        <Swiper
          spaceBetween={50}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <p className="w-3/4 text-center mb-5 text-black text-opacity-70 leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
              </p>
              <span className="flex row gap-4 items-center justify-center">
                <img src={photo1} alt="" />
                <span>
                  <h3 className="text-xl font-semibold">Aldin Smith</h3>
                  <h3 className="text-red text-xl font-semibold"> Designer</h3>
                </span>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <p className="w-3/4 text-center mb-5 text-black text-opacity-70 leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
              </p>
              <span className="flex row gap-4 items-center justify-center">
                <img src={photo2} alt="" />
                <span>
                  <h3 className="text-xl font-semibold">Daisy Lana</h3>
                  <h3 className="text-red text-xl font-semibold">Designer</h3>
                </span>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <p className="w-3/4 text-center mb-5 text-black text-opacity-70 leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
              </p>
              <span className="flex row gap-4 items-center justify-center">
                <img src={photo3} alt="" />
                <span>
                  <h3 className="text-xl font-semibold">John Becker</h3>
                  <h3 className="text-red text-xl font-semibold">Designer</h3>
                </span>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CommentsSwiper;
