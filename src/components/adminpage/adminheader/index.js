import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminHeader = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    user: {},
    apiStatus: apiConstants.initial,
  });

  useEffect(() => {
    getUserDetails();
    //eslint-disable-next-line
  }, []);

  const getUserDetails = async () => {
    setUserInfo((prevState) => ({
      ...prevState,
      user: {},
      apiStatus: apiConstants.inProgress,
    }));

    const url = "http://localhost:5000/auth/profile";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const responseObject = await fetch(url, options);

    if (responseObject.ok) {
      const responseObjectJson = await responseObject.json();
      setUserInfo((prevState) => ({
        ...prevState,
        user: responseObjectJson.userDetails,
        apiStatus: apiConstants.success,
      }));
    } else {
      setUserInfo((prevState) => ({
        ...prevState,
        user: {},
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const logoutTheUser = () => {
    Cookies.remove("hospital-jwt-token");
    navigate("/bayanno/login");
  };

  return (
    <div className="bayanno-admin-header-container row">
      <div className="col-12 mt-3 mb-2">
        <h1 className="bayanno-admin-header-heading">
          Bayanno Hospital Management System
        </h1>
      </div>
      <div className="col-12 mt-2 mb-3">
        <div className="bayanno-admin-header-logout-profile-container">
          <Link
            className="bayanno-admin-header-profile-container mt-2"
            to={"/bayanno/admin/account"}
          >
            <i className="fa-solid fa-circle-user bayanno-admin-header-profile-icon"></i>
            <span className="bayanno-admin-header-profile-text">
              {userInfo.apiStatus === apiConstants.success
                ? userInfo.user.name
                : "Admin"}
            </span>
          </Link>
          <div className="d-flex align-items-center mt-2">
            <Link
              className="bayanno-admin-header-profile-container"
              to={"/bayanno/home"}
              target="_blank"
            >
              <i className="fa-solid fa-earth-africa bayanno-admin-header-profile-icon"></i>
              <span className="bayanno-admin-header-profile-text">Website</span>
            </Link>
            <div className="bayanno-admin-header-ver-line"></div>
            <button
              className="bayanno-admin-header-logout-button"
              onClick={logoutTheUser}
            >
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
