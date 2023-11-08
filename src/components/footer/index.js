import { Link } from "react-router-dom";
import bayannoLogo from "../../assets/bayanno-hospital-logo.png";

import "./index.css";

const Footer = () => {
  return (
    <footer className="bayanno-home-footer-section">
      <div className="bayanno-home-footer-top mt-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mt-2 mb-2">
              <div className="mr-3 d-flex flex-column align-items-center w-100">
                <img
                  src={bayannoLogo}
                  alt="bayannoLogo"
                  className="bayanno-home-footer-logo"
                />
                <p className="bayanno-home-footer-hospital-name">
                  Bayanno Diagnostic Center
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-2 mb-3">
              <div className="mr-2 w-100 d-flex flex-column">
                <h3 className="bayanno-home-footer-menu-heading">MAIN MENU</h3>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">Home</p>
                </Link>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">Doctors</p>
                </Link>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">
                    Make An Appointment
                  </p>
                </Link>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">Login</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-2 mb-3">
              <div className="mr-2 w-100 d-flex flex-column">
                <h3 className="bayanno-home-footer-menu-heading">
                  HELP AND SUPPORT
                </h3>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">
                    Contact Us
                  </p>
                </Link>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">About Us</p>
                </Link>
                <Link className="bayanno-home-footer-menu-link-item">
                  <p className="bayanno-home-footer-menu-link-text">Blog</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bayanno-home-footer-bottom mt-2 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 mt-2 mb-2">
              <div className="w-100 mr-2">
                <p className="bayanno-home-footer-copyright-text">
                  copyright@Ajay Reddy | 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 mt-2 mb-2">
              <div className="d-flex align-items-center justify-content-md-end">
                <a
                  className="mr-3"
                  href="https://www.facebook.com/"
                  target="__blank"
                >
                  <i class="fa-brands fa-facebook-f bayanno-home-footer-social-icon"></i>
                </a>
                <a
                  className="mr-3"
                  href="https://twitter.com/"
                  target="__blank"
                >
                  <i class="fa-brands fa-twitter bayanno-home-footer-social-icon"></i>
                </a>
                <a
                  className="mr-3"
                  href="https://www.google.com/"
                  target="__blank"
                >
                  <i class="fa-brands fa-google-plus-g bayanno-home-footer-social-icon"></i>
                </a>
                <a
                  className="mr-3"
                  href="https://www.youtube.com/"
                  target="__blank"
                >
                  <i class="fa-brands fa-youtube bayanno-home-footer-social-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
