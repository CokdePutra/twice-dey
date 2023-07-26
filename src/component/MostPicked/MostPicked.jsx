import React from "react";
import "./MostPicked.css";
import { MostPickedData } from "../../constants/constants";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "./sliderSettings";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";

const MostPicked = () => {
  return (
    <section className="mostpicked">
      <div className="container-mostpicked">
        <h3 className="title">Most Picked</h3>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          <div className="content">
            {MostPickedData.map(
              ({ id, title, description, image, price, star, wishlist }) => (
                <SwiperSlide>
                  <div
                    className="mostpicked-images"
                    id="mostPickedHover"
                    key={id}
                  >
                    <img className="image" src={image} alt="img" />
                    <div className="container-description">
                      <div className="description">
                        <h2 className="title">{title}</h2>
                        <p className="desc">{description}</p>
                        <h2 className="price">Rp.{price}</h2>
                        <button className="button">Book Now</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default MostPicked;

const SliderButtons = function () {
  const swiper = useSwiper();
  return (
    <div className="sliderButtons">
      <button onClick={() => swiper.slidePrev()}>
        <BiChevronLeftCircle />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <BiChevronRightCircle />
      </button>
    </div>
  );
};
