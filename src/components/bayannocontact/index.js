import "./index.css";
import Footer from "../footer";
import Navbar from "../navbar";

const BayannoContactPage = () => {
  return (
    <div className="bayanno-contact-bg-container">
      <div className="bayanno-contact-inner-bg-container">
        <Navbar />
        <div className="bayanno-contact-content-container">
          <section className="bayanno-common-home-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="bayanno-common-home-heading">CONTACT US</h1>
                  <h4 className="bayanno-common-home-heading-second">
                    Home / Contact Us
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-contact-make-contact-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-3 mt-3 d-flex flex-column align-items-center justify-content-center">
                  <h3 className="bayanno-contact-make-contact-heading">
                    Contact Us For Help
                  </h3>
                  <p className="bayanno-contact-make-contact-text-call-us">
                    Please Call Us Or Complete The Form Below And We Will Get To
                    You Shortly
                  </p>
                  <div className="bayanno-contact-make-contact-text-call-number mt-3 mb-3">
                    <i class="fa-solid fa-mobile-screen-button mr-3"></i>
                    <span>1-800-400-7400</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-contact-main-section">
            <div className="container">
              <div className="row">
                <div className="col-12 mt-3 mb-3">
                  <form className="bayanno-contact-form-container">
                    <div className="mt-3 mb-3">
                      <label
                        className="bayanno-contact-form-label"
                        htmlFor="contactPatientName"
                      >
                        YOUR NAME
                      </label>
                      <input
                        id="contactPatientName"
                        className="bayanno-contact-form-input"
                        placeholder="Enter Your Name"
                        type="text"
                      />
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-contact-form-label"
                        htmlFor="contactPatientEmail"
                      >
                        YOUR EMAIL
                      </label>
                      <input
                        id="contactPatientEmail"
                        className="bayanno-contact-form-input"
                        placeholder="Enter Your Email"
                        type="text"
                      />
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-contact-form-label"
                        htmlFor="contactPatientPhone"
                      >
                        PHONE
                      </label>
                      <input
                        id="contactPatientPhone"
                        className="bayanno-contact-form-input"
                        placeholder="Enter Your Phone Number"
                        type="number"
                      />
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-contact-form-label"
                        htmlFor="contactPatientAddress"
                      >
                        Address
                      </label>
                      <input
                        id="contactPatientAddress"
                        className="bayanno-contact-form-input"
                        placeholder="Enter Your Address"
                        type="text"
                      />
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-contact-form-label"
                        htmlFor="contactPatientMessage"
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="contactPatientMessage"
                        className="bayanno-contact-form-input"
                        placeholder="Enter Your Message"
                        rows={7}
                        cols={55}
                      ></textarea>
                    </div>
                    <div className="mt-4 mb-3">
                      <div className="bayanno-contact-not-robot-container">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="bayanno-contact-not-robot-checkbox"
                          />
                          <label className="bayanno-contact-not-robot-label">
                            I'm not a robot
                          </label>
                        </div>
                        <div>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"
                            className="bayanno-contact-not-robot-image"
                            alt="captchaImage"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-3">
                      <button
                        className="bayanno-contact-book-now-button"
                        type="submit"
                      >
                        <span className="mt-1">SEND MESSAGE</span>
                      </button>
                    </div>
                  </form>
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

export default BayannoContactPage;
