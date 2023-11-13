import { Link } from "react-router-dom";
import AdminFooter from "../adminfooter";
import AdminHeader from "../adminheader";
import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import "./index.css";

const AdminDepartment = () => {
  return (
    <div className="bayanno-admin-department-main-container">
      <div className="container-fluid bayanno-admin-height-container-department">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container-department">
          <div className="col-12 bayanno-admin-height-container-department d-flex p-0">
            <AdminSidebar />

            <div className="bayanno-admin-main-content-container-department">
              <div className="container-fluid">
                <AdminHeader />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-department-main-heading-icon"></i>
                      <h3 className="bayanno-admin-department-main-heading-text">
                        Department
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-12 text-right">
                    <button
                      type="button"
                      className="bayanno-admin-department-add-button"
                    >
                      <i class="fa-solid fa-plus bayanno-admin-department-add-plus-icon"></i>{" "}
                      Add Department
                    </button>
                  </div>
                </div>
                <AdminFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDepartment;
