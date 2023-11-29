import { Link } from "react-router-dom";
import "./index.css";
import Footer from "../footer";
import Navbar from "../navbar";

const BayannoAboutUsPage = () => {
  return (
    <div className="bayanno-about-us-bg-container">
      <div className="bayanno-about-us-inner-bg-container">
        <Navbar />
        <div className="bayanno-about-us-content-container">
          <section className="bayanno-common-home-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="bayanno-common-home-heading">ABOUT US</h1>
                  <h4 className="bayanno-common-home-heading-second">
                    Home / About Us
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-about-us-main-section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bayanno-about-us-description-main-container">
                    <h2 className="bayanno-about-us-description-main-heading mt-3 mb-2">
                      ABOUT BAYANNO DIAGNOSTIC CENTER
                    </h2>
                    <p className="bayanno-about-us-description-main-text mb-3 mt-3">
                      The way I take it will be to my objection that I should
                      necessarily believe that the voice of the earth is the
                      voice of others, or as if it were a lore. I am looking for
                      force, or it may seem that there are more than two, and I
                      will not find a formal loan closely related to the fact
                      that I am also infinite. The way I take it will be to my
                      objection that I should necessarily believe that the voice
                      of the earth is the voice of others, or as if it were a
                      lore. I am looking for force, or it may seem that there
                      are more than two, and I will not find a formal loan
                      closely related to the fact that I am also infinite. The
                      way I take it will be to my objection that I should
                      necessarily believe that the voice of the earth is the
                      voice of others, or as if it were a lore. I am looking for
                      force, or it may seem that there are more than two, and I
                      will not find a formal loan closely related to the fact
                      that I am also infinite.
                    </p>
                    <p className="bayanno-about-us-description-main-text mt-4 mb-3">
                      The way I take it will be to my objection that I should
                      necessarily believe that the voice of the earth is the
                      voice of others, or as if it were a lore. I am looking for
                      force, or it may seem that there are more than two, and I
                      will not find a formal loan closely related to the fact
                      that I am also infinite. The way I take it will be to my
                      objection that I should necessarily believe that the voice
                      of the earth is the voice of others, or as if it were a
                      lore. I am looking for force, or it may seem that there
                      are more than two, and I will not find a formal loan
                      closely related to the fact that I am also infinite. The
                      way I take it will be to my objection that I should
                      necessarily believe that the voice of the earth is the
                      voice of others, or as if it were a lore. I am looking for
                      force, or it may seem that there are more than two, and I
                      will not find a formal loan closely related to the fact
                      that I am also infinite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-about-us-services-container">
            <div className="container">
              <div className="row">
                <h3 className="bayanno-about-us-services-main-heading col-12">
                  Our World Class Services
                </h3>
                <p className="bayanno-about-us-services-description col-12">
                  It is very important to take care of the patient, and the
                  patient will be followed by the patient, but it is a time of
                  great pain and suffering. Over the years, I will come.
                </p>
              </div>
            </div>
          </section>
          {/* <section className="mt-0 pt-0 container-sec">
            <div className="w-100 d-flex justify-content-center mt-0 pt-0">
              <VscTriangleDown className="bayanno-home-triangle-icon-services" />
            </div>
          </section> */}
          <section className="bayanno-about-us-services-content-container">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 mt-2 mb-2">
                  <div className="mr-2">
                    <h3 className="bayanno-about-us-services-content-heading">
                      High quality service
                    </h3>
                    <p className="bayanno-about-us-services-content-heading-text">
                      It is important to take care of the patient, to be
                      followed by the patient, but it will happen at such a time
                      that there is a lot of work and pain.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mb-2">
                  <div className="mr-2">
                    <h3 className="bayanno-about-us-services-content-heading">
                      Modern hospital and technology
                    </h3>
                    <p className="bayanno-about-us-services-content-heading-text">
                      It is important to take care of the patient, to be
                      followed by the patient, but it will happen at such a time
                      that there is a lot of work and pain.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mb-2">
                  <div className="mr-2">
                    <h3 className="bayanno-about-us-services-content-heading">
                      Ready for intervention
                    </h3>
                    <p className="bayanno-about-us-services-content-heading-text">
                      It is important to take care of the patient, to be
                      followed by the patient, but it will happen at such a time
                      that there is a lot of work and pain.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mb-2">
                  <div className="mr-2">
                    <h3 className="bayanno-about-us-services-content-heading">
                      Specialist consulting for health problems
                    </h3>
                    <p className="bayanno-about-us-services-content-heading-text">
                      It is important to take care of the patient, to be
                      followed by the patient, but it will happen at such a time
                      that there is a lot of work and pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-about-us-get-touch-container">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-3 mt-3">
                  <h3 className="bayanno-about-us-get-touch-heading">
                    Get In Touch With Our Professionals
                  </h3>
                </div>
                <div className="col-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                  <Link className="bayanno-about-us-get-touch-link-item">
                    <p className="bayanno-about-us-get-touch-link-text">
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
    </div>
  );
};

export default BayannoAboutUsPage;
