import { Link } from "react-router-dom";
import AdminFooter from "../adminfooter";
import AdminHeader from "../adminheader";
import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const AdminDashboard = () => {
  const [numberOfDoctors, setNumberOfDoctors] = useState(0);
  const [numberOfPatients, setNumberOfPatients] = useState(0);
  const [numberOfNurses, setNumberOfNurses] = useState(0);
  const [numberOfPharmacists, setNumberOfPharmacists] = useState(0);
  const [numberOfLaboratorists, setNumberOfLaboratorists] = useState(0);
  const [numberOfAccountants, setNumberOfAccountants] = useState(0);
  const [numberOfReceptionists, setNumberOfReceptionists] = useState(0);

  useEffect(() => {
    getDoctorsList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPatientsList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getNursesList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPharmacistsList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getLaboratoristsList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAccountantsList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getReceptionistsList();
    //eslint-disable-next-line
  }, []);

  const getDoctorsList = async () => {
    const url = "http://localhost:5000/api/get-all-doctors";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const doctorsRes = await fetch(url, options);

    if (doctorsRes.ok) {
      const doctorsResJson = await doctorsRes.json();
      setNumberOfDoctors(doctorsResJson.doctors.length);
    } else {
      setNumberOfDoctors(0);
    }
  };

  const getPatientsList = async () => {
    const url = "http://localhost:5000/api/get-all-patients";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const patientsRes = await fetch(url, options);

    if (patientsRes.ok) {
      const patientsResJson = await patientsRes.json();
      setNumberOfPatients(patientsResJson.patients.length);
    } else {
      setNumberOfPatients(0);
    }
  };

  const getNursesList = async () => {
    const url = "http://localhost:5000/api/get-all-nurses";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const responseList = await fetch(url, options);

    if (responseList.ok) {
      const responseListJson = await responseList.json();
      setNumberOfNurses(responseListJson.nurses.length);
    } else {
      setNumberOfNurses(0);
    }
  };

  const getPharmacistsList = async () => {
    const url = "http://localhost:5000/api/get-all-pharmacists";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const responseList = await fetch(url, options);

    if (responseList.ok) {
      const responseListJson = await responseList.json();
      setNumberOfPharmacists(responseListJson.pharmacists.length);
    } else {
      setNumberOfPharmacists(0);
    }
  };

  const getLaboratoristsList = async () => {
    const url = "http://localhost:5000/api/get-all-laboratorists";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const responseList = await fetch(url, options);

    if (responseList.ok) {
      const responseListJson = await responseList.json();
      setNumberOfLaboratorists(responseListJson.laboratorists.length);
    } else {
      setNumberOfLaboratorists(0);
    }
  };

  const getAccountantsList = async () => {
    const url = "http://localhost:5000/api/get-all-accountants";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const responseList = await fetch(url, options);

    if (responseList.ok) {
      const responseListJson = await responseList.json();
      setNumberOfAccountants(responseListJson.accountants.length);
    } else {
      setNumberOfAccountants(0);
    }
  };

  const getReceptionistsList = async () => {
    const url = "http://localhost:5000/api/get-all-receptionists";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const responseList = await fetch(url, options);

    if (responseList.ok) {
      const responseListJson = await responseList.json();
      setNumberOfReceptionists(responseListJson.receptionists.length);
    } else {
      setNumberOfReceptionists(0);
    }
  };

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
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/doctor"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-doctor">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-user-md bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfDoctors}
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Doctor
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/patient"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-patient">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-user bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfPatients}
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Patient
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/nurse"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-nurse">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-plus-square bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfNurses}
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Nurse
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/pharmacist"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-pharmacist">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-medkit bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfPharmacists}
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Pharmacist
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/laboratorist"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-labaratorist">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-user bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfLaboratorists}
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Laboratorist
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/accountant"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-accountant">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-money-bill-1 bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfAccountants}
                          </p>
                          <h3 className="bayanno-admin-dashboard-card-text">
                            Accountant
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 min-h-100 mt-3 mb-2">
                    <Link
                      className="bayanno-admin-dashboard-card-link-item mr-2"
                      to={"/bayanno/admin/receptionist"}
                    >
                      <div className="bayanno-admin-dashboard-card bayanno-admin-dashboard-card-receptionist">
                        <div className="bayanno-admin-dashboard-card-icon-container">
                          <i className="fa-solid fa-plus-square bayanno-admin-dashboard-card-icon"></i>
                        </div>
                        <div className="bayanno-admin-dashboard-card-stats-container">
                          <p className="bayanno-admin-dashboard-card-number">
                            {numberOfReceptionists}
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
