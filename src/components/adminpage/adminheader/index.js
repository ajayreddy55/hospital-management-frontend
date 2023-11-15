import { Link } from "react-router-dom";

import "./index.css";

const AdminHeader = () => {
  return (
    <div className="bayanno-admin-header-container row">
      <div className="col-12 mt-3 mb-2">
        <h1 className="bayanno-admin-header-heading">
          Bayanno Hospital Management System
        </h1>
      </div>
      <div className="col-12 mt-2 mb-3">
        <div className="bayanno-admin-header-logout-profile-container">
          <Link className="bayanno-admin-header-profile-container mt-2">
            <i className="fa-solid fa-circle-user bayanno-admin-header-profile-icon"></i>
            <span className="bayanno-admin-header-profile-text">admin</span>
          </Link>
          <div className="d-flex align-items-center mt-2">
            <Link className="bayanno-admin-header-profile-container">
              <i className="fa-solid fa-earth-africa bayanno-admin-header-profile-icon"></i>
              <span className="bayanno-admin-header-profile-text">Website</span>
            </Link>
            <div className="bayanno-admin-header-ver-line"></div>
            <button className="bayanno-admin-header-logout-button">
              <span className="bayanno-admin-header-logout-text">Logout</span>
              <i className="fa-solid fa-right-from-bracket bayanno-admin-header-logout-icon"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="w-100">
          <hr className="bayanno-admin-header-hr-line" />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
