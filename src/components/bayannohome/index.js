import Slider from "react-slick";

import Navbar from "../navbar";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BayannoHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const homeCarousel = () => {
    return (
      <Slider {...settings} className="bayanno-home-carousel">
        <div className="home-carousel-container">
          <div className="home-carousel-container-card">
            <h1 className="home-carousel-heading">
              Where Compassion and <br />
              Healing Come Together
            </h1>
            <p className="home-carousel-text">
              Dedicated to providing multidisciplinary medical care and backed
              by state-of-the-art facilities.
            </p>
          </div>
        </div>
        <div className="home-carousel-container">
          <div className="home-carousel-container-card">
            <h1 className="home-carousel-heading">
              Where Compassion and <br />
              Healing Come Together
            </h1>
            <p className="home-carousel-text">
              Dedicated to providing multidisciplinary medical care and backed
              by state-of-the-art facilities.
            </p>
          </div>
        </div>
      </Slider>
    );
  };

  return (
    <div className="bayanno-home-bg-container">
      <Navbar />
      <div className="bayanno-home-content-container">
        <div className="bayanno-home-carousel-container">{homeCarousel()}</div>
      </div>
    </div>
  );
};

export default BayannoHome;
