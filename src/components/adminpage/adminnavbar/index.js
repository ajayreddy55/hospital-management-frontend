import { NavLink } from "react-router-dom";

import bayannoLogo from "../../../assets/bayanno-hospital-logo.png";
import adminProfileIcon from "../../../assets/doctors-profile-icon.jpg";

import "./index.css";

const AdminNavbar = () => {
  return (
    <nav className="bayanno-admin-navbar-container">
      <div className="bayanno-admin-navbar-inner-container">
        <div className="d-flex align-items-center justify-content-between p-3">
          <img
            className="bayanno-admin-navbar-logo"
            src={bayannoLogo}
            alt="bayannoLogo"
          />
          <button
            type="button"
            className="bayanno-admin-menu-button-navbar"
            data-toggle="collapse"
            data-target="#adminNavMenu"
            aria-expanded="false"
            aria-controls="adminNavMenu"
          >
            <i class="fa-solid fa-bars bayanno-admin-menu-button-icon-navbar"></i>
          </button>
        </div>
        <div className="bayanno-admin-details-navbar-container">
          <div className="d-flex align-items-center p-3">
            <img
              className="bayanno-admin-navbar-profile-icon"
              src={adminProfileIcon}
              alt="profileIcon"
            />
            <div className="d-flex flex-column ml-2">
              <p className="bayanno-admin-navbar-profile-welcome-text">
                Welcome,
              </p>
              <p className="bayanno-admin-navbar-profile-name">Mr. Admin</p>
            </div>
          </div>
        </div>
        <div className="collapse" id="adminNavMenu">
          <div className="bayanno-admin-navbar-menu-container">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/dashboard"}
            >
              <i className="fa-solid fa-desktop bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Dashboard
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/department"}
            >
              <i className="fa-solid fa-sitemap bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Department
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/doctor"}
            >
              <i className="fa-solid fa-user-md bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Doctor
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/patient"}
            >
              <i className="fa-solid fa-user bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Patient
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/nurse"}
            >
              <i className="fa-solid fa-plus-square bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">Nurse</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/pharmacist"}
            >
              <i className="fa-solid fa-medkit bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Pharmacist
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/laboratorist"}
            >
              <i className="fa-solid fa-user bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Laboratorist
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/accountant"}
            >
              <i className="fa-solid fa-money-bill-1 bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Accountant
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/receptionist"}
            >
              <i className="fa-solid fa-plus-square bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Receptionist
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bayanno-admin-navbar-menu-item-container bayanno-admin-navbar-menu-item-container-active"
                  : "bayanno-admin-navbar-menu-item-container"
              }
              to={"/bayanno/admin/account"}
            >
              <i className="fa-solid fa-user bayanno-admin-navbar-menu-item-icon"></i>
              <span className="bayanno-admin-navbar-menu-item-text">
                Account
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
