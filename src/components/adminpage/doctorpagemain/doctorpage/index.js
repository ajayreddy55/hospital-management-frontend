import AdminFooter from "../../adminfooter";
import AdminHeader from "../../adminheader";
import AdminNavbar from "../../adminnavbar";
import AdminSidebar from "../../adminsidebar";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import Popup from "reactjs-popup";
import addProfileImage from "../../../../assets/add-image-doctor.png";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import DoctorPageRows from "../doctorpagerows";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminDoctorPage = () => {
  const [addDoctorName, setAddDoctorName] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [addDoctorEmail, setAddDoctorEmail] = useState({
    email: "",
    emailRequiredText: "",
  });

  const [addDoctorPassword, setAddDoctorPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [addDoctorAddress, setAddDoctorAddress] = useState("");

  const [addDoctorPhoneNumber, setAddDoctorPhoneNumber] = useState("");

  const [addDoctorDepartment, setAddDoctorDepartment] = useState({
    department: "",
    departmentRequiredText: "",
  });

  const [addDoctorProfileText, setAddDoctorProfileText] = useState("");

  const [addFacebookLink, setAddFacebookLink] = useState("");
  const [addTwitterLink, setAddTwitterLink] = useState("");
  const [addGoogleLink, setAddGoogleLink] = useState("");
  const [addLinkedinLink, setAddLinkedinLink] = useState("");

  const [addDoctorIcon, setAddDoctorIcon] = useState({
    icon: "",
    iconRequiredText: "",
  });

  const [addDoctorImageToDisplay, setAddDoctorImageToDisplay] = useState("");

  const [addDoctorServerMsg, setAddDoctorServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const [doctorsObject, setDoctorsObject] = useState({
    doctors: [],
    apiStatus: apiConstants.initial,
  });

  const [departmentsList, setDepartmentsList] = useState([]);

  useEffect(() => {
    getDoctorsList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getDepartmentsList();
    //eslint-disable-next-line
  }, []);

  const getDoctorsList = async () => {
    setDoctorsObject((prevState) => ({
      ...prevState,
      doctors: [],
      apiStatus: apiConstants.inProgress,
    }));

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
      setDoctorsObject((prevState) => ({
        ...prevState,
        doctors: doctorsResJson.doctors,
        apiStatus: apiConstants.success,
      }));
    } else {
      setDoctorsObject((prevState) => ({
        ...prevState,
        doctors: [],
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const getDepartmentsList = async () => {
    const url = "http://localhost:5000/api/all-departments";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const departmentRes = await fetch(url, options);

    if (departmentRes.ok) {
      const departmentResJson = await departmentRes.json();
      setDepartmentsList(departmentResJson.departmentsList);
    } else {
      setDepartmentsList([]);
    }
  };

  const addDoctorChangeName = (event) => {
    const nameInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setAddDoctorName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setAddDoctorName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const addDoctorChangeEmail = (event) => {
    const emailInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (emailInput === "") {
      setAddDoctorEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      setAddDoctorEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const addDoctorChangePassword = (event) => {
    const passwordInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (passwordInput === "") {
      setAddDoctorPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else {
      setAddDoctorPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const addDoctorChangeAddress = (event) => {
    const addressInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddDoctorAddress(addressInput);
  };

  const addDoctorChangePhoneNumber = (event) => {
    const phoneNumberInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddDoctorPhoneNumber(phoneNumberInput);
  };

  const addDoctorChangeDepartment = (event) => {
    const departmentInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (departmentInput === "") {
      setAddDoctorDepartment((prevState) => ({
        ...prevState,
        department: "",
        departmentRequiredText: "*Required",
      }));
    } else {
      setAddDoctorDepartment((prevState) => ({
        ...prevState,
        department: departmentInput,
        departmentRequiredText: "",
      }));
    }
  };

  const addDoctorChangeProfileText = (event) => {
    const textInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddDoctorProfileText(textInput);
  };

  const addDoctorChangeFacebookLink = (event) => {
    const socialInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddFacebookLink(socialInput);
  };

  const addDoctorChangeTwitterLink = (event) => {
    const socialInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddTwitterLink(socialInput);
  };

  const addDoctorChangeGoogleLink = (event) => {
    const socialInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddGoogleLink(socialInput);
  };

  const addDoctorChangeLinkedinLink = (event) => {
    const socialInput = event.target.value;

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddLinkedinLink(socialInput);
  };

  const addDoctorChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setAddDoctorImageToDisplay("");
      setAddDoctorIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setAddDoctorImageToDisplay(imageUrl);

      setAddDoctorIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const addDoctorRemoveIcon = () => {
    const input = document.getElementById("addDoctorIconInput");
    input.value = null;
    setAddDoctorImageToDisplay("");
    setAddDoctorIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "*Required",
    }));
  };

  const addDoctorDatabase = async (image) => {
    const url = "http://localhost:5000/api/add-doctor";
    const jwtToken = Cookies.get("hospital-jwt-token");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: addDoctorName.name,
        email: addDoctorEmail.email,
        password: addDoctorPassword.password,
        address: addDoctorAddress,
        phoneNumber: addDoctorPhoneNumber,
        department: addDoctorDepartment.department,
        profile: addDoctorProfileText,
        facebookLink: addFacebookLink,
        twitterLink: addTwitterLink,
        googleLink: addGoogleLink,
        linkedinLink: addLinkedinLink,
        profileImage: image,
      }),
    };

    const doctorsRes = await fetch(url, options);

    if (doctorsRes.ok) {
      const doctorsResJson = await doctorsRes.json();
      setAddDoctorServerMsg((prevState) => ({
        ...prevState,
        serverMsg: doctorsResJson.message,
        textColor:
          "bayanno-admin-doctor-add-popup-content-card-server-msg-success",
      }));
      setAddDoctorName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setAddDoctorEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "",
      }));
      setAddDoctorPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "",
      }));
      setAddDoctorAddress("");
      setAddDoctorPhoneNumber("");
      setAddDoctorDepartment((prevState) => ({
        ...prevState,
        department: "",
        departmentRequiredText: "",
      }));
      setAddDoctorProfileText("");
      setAddFacebookLink("");
      setAddTwitterLink("");
      setAddGoogleLink("");
      setAddLinkedinLink("");
      const inputIcon = document.getElementById("addDoctorIconInput");
      inputIcon.value = null;
      setAddDoctorImageToDisplay("");
      setAddDoctorIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "",
      }));
      getDoctorsList();
    } else {
      const doctorsResJson = await doctorsRes.json();
      setAddDoctorServerMsg((prevState) => ({
        ...prevState,
        serverMsg: doctorsResJson.message,
        textColor: "",
      }));
    }
  };

  const addNewDoctorInServer = () => {
    const jwtToken = Cookies.get("hospital-jwt-token");
    const formData = new FormData();
    formData.append("file", addDoctorIcon.icon);
    axios
      .post("http://localhost:5000/upload/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        addDoctorDatabase(response.data.filename);
      })
      .catch((error) => console.log(error));
  };

  const validateAddDoctorForm = () => {
    if (addDoctorName.name === "") {
      setAddDoctorName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (addDoctorEmail.email === "") {
      setAddDoctorEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else if (addDoctorPassword.password === "") {
      setAddDoctorPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (addDoctorDepartment.department === "") {
      setAddDoctorDepartment((prevState) => ({
        ...prevState,
        department: "",
        departmentRequiredText: "*Required",
      }));
    } else if (addDoctorIcon.icon === "") {
      setAddDoctorImageToDisplay("");
      setAddDoctorIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      addNewDoctorInServer();
    }
  };

  const submitAddDoctorForm = (event) => {
    event.preventDefault();
    validateAddDoctorForm();
  };

  const closeAddDoctorPopup = () => {
    setAddDoctorServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));
    setAddDoctorName((prevState) => ({
      ...prevState,
      name: "",
      nameRequiredText: "",
    }));
    setAddDoctorEmail((prevState) => ({
      ...prevState,
      email: "",
      emailRequiredText: "",
    }));
    setAddDoctorPassword((prevState) => ({
      ...prevState,
      password: "",
      passwordRequiredText: "",
    }));
    setAddDoctorAddress("");
    setAddDoctorPhoneNumber("");
    setAddDoctorDepartment((prevState) => ({
      ...prevState,
      department: "",
      departmentRequiredText: "",
    }));
    setAddDoctorProfileText("");
    setAddFacebookLink("");
    setAddTwitterLink("");
    setAddGoogleLink("");
    setAddLinkedinLink("");
    setAddDoctorImageToDisplay("");
    setAddDoctorIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "",
    }));
  };

  const noDataView = () => {
    return (
      <div className="bayanno-admin-doctor-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-doctor-table-no-data-view-text">
          No Data Found
        </h3>
      </div>
    );
  };

  const renderDoctorsList = () => {
    if (doctorsObject.doctors.length === 0) {
      return noDataView();
    }

    return (
      <>
        <div className="row">
          <div className="col-12 p-0">
            <table className="bayanno-admin-doctor-table-container">
              <thead>
                <tr>
                  <th className="bayanno-admin-doctor-table-header-icon">
                    Image
                  </th>
                  <th className="bayanno-admin-doctor-table-header-name">
                    Name
                  </th>
                  <th className="bayanno-admin-doctor-table-header-email">
                    Email
                  </th>
                  <th className="bayanno-admin-doctor-table-header-phone">
                    Phone
                  </th>
                  <th className="bayanno-admin-doctor-table-header-department">
                    Department
                  </th>
                  <th className="bayanno-admin-doctor-table-header-options">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctorsObject.doctors.map((eachObject) => (
                  <DoctorPageRows
                    key={eachObject._id}
                    eachObject={eachObject}
                    gettingDoctorsList={getDoctorsList}
                    departmentSelectList={departmentsList}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  const renderLoaderView = () => {
    return (
      <div className="bayanno-admin-doctor-table-no-data-view-container pt-4 pb-4">
        <Hourglass
          visible={true}
          height="54"
          width="54"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  };

  const renderFailureView = () => {
    return (
      <div className="bayanno-admin-doctor-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-doctor-table-no-data-view-text">
          Oops! Something Went Wrong.
        </h3>
      </div>
    );
  };

  const checkingWhatToRender = () => {
    switch (doctorsObject.apiStatus) {
      case apiConstants.success:
        return renderDoctorsList();

      case apiConstants.inProgress:
        return renderLoaderView();

      case apiConstants.failure:
        return renderFailureView();

      default:
        return null;
    }
  };

  return (
    <div className="bayanno-admin-doctor-main-container">
      <div className="container-fluid bayanno-admin-height-container-doctor">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container-doctor">
          <div className="col-12 bayanno-admin-height-container-doctor d-flex p-0">
            <AdminSidebar />

            <div className="bayanno-admin-main-content-container-doctor">
              <div className="container-fluid">
                <AdminHeader />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-doctor-main-heading-icon"></i>
                      <h3 className="bayanno-admin-doctor-main-heading-text">
                        Doctor
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-12 text-right">
                    <Popup
                      trigger={
                        <button
                          type="button"
                          className="bayanno-admin-doctor-add-button"
                        >
                          <i class="fa-solid fa-plus bayanno-admin-doctor-add-plus-icon"></i>{" "}
                          Add Doctor
                        </button>
                      }
                      modal="true"
                      className="popup-doctor"
                      onClose={closeAddDoctorPopup}
                    >
                      {(close) => (
                        <div className="bayanno-admin-doctor-add-popup-container">
                          <div className="bayanno-admin-doctor-add-popup-head-container">
                            <h3 className="bayanno-admin-doctor-add-popup-head-name">
                              Bayanno Hospital Management System
                            </h3>
                            <button
                              type="button"
                              className="bayanno-admin-doctor-add-popup-head-close-button"
                              onClick={close}
                            >
                              <i class="fa-solid fa-xmark bayanno-admin-doctor-add-popup-head-cross-icon"></i>
                            </button>
                          </div>
                          <div className="bayanno-admin-doctor-add-popup-content-container">
                            <div className="bayanno-admin-doctor-add-popup-content-card shadow">
                              <h1 className="bayanno-admin-doctor-add-popup-content-heading mt-3">
                                Add Doctor
                              </h1>
                              <form
                                className="d-flex flex-column mt-4 mb-3"
                                onSubmit={submitAddDoctorForm}
                              >
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorNameInput"
                                  >
                                    Name
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Doctor Name"
                                      className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                      id="addDoctorNameInput"
                                      onChange={addDoctorChangeName}
                                      value={addDoctorName.name}
                                    />
                                    <p className="bayanno-admin-doctor-add-popup-required-txt">
                                      {addDoctorName.nameRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorEmailInput"
                                  >
                                    Email
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Email"
                                      className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                      id="addDoctorEmailInput"
                                      onChange={addDoctorChangeEmail}
                                      value={addDoctorEmail.email}
                                    />
                                    <p className="bayanno-admin-doctor-add-popup-required-txt">
                                      {addDoctorEmail.emailRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorPasswordInput"
                                  >
                                    Password
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <input
                                      type="password"
                                      placeholder="Enter Your Password"
                                      className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                      id="addDoctorPasswordInput"
                                      onChange={addDoctorChangePassword}
                                      value={addDoctorPassword.password}
                                    />
                                    <p className="bayanno-admin-doctor-add-popup-required-txt">
                                      {addDoctorPassword.passwordRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorAddressInput"
                                  >
                                    Address
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <textarea
                                      placeholder="Enter Address"
                                      className="bayanno-admin-doctor-add-popup-content-card-des-input"
                                      id="addDoctorAddressInput"
                                      rows={20}
                                      cols={60}
                                      onChange={addDoctorChangeAddress}
                                      value={addDoctorAddress}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorPhoneInput"
                                  >
                                    Phone
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Phone Number"
                                      className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                      id="addDoctorPhoneInput"
                                      onChange={addDoctorChangePhoneNumber}
                                      value={addDoctorPhoneNumber}
                                    />
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorDepartmentInput"
                                  >
                                    Department
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <select
                                      placeholder="Select Department"
                                      className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                      id="addDoctorDepartmentInput"
                                      onChange={addDoctorChangeDepartment}
                                      value={addDoctorDepartment.department}
                                    >
                                      {departmentsList.map((eachObject) => (
                                        <option
                                          key={eachObject._id}
                                          value={eachObject.name}
                                        >
                                          {eachObject.name}
                                        </option>
                                      ))}
                                      {/* <option value={"Anesthetics"}>
                                        Anesthetics
                                      </option>
                                      <option value={"Cardiology"}>
                                        Cardiology
                                      </option>
                                      <option value={"Gastroenterology"}>
                                        Gastroenterology
                                      </option> */}
                                    </select>
                                    <p className="bayanno-admin-doctor-add-popup-required-txt">
                                      {
                                        addDoctorDepartment.departmentRequiredText
                                      }
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-doctor-add-popup-content-card-label mr-3"
                                    htmlFor="addDoctorProfileInput"
                                  >
                                    Profile
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <textarea
                                      placeholder="Enter Profile"
                                      className="bayanno-admin-doctor-add-popup-content-card-des-input"
                                      id="addDoctorProfileInput"
                                      rows={20}
                                      cols={60}
                                      onChange={addDoctorChangeProfileText}
                                      value={addDoctorProfileText}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label className="bayanno-admin-doctor-add-popup-content-card-label mr-3">
                                    Social Links
                                  </label>
                                  <div className="bayanno-admin-doctor-add-popup-content-card-input-container">
                                    <div className="d-flex flex-column w-100 mt-2 mb-3">
                                      <input
                                        type="text"
                                        placeholder="Enter Your Facebook Link"
                                        className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                        name="facebookInput"
                                        onChange={addDoctorChangeFacebookLink}
                                        value={addFacebookLink}
                                      />
                                      <p className="bayanno-admin-doctor-add-popup-social-txt">
                                        Facebook Profile Link
                                      </p>
                                    </div>
                                    <div className="d-flex flex-column w-100 mt-2 mb-3">
                                      <input
                                        type="text"
                                        placeholder="Enter Your Twitter Link"
                                        className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                        name="twitterInput"
                                        onChange={addDoctorChangeTwitterLink}
                                        value={addTwitterLink}
                                      />
                                      <p className="bayanno-admin-doctor-add-popup-social-txt">
                                        Twitter Profile Link
                                      </p>
                                    </div>
                                    <div className="d-flex flex-column w-100 mt-2 mb-3">
                                      <input
                                        type="text"
                                        placeholder="Enter Your Google Plus Link"
                                        className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                        name="googleInput"
                                        onChange={addDoctorChangeGoogleLink}
                                        value={addGoogleLink}
                                      />
                                      <p className="bayanno-admin-doctor-add-popup-social-txt">
                                        Google Plus Profile Link
                                      </p>
                                    </div>
                                    <div className="d-flex flex-column w-100 mt-2 mb-3">
                                      <input
                                        type="text"
                                        placeholder="Enter Your Linkedin Link"
                                        className="bayanno-admin-doctor-add-popup-content-card-name-input"
                                        name="linkedinInput"
                                        onChange={addDoctorChangeLinkedinLink}
                                        value={addLinkedinLink}
                                      />
                                      <p className="bayanno-admin-doctor-add-popup-social-txt">
                                        Linkedin Profile Link
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bayanno-admin-doctor-add-popup-content-card-main-container mt-2 mb-2">
                                  <label className="bayanno-admin-doctor-add-popup-content-card-label mr-3">
                                    Image
                                  </label>
                                  <div>
                                    <img
                                      src={
                                        addDoctorImageToDisplay === ""
                                          ? addProfileImage
                                          : addDoctorImageToDisplay
                                      }
                                      alt="profileImage"
                                      className="bayanno-admin-doctor-add-popup-content-card-image"
                                    />
                                    <p className="bayanno-admin-doctor-add-popup-required-txt">
                                      {addDoctorIcon.iconRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-md-center mt-2 mb-2">
                                  {addDoctorIcon.icon === "" ? (
                                    <label
                                      className="bayanno-admin-doctor-add-popup-content-card-select-image-button"
                                      htmlFor="addDoctorIconInput"
                                    >
                                      Select Image
                                    </label>
                                  ) : (
                                    ""
                                  )}

                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="d-none"
                                    id="addDoctorIconInput"
                                    onChange={addDoctorChangeIcon}
                                  />
                                </div>
                                {addDoctorIcon.icon === "" ? (
                                  ""
                                ) : (
                                  <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                                    <label
                                      className="bayanno-admin-doctor-add-popup-content-card-select-image-button mr-3"
                                      htmlFor="addDoctorIconInput"
                                    >
                                      Change
                                    </label>
                                    <button
                                      className="bayanno-admin-doctor-add-popup-content-card-remove-image-button"
                                      type="button"
                                      onClick={addDoctorRemoveIcon}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}
                                <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                                  <button
                                    className="bayanno-admin-doctor-add-popup-content-card-save-image-button mr-3"
                                    type="submit"
                                  >
                                    <i class="fa-solid fa-check mr-1"></i>
                                    <span className="ml-1">Save</span>
                                  </button>
                                  <p
                                    className={`bayanno-admin-doctor-add-popup-content-card-server-msg ${addDoctorServerMsg.textColor}`}
                                  >
                                    {addDoctorServerMsg.serverMsg}
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="bayanno-admin-doctor-add-popup-content-card-close-button-container">
                            <button
                              className="bayanno-admin-doctor-add-popup-content-card-close-button mr-3"
                              type="button"
                              onClick={close}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-12 mt-3">
                    <div className="bayanno-admin-doctor-table-wrapper">
                      <div className="container-fluid">
                        <div className="row bayanno-admin-doctor-search-pages-container">
                          <div className="col-12 p-0 col-lg-3">
                            <div className="bayanno-admin-doctor-items-per-page-container">
                              <select className="bayanno-admin-doctor-items-select-container">
                                <option value={"10"} selected>
                                  10
                                </option>
                                <option value={"25"}>25</option>
                                <option value={"50"}>50</option>
                                <option value={"100"}>100</option>
                              </select>
                              <label className="bayanno-admin-doctor-items-per-page-text">
                                Per Page
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9 p-0">
                            <div className="d-flex align-items-center p-3 justify-content-lg-end">
                              <div className="bayanno-admin-doctor-print-container mr-3">
                                <div className="bayanno-admin-doctor-print-extensions-container">
                                  <IoExtensionPuzzleSharp className="bayanno-admin-doctor-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-doctor-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-doctor-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-doctor-print-extensions" />
                                </div>
                                <button className="bayanno-admin-doctor-print-button">
                                  Print
                                </button>
                              </div>
                              <div className="ml-3">
                                <input
                                  className="bayanno-admin-doctor-search-bar"
                                  type="search"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {checkingWhatToRender()}
                        <div className="row d-flex align-items-center">
                          <div className="col-12 col-lg-3">
                            <div className="bayanno-admin-doctor-showing-items-container">
                              <span className="bayanno-admin-doctor-showing-items-text">
                                Showing{" "}
                                {doctorsObject.doctors.length >= 1 ? 1 : 0} to{" "}
                                {doctorsObject.doctors.length} of{" "}
                                {doctorsObject.doctors.length}
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9">
                            <div className="bayanno-admin-doctor-pagination-container pt-3">
                              <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                  <li className="page-item">
                                    <a
                                      className="page-link"
                                      href="#1"
                                      aria-label="Previous"
                                    >
                                      <span aria-hidden="true">&laquo;</span>
                                    </a>
                                  </li>
                                  <li className="page-item active">
                                    <a className="page-link" href="#1">
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link"
                                      href="#1"
                                      aria-label="Next"
                                    >
                                      <span aria-hidden="true">&raquo;</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default AdminDoctorPage;
