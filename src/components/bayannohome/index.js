import Slider from "react-slick";
import { BsTelephoneFill } from "react-icons/bs";
import { FaRegCalendarDays } from "react-icons/fa6";
import { TbClockHour9 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { VscTriangleDown } from "react-icons/vsc";

import welcomeImage from "../../assets/welcome-home-image.png";
import anestheticsImage from "../../assets/anesthetics-image.png";
import cardiologyImage from "../../assets/cardialogy-image.png";
import gastroenterologyImage from "../../assets/gastroenterology-image.png";
import doctorsProfileIcon from "../../assets/doctors-profile-icon.jpg";

import Navbar from "../navbar";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../footer";

const BayannoHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  };

  const homeCarousel = () => {
    return (
      <Slider {...settings} className="bayanno-home-carousel">
        <div className="home-carousel-container-1">
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
        <div className="home-carousel-container-2">
          <div className="home-carousel-container-card">
            <h1 className="home-carousel-heading">
              The Skill to heal, the spirit <br />
              to care
            </h1>
            <p className="home-carousel-text">
              Dedicated to providing multidisciplinary medical care and backed
              by state-of-the-art facilities.
            </p>
          </div>
        </div>
        <div className="home-carousel-container-3">
          <div className="home-carousel-container-card">
            <h1 className="home-carousel-heading">
              Giving children the care <br />
              they deserve
            </h1>
            <p className="home-carousel-text">
              To keep the body in good health is a duty. Otherwise we shall not
              be able to keep our mind strong and clear.
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
        <section className="bayanno-home-carousel-container">
          {homeCarousel()}
        </section>
        <section className="bayanno-home-info-section">
          <div className="container bayanno-home-info-section-2">
            <div className="row">
              <div className="col-12 col-md-4 p-0">
                <div className="bayyano-home-info-em-contact-card">
                  <BsTelephoneFill className="bayanno-home-info-em-con-icon" />
                  <h3 className="bayanno-home-info-heading">
                    EMERGENCY CONTACT
                  </h3>
                  <p className="bayanno-home-info-text">1-800-400-7400</p>
                </div>
              </div>
              <div className="col-12 col-md-4 p-0">
                <div className="bayyano-home-info-book-appoint-card">
                  <FaRegCalendarDays className="bayanno-home-info-em-con-icon" />
                  <h3 className="bayanno-home-info-heading">
                    DOCTOR APPOINTMENT
                  </h3>
                  <Link
                    className="baynno-home-info-book-appointment-button"
                    to={"/bayanno/home/appointment"}
                  >
                    BOOK AN APPOINTMENT
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 p-0">
                <div className="bayyano-home-info-opening-hours-card">
                  <TbClockHour9 className="bayanno-home-info-clock-icon" />
                  <h3 className="bayanno-home-info-heading">OPENING HOURS</h3>
                  <ul className="pl-0">
                    <li className="bayanno-home-info-opening-hours-text">
                      <p>Monday - Friday</p>
                      <p className="bayanno-home-info-opening-hours-time">
                        10.00-21.00
                      </p>
                    </li>
                    <li className="bayanno-home-info-opening-hours-text">
                      <p>Saturday</p>
                      <p className="bayanno-home-info-opening-hours-time">
                        10.00-18.00
                      </p>
                    </li>
                    <li className="bayanno-home-info-opening-hours-text">
                      <p>Sunday</p>
                      <p className="bayanno-home-info-opening-hours-time">
                        11.00-17.00
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bayanno-home-welcome-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  alt="welcomeImage"
                  src={welcomeImage}
                  className="w-100 mr-2"
                />
              </div>
              <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="ml-md-2">
                  <h3 className="bayanno-home-welcome-heading">
                    Welcome To Bayanno Diagnostic Center
                  </h3>
                  <p className="bayanno-home-welcome-des">
                    It is very important to take care of the patient, and the
                    patient will be followed by the patient, but it is a time of
                    great pain and suffering. In fact, to come to the bottom of
                    it, every training program is suitable for tomorrow and just
                    for any exercise. It is very important to take care of the
                    patient, and the patient will be followed by the patient,
                    but it is a time of great pain and suffering. In fact, to
                    come to the bottom of it, every training program is suitable
                    for tomorrow and just for any exercise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bayanno-home-services-container">
          <div className="container">
            <div className="row">
              <h3 className="bayanno-home-services-main-heading col-12">
                Our World Class Services
              </h3>
              <p className="bayanno-home-services-description col-12">
                It is very important to take care of the patient, and the
                patient will be followed by the patient, but it is a time of
                great pain and suffering. Over the years, I will come.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-0 pt-0 container-sec">
          <div className="w-100 d-flex justify-content-center mt-0 pt-0">
            <VscTriangleDown className="bayanno-home-triangle-icon-services" />
          </div>
        </section>
        <section className="bayanno-home-services-content-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mt-2 mb-2">
                <div className="mr-2">
                  <h3 className="bayanno-home-services-content-heading">
                    High quality service
                  </h3>
                  <p className="bayanno-home-services-content-heading-text">
                    It is important to take care of the patient, to be followed
                    by the patient, but it will happen at such a time that there
                    is a lot of work and pain.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-2 mb-2">
                <div className="mr-2">
                  <h3 className="bayanno-home-services-content-heading">
                    Modern hospital and technology
                  </h3>
                  <p className="bayanno-home-services-content-heading-text">
                    It is important to take care of the patient, to be followed
                    by the patient, but it will happen at such a time that there
                    is a lot of work and pain.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-2 mb-2">
                <div className="mr-2 ml-md-2">
                  <h3 className="bayanno-home-services-content-heading">
                    Ready for intervention
                  </h3>
                  <p className="bayanno-home-services-content-heading-text">
                    It is important to take care of the patient, to be followed
                    by the patient, but it will happen at such a time that there
                    is a lot of work and pain.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-2 mb-2">
                <div className="mr-2 ml-md-2">
                  <h3 className="bayanno-home-services-content-heading">
                    Specialist consulting for health problems
                  </h3>
                  <p className="bayanno-home-services-content-heading-text">
                    It is important to take care of the patient, to be followed
                    by the patient, but it will happen at such a time that there
                    is a lot of work and pain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bayanno-home-departments-container">
          <div className="container">
            <div className="row mb-3">
              <div className="col-12">
                <h2 className="bayanno-home-departments-heading">
                  Departments
                </h2>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-12 col-md-3 mt-2 mb-2">
                <div className="bayanno-home-departments-card mr-2">
                  <Link className="bayanno-home-departments-link-item">
                    <img
                      alt="anesthetics"
                      src={anestheticsImage}
                      className="bayanno-home-departments-image"
                    />
                    <p className="bayanno-home-departments-name">Anesthetics</p>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-3 mt-2 mb-2">
                <div className="bayanno-home-departments-card mr-2">
                  <Link className="bayanno-home-departments-link-item">
                    <img
                      alt="cardiology"
                      src={cardiologyImage}
                      className="bayanno-home-departments-image"
                    />
                    <p className="bayanno-home-departments-name">Cardiology</p>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-3 mt-2 mb-2">
                <div className="bayanno-home-departments-card mr-2">
                  <Link className="bayanno-home-departments-link-item">
                    <img
                      alt="gastroenterology"
                      src={gastroenterologyImage}
                      className="bayanno-home-departments-image"
                    />
                    <p className="bayanno-home-departments-name">
                      Gastroenterology
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bayanno-home-doctors-container">
          <div className="container">
            <div className="row mb-3 mt-3">
              <div className="col-12">
                <h3 className="bayanno-home-doctors-heading">
                  Our Awesome Doctors
                </h3>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-12 col-md-4 col-lg-3 mt-2 mb-3">
                <div className="mr-2 d-flex flex-column w-100">
                  <div>
                    <img
                      alt="doctorsProfileIcon"
                      src={doctorsProfileIcon}
                      className="bayanno-home-doctors-profile-icon"
                    />
                  </div>
                  <div className="d-flex flex-column mt-2">
                    <p className="bayanno-home-doctors-department">
                      Cardiology
                    </p>
                    <p className="bayanno-home-doctors-name">Micheal Pewd</p>
                    <hr className="bayanno-home-doctors-hr-line" />
                    <div className="d-flex align-items-center">
                      <a
                        className="mr-2"
                        href="https://www.facebook.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-facebook-f bayanno-home-doctors-social-icon"></i>
                      </a>
                      <a
                        className="mr-2"
                        href="https://twitter.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-twitter bayanno-home-doctors-social-icon"></i>
                      </a>
                      <a
                        className="mr-2"
                        href="https://www.google.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-google-plus-g bayanno-home-doctors-social-icon"></i>
                      </a>
                      <a
                        className="mr-2"
                        href="https://www.linkedin.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-linkedin bayanno-home-doctors-social-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mt-2 mb-3">
                <div className="mr-2 d-flex flex-column w-100">
                  <div>
                    <img
                      alt="doctorsProfileIcon"
                      src={doctorsProfileIcon}
                      className="bayanno-home-doctors-profile-icon"
                    />
                  </div>
                  <div className="d-flex flex-column mt-2">
                    <p className="bayanno-home-doctors-department">
                      Anesthetics
                    </p>
                    <p className="bayanno-home-doctors-name">Erich Mcbride</p>
                    <hr className="bayanno-home-doctors-hr-line" />
                    <div className="d-flex align-items-center">
                      <a
                        className="mr-2"
                        href="https://www.facebook.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-facebook-f bayanno-home-doctors-social-icon"></i>
                      </a>
                      <a
                        className="mr-2"
                        href="https://twitter.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-twitter bayanno-home-doctors-social-icon"></i>
                      </a>
                      <a
                        className="mr-2"
                        href="https://www.google.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-google-plus-g bayanno-home-doctors-social-icon"></i>
                      </a>
                      <a
                        className="mr-2"
                        href="https://www.linkedin.com/"
                        target="__blank"
                      >
                        <i class="fa-brands fa-linkedin bayanno-home-doctors-social-icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bayanno-home-get-touch-container">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3 mt-3">
                <h3 className="bayanno-home-get-touch-heading">
                  Get In Touch With Our Professionals
                </h3>
              </div>
              <div className="col-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                <Link className="bayanno-home-get-touch-link-item">
                  <p className="bayanno-home-get-touch-link-text">
                    MAKE AN APPOINTMENT
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BayannoHome;
