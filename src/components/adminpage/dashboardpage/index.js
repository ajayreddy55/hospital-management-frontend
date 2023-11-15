import { Link } from "react-router-dom";
import AdminFooter from "../adminfooter";
import AdminHeader from "../adminheader";
import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import "./index.css";

const AdminDashboard = () => {
  return (
    <div className="bayanno-admin-dashboard-main-container">
      <div className="container-fluid bayanno-admin-height-container">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container">
          <div className="col-12 bayanno-admin-height-container d-flex p-0">
            <AdminSidebar />

            <div className="bayanno-admin-main-content-container-dashboard">
              <div className="container-fluid">
                <AdminHeader />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-dashboard-main-heading-icon"></i>
                      <h3 className="bayanno-admin-dashboard-main-heading-text">
                        Admin Dashboard
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 mb-3">
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-doctor">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-user-md bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            2
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Doctor
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-patient">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-user bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            1
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Patient
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-nurse">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-plus-square bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            1
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Nurse
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-pharmacist">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-medkit bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            1
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Pharmacist
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-labaratorist">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-user bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            1
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Laboratorist
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-accountant">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-money-bill-1 bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            1
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Accountant
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-receptionist">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-plus-square bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            1
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Receptionist
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-payment">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-regular fa-rectangle-list bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            0
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Payment
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-medicine">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-medkit bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            0
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Medicine
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-operation">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-wheelchair bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            0
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Operation Report
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-birth">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-brands fa-github-alt bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            0
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Birth Report
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link className="bayanno-admin-dashboard-card-link-item mr-2">
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-death">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-ban bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            0
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Death Report
                          </h3>
                        </div>
                      </div>
                    </Link>
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

export default AdminDashboard;
