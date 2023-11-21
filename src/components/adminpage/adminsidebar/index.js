import { NavLink } from "react-router-dom";

import bayannoLogo from "../../../assets/bayanno-hospital-logo.png";
import adminProfileIcon from "../../../assets/doctors-profile-icon.jpg";

import "./index.css";
import { useState } from "react";

const AdminSidebar = () => {
  const [isTogglerClicked, setIsTogglerClicked] = useState(false);

  const toggleTheSidebar = () => {
    setIsTogglerClicked((prevState) => !prevState);
  };

  let sidebarCollapse;
  let sidebarNameToggle;

  if (isTogglerClicked) {
    sidebarCollapse = "bayanno-admin-sidebar-container-collapsed";
    sidebarNameToggle = "d-none";
  } else {
    sidebarCollapse = "";
    sidebarNameToggle = "";
  }

  return (
    <div
      className={`bayanno-admin-sidebar-container ${sidebarCollapse} d-none d-md-block`}
    >
      <div className="bayanno-admin-sidebar-inner-container">
        <div className="d-flex align-items-center justify-content-between p-3">
          <img
            className={`bayanno-admin-sidebar-logo ${sidebarNameToggle}`}
            src={bayannoLogo}
            alt="bayannoLogo"
          />
          <button
            type="button"
            className="bayanno-admin-menu-button-sidebar"
            onClick={toggleTheSidebar}
          >
            <i className="fa-solid fa-bars bayanno-admin-menu-button-icon-sidebar"></i>
          </button>
        </div>
        <div className="bayanno-admin-details-sidebar-container">
          <div className="d-flex align-items-center p-3">
            <img
              className="bayanno-admin-sidebar-profile-icon"
              src={adminProfileIcon}
              alt="profileIcon"
            />
            <div className={`${sidebarNameToggle}`}>
              <div className="d-flex flex-column ml-2">
                <p className="bayanno-admin-sidebar-profile-welcome-text">
                  Welcome,
                </p>
                <p className="bayanno-admin-sidebar-profile-name">Mr. Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bayanno-admin-sidebar-menu-container">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/dashboard"}
            >
              <i className="fa-solid fa-desktop bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Dashboard
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/department"}
            >
              <i className="fa-solid fa-sitemap bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Department
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/doctor"}
            >
              <i className="fa-solid fa-user-md bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Doctor
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/patient"}
            >
              <i className="fa-solid fa-user bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Patient
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/nurse"}
            >
              <i className="fa-solid fa-plus-square bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Nurse
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/pharmacist"}
            >
              <i className="fa-solid fa-medkit bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Pharmacist
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/laboratorist"}
            >
              <i className="fa-solid fa-user bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Laboratorist
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/accountant"}
            >
              <i className="fa-solid fa-money-bill-1 bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Accountant
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/receptionist"}
            >
              <i className="fa-solid fa-plus-square bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Receptionist
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-sidebar-menu-item-container bayanno-admin-sidebar-menu-item-container-active"
                  : "bayanno-admin-sidebar-menu-item-container"
              }
              to={"/bayanno/admin/account"}
            >
              <i className="fa-solid fa-user bayanno-admin-sidebar-menu-item-icon"></i>
              <span
                className={`bayanno-admin-sidebar-menu-item-text ${sidebarNameToggle}`}
              >
                Account
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
