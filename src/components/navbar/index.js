import { Link, useLocation } from "react-router-dom";
// import Popup from "reactjs-popup";
import bayannoHospitalLogo from "../../assets/bayanno-hospital-logo.png";
import "reactjs-popup/dist/index.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import "./index.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light navbar-bg-color">
      <Link className="navbar-brand">
        <div className="navbar-logo-container">
          <img
            src={bayannoHospitalLogo}
            alt="logo"
            className="navbar-logo-image"
          />
          <p className="navbar-logo-name">Bayanno Diagnostic Center</p>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon toggler-icon-navbar"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link
            className={`nav-link navbar-link-item ${
              location.pathname === "/bayanno/home" ? "active" : ""
            }`}
            to={"/bayanno/home"}
          >
            HOME
          </Link>
          <div className="nav-link nav-link-departments">
            <button
              type="button"
              className="navbar-departments-button"
              data-tooltip-id="navbarDepartmentsButton"
            >
              DEPARTMENTS
            </button>
            <Tooltip
              id="navbarDepartmentsButton"
              className="tooltip-departments"
              place="bottom"
              clickable
              opacity={1}
            >
              <div className="navbar-tooltip-dep-container">
                <Link
                  className="navbar-dep-link-item"
                  to={"/bayanno/home/departments/1"}
                >
                  Anesthetics
                </Link>
                <Link
                  className="navbar-dep-link-item mt-2"
                  to={"/bayanno/home/departments/2"}
                >
                  Cardiology
                </Link>
                <Link
                  className="navbar-dep-link-item mt-2"
                  to={"/bayanno/home/departments/3"}
                >
                  Gastroenterology
                </Link>
              </div>
            </Tooltip>
            {/* <Popup
              trigger={
                <button type="button" className="navbar-departments-button">
                  DEPARTMENTS
                </button>
              }
              position={"bottom center"}
              on={["hover", "click"]}
              arrow={true}
              className="popup-content-home"
            >
              <div className="navbar-tooltip-dep-container">
                <Link className="navbar-dep-link-item">Anesthetics</Link>
                <Link className="navbar-dep-link-item mt-2">Cardiology</Link>
                <Link className="navbar-dep-link-item mt-2">
                  Gastroenterology
                </Link>
              </div>
            </Popup> */}
          </div>
          <Link
            className={`nav-link navbar-link-item ${
              location.pathname === "/bayanno/home/doctors/0" ? "active" : ""
            }`}
            to={"/bayanno/home/doctors/0"}
          >
            DOCTORS
          </Link>
          <Link
            className={`nav-link navbar-link-item ${
              location.pathname === "/bayanno/home/about" ? "active" : ""
            }`}
            to={"/bayanno/home/about"}
          >
            ABOUT
          </Link>
          <Link
            className={`nav-link navbar-link-item ${
              location.pathname === "/bayanno/home/appointment" ? "active" : ""
            }`}
            to={"/bayanno/home/appointment"}
          >
            APPOINTMENT
          </Link>
          <Link
            className={`nav-link navbar-link-item ${
              location.pathname === "/bayanno/home/blogs" ? "active" : ""
            }`}
            to={"/bayanno/home/blogs"}
          >
            BLOG
          </Link>
          <Link
            className={`nav-link navbar-link-item ${
              location.pathname === "/bayanno/home/contact" ? "active" : ""
            }`}
            to={"/bayanno/home/contact"}
          >
            CONTACT
          </Link>
          <Link
            className="nav-link navbar-link-item"
            to={"/bayanno/login"}
            target="__blank"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
