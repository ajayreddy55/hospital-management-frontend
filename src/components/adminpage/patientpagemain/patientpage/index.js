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
import PatientPageRows from "../patientpagerows";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminPatientPage = () => {
  const [addPatientName, setAddPatientName] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [addPatientEmail, setAddPatientEmail] = useState({
    email: "",
    emailRequiredText: "",
  });

  const [addPatientPassword, setAddPatientPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [addPatientAddress, setAddPatientAddress] = useState("");

  const [addPatientPhoneNumber, setAddPatientPhoneNumber] = useState("");

  const [addPatientGender, setAddPatientGender] = useState({
    gender: "",
    genderRequiredText: "",
  });

  const [addPatientBirthDate, setAddPatientBirthDate] = useState("");

  const [addPatientAge, setAddPatientAge] = useState("");
  const [addPatientBloodGroup, setAddPatientBloodGroup] = useState("");

  const [addPatientIcon, setAddPatientIcon] = useState({
    icon: "",
    iconRequiredText: "",
  });

  const [addPatientImageToDisplay, setAddPatientImageToDisplay] = useState("");

  const [addPatientServerMsg, setAddPatientServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const [patientsObject, setPatientsObject] = useState({
    patients: [],
    apiStatus: apiConstants.initial,
  });

  const [searchInput, setSearchInput] = useState("");
  const [limitRowsValue, setLimitRowsValue] = useState(10);

  useEffect(() => {
    getPatientsList();
    //eslint-disable-next-line
  }, [searchInput, limitRowsValue]);

  const getPatientsList = async () => {
    setPatientsObject((prevState) => ({
      ...prevState,
      patients: [],
      apiStatus: apiConstants.inProgress,
    }));

    const url = `http://localhost:5000/api/get-all-patients?search=${searchInput}&limit=${limitRowsValue}`;
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
      setPatientsObject((prevState) => ({
        ...prevState,
        patients: patientsResJson.patients,
        apiStatus: apiConstants.success,
      }));
    } else {
      setPatientsObject((prevState) => ({
        ...prevState,
        patients: [],
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const addPatientChangeName = (event) => {
    const nameInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setAddPatientName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setAddPatientName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const addPatientChangeEmail = (event) => {
    const emailInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (emailInput === "") {
      setAddPatientEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      setAddPatientEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const addPatientChangePassword = (event) => {
    const passwordInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (passwordInput === "") {
      setAddPatientPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else {
      setAddPatientPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const addPatientChangeAddress = (event) => {
    const addressInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddPatientAddress(addressInput);
  };

  const addPatientChangePhoneNumber = (event) => {
    const phoneNumberInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddPatientPhoneNumber(phoneNumberInput);
  };

  const addPatientChangeGender = (event) => {
    const genderInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (genderInput === "") {
      setAddPatientGender((prevState) => ({
        ...prevState,
        gender: "",
        genderRequiredText: "*Required",
      }));
    } else {
      setAddPatientGender((prevState) => ({
        ...prevState,
        gender: genderInput,
        genderRequiredText: "",
      }));
    }
  };

  const addPatientChangeBirthDate = (event) => {
    const dateInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddPatientBirthDate(dateInput);
  };

  const addPatientChangeAge = (event) => {
    const ageInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddPatientAge(ageInput);
  };

  const addPatientChangeBloodGroup = (event) => {
    const bloodGroupInput = event.target.value;

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddPatientBloodGroup(bloodGroupInput);
  };

  const addPatientChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setAddPatientImageToDisplay("");
      setAddPatientIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setAddPatientImageToDisplay(imageUrl);

      setAddPatientIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const addPatientRemoveIcon = () => {
    const input = document.getElementById("addPatientIconInput");
    input.value = null;
    setAddPatientImageToDisplay("");
    setAddPatientIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "*Required",
    }));
  };

  const addPatientDatabase = async (image) => {
    const url = "http://localhost:5000/api/add-patient";
    const jwtToken = Cookies.get("hospital-jwt-token");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: addPatientName.name,
        email: addPatientEmail.email,
        password: addPatientPassword.password,
        address: addPatientAddress,
        phoneNumber: addPatientPhoneNumber,
        gender: addPatientGender.gender,
        birthDate: addPatientBirthDate,
        age: addPatientAge,
        bloodGroup: addPatientBloodGroup,
        profileImage: image,
      }),
    };

    const patientsRes = await fetch(url, options);

    if (patientsRes.ok) {
      const patientsResJson = await patientsRes.json();
      setAddPatientServerMsg((prevState) => ({
        ...prevState,
        serverMsg: patientsResJson.message,
        textColor:
          "bayanno-admin-patient-add-popup-content-card-server-msg-success",
      }));
      setAddPatientName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setAddPatientEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "",
      }));
      setAddPatientPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "",
      }));
      setAddPatientAddress("");
      setAddPatientPhoneNumber("");
      setAddPatientGender((prevState) => ({
        ...prevState,
        gender: "",
        genderRequiredText: "",
      }));
      setAddPatientBirthDate("");
      setAddPatientAge("");
      setAddPatientBloodGroup("");
      const inputIcon = document.getElementById("addPatientIconInput");
      inputIcon.value = null;
      setAddPatientImageToDisplay("");
      setAddPatientIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "",
      }));
      getPatientsList();
    } else {
      const patientsResJson = await patientsRes.json();
      setAddPatientServerMsg((prevState) => ({
        ...prevState,
        serverMsg: patientsResJson.message,
        textColor: "",
      }));
    }
  };

  const addNewPatientInServer = () => {
    const jwtToken = Cookies.get("hospital-jwt-token");
    const formData = new FormData();
    formData.append("file", addPatientIcon.icon);
    axios
      .post("http://localhost:5000/upload/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        addPatientDatabase(response.data.filename);
      })
      .catch((error) => console.log(error));
  };

  const validateAddPatientForm = () => {
    if (addPatientName.name === "") {
      setAddPatientName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (addPatientEmail.email === "") {
      setAddPatientEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else if (addPatientPassword.password === "") {
      setAddPatientPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (addPatientGender.gender === "") {
      setAddPatientGender((prevState) => ({
        ...prevState,
        gender: "",
        genderRequiredText: "*Required",
      }));
    } else if (addPatientIcon.icon === "") {
      setAddPatientImageToDisplay("");
      setAddPatientIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      addNewPatientInServer();
    }
  };

  const submitAddPatientForm = (event) => {
    event.preventDefault();
    validateAddPatientForm();
  };

  const closeAddPatientPopup = () => {
    setAddPatientServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));
    setAddPatientName((prevState) => ({
      ...prevState,
      name: "",
      nameRequiredText: "",
    }));
    setAddPatientEmail((prevState) => ({
      ...prevState,
      email: "",
      emailRequiredText: "",
    }));
    setAddPatientPassword((prevState) => ({
      ...prevState,
      password: "",
      passwordRequiredText: "",
    }));
    setAddPatientAddress("");
    setAddPatientPhoneNumber("");
    setAddPatientGender((prevState) => ({
      ...prevState,
      gender: "",
      genderRequiredText: "",
    }));
    setAddPatientBirthDate("");
    setAddPatientAge("");
    setAddPatientBloodGroup("");
    setAddPatientImageToDisplay("");
    setAddPatientIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "",
    }));
  };

  const noDataView = () => {
    return (
      <div className="bayanno-admin-patient-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-patient-table-no-data-view-text">
          No Data Found
        </h3>
      </div>
    );
  };

  const renderPatientsList = () => {
    if (patientsObject.patients.length === 0) {
      return noDataView();
    }

    return (
      <>
        <div className="row">
          <div className="col-12 p-0">
            <table className="bayanno-admin-patient-table-container">
              <thead>
                <tr>
                  <th className="bayanno-admin-patient-table-header-icon">
                    Image
                  </th>
                  <th className="bayanno-admin-patient-table-header-name">
                    Name
                  </th>
                  <th className="bayanno-admin-patient-table-header-email">
                    Email
                  </th>
                  <th className="bayanno-admin-patient-table-header-phone">
                    Phone
                  </th>
                  <th className="bayanno-admin-patient-table-header-sex">
                    Sex
                  </th>
                  <th className="bayanno-admin-patient-table-header-birth">
                    Birth Date
                  </th>
                  <th className="bayanno-admin-patient-table-header-age">
                    Age
                  </th>
                  <th className="bayanno-admin-patient-table-header-blood">
                    Blood Group
                  </th>
                  <th className="bayanno-admin-patient-table-header-options">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {patientsObject.patients.map((eachObject) => (
                  <PatientPageRows
                    key={eachObject._id}
                    eachObject={eachObject}
                    gettingPatientsList={getPatientsList}
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
      <div className="bayanno-admin-patient-table-no-data-view-container pt-4 pb-4">
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
      <div className="bayanno-admin-patient-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-patient-table-no-data-view-text">
          Oops! Something Went Wrong.
        </h3>
      </div>
    );
  };

  const checkingWhatToRender = () => {
    switch (patientsObject.apiStatus) {
      case apiConstants.success:
        return renderPatientsList();

      case apiConstants.inProgress:
        return renderLoaderView();

      case apiConstants.failure:
        return renderFailureView();

      default:
        return null;
    }
  };

  const changeLimitRowsValue = (event) => {
    setLimitRowsValue(event.target.value);
  };

  const changeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="bayanno-admin-patient-main-container">
      <div className="container-fluid bayanno-admin-height-container-patient">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container-patient">
          <div className="col-12 bayanno-admin-height-container-patient d-flex p-0">
            <AdminSidebar />

            <div className="bayanno-admin-main-content-container-patient">
              <div className="container-fluid">
                <AdminHeader />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-patient-main-heading-icon"></i>
                      <h3 className="bayanno-admin-patient-main-heading-text">
                        Patient
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
                          className="bayanno-admin-patient-add-button"
                        >
                          <i class="fa-solid fa-plus bayanno-admin-patient-add-plus-icon"></i>{" "}
                          Add Patient
                        </button>
                      }
                      modal="true"
                      className="popup-patient"
                      onClose={closeAddPatientPopup}
                    >
                      {(close) => (
                        <div className="bayanno-admin-patient-add-popup-container">
                          <div className="bayanno-admin-patient-add-popup-head-container">
                            <h3 className="bayanno-admin-patient-add-popup-head-name">
                              Bayanno Hospital Management System
                            </h3>
                            <button
                              type="button"
                              className="bayanno-admin-patient-add-popup-head-close-button"
                              onClick={close}
                            >
                              <i class="fa-solid fa-xmark bayanno-admin-patient-add-popup-head-cross-icon"></i>
                            </button>
                          </div>
                          <div className="bayanno-admin-patient-add-popup-content-container">
                            <div className="bayanno-admin-patient-add-popup-content-card shadow">
                              <h1 className="bayanno-admin-patient-add-popup-content-heading mt-3">
                                Add Patient
                              </h1>
                              <form
                                className="d-flex flex-column mt-4 mb-3"
                                onSubmit={submitAddPatientForm}
                              >
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientNameInput"
                                  >
                                    Name
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Patient Name"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientNameInput"
                                      onChange={addPatientChangeName}
                                      value={addPatientName.name}
                                    />
                                    <p className="bayanno-admin-patient-add-popup-required-txt">
                                      {addPatientName.nameRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientEmailInput"
                                  >
                                    Email
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Email"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientEmailInput"
                                      onChange={addPatientChangeEmail}
                                      value={addPatientEmail.email}
                                    />
                                    <p className="bayanno-admin-patient-add-popup-required-txt">
                                      {addPatientEmail.emailRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientPasswordInput"
                                  >
                                    Password
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <input
                                      type="password"
                                      placeholder="Enter Your Password"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientPasswordInput"
                                      onChange={addPatientChangePassword}
                                      value={addPatientPassword.password}
                                    />
                                    <p className="bayanno-admin-patient-add-popup-required-txt">
                                      {addPatientPassword.passwordRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientAddressInput"
                                  >
                                    Address
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <textarea
                                      placeholder="Enter Address"
                                      className="bayanno-admin-patient-add-popup-content-card-des-input"
                                      id="addPatientAddressInput"
                                      rows={20}
                                      cols={60}
                                      onChange={addPatientChangeAddress}
                                      value={addPatientAddress}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientPhoneInput"
                                  >
                                    Phone
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Phone Number"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientPhoneInput"
                                      onChange={addPatientChangePhoneNumber}
                                      value={addPatientPhoneNumber}
                                    />
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientGenderInput"
                                  >
                                    Sex
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <select
                                      placeholder="Select Gender"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientGenderInput"
                                      onChange={addPatientChangeGender}
                                      value={addPatientGender.gender}
                                    >
                                      <option value={"Male"}>Male</option>
                                      <option value={"Female"}>Female</option>
                                    </select>
                                    <p className="bayanno-admin-patient-add-popup-required-txt">
                                      {addPatientGender.genderRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientBirthDateInput"
                                  >
                                    Birth Date
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <input
                                      type="date"
                                      placeholder="Enter Birth Date"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientBirthDateInput"
                                      onChange={addPatientChangeBirthDate}
                                      value={addPatientBirthDate}
                                    />
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    id="addPatientAgeInput"
                                  >
                                    Age
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <div className="d-flex flex-column w-100 mt-2 mb-3">
                                      <input
                                        type="number"
                                        placeholder="Enter Your Age"
                                        className="bayanno-admin-patient-add-popup-content-card-name-input"
                                        id="addPatientAgeInput"
                                        onChange={addPatientChangeAge}
                                        value={addPatientAge}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-patient-add-popup-content-card-label mr-3"
                                    htmlFor="addPatientBloodGroupInput"
                                  >
                                    Blood Group
                                  </label>
                                  <div className="bayanno-admin-patient-add-popup-content-card-input-container">
                                    <select
                                      placeholder="Select Blood Group"
                                      className="bayanno-admin-patient-add-popup-content-card-name-input"
                                      id="addPatientBloodGroupInput"
                                      onChange={addPatientChangeBloodGroup}
                                      value={addPatientBloodGroup}
                                    >
                                      <option value={"A+"}>A+</option>
                                      <option value={"A-"}>A-</option>
                                      <option value={"B+"}>B+</option>
                                      <option value={"B-"}>B-</option>
                                      <option value={"AB+"}>AB+</option>
                                      <option value={"AB-"}>AB-</option>
                                      <option value={"O+"}>O+</option>
                                      <option value={"O-"}>O-</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="bayanno-admin-patient-add-popup-content-card-main-container mt-2 mb-2">
                                  <label className="bayanno-admin-patient-add-popup-content-card-label mr-3">
                                    Image
                                  </label>
                                  <div>
                                    <img
                                      src={
                                        addPatientImageToDisplay === ""
                                          ? addProfileImage
                                          : addPatientImageToDisplay
                                      }
                                      alt="profileImage"
                                      className="bayanno-admin-patient-add-popup-content-card-image"
                                    />
                                    <p className="bayanno-admin-patient-add-popup-required-txt">
                                      {addPatientIcon.iconRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-md-center mt-2 mb-2">
                                  {addPatientIcon.icon === "" ? (
                                    <label
                                      className="bayanno-admin-patient-add-popup-content-card-select-image-button"
                                      htmlFor="addPatientIconInput"
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
                                    id="addPatientIconInput"
                                    onChange={addPatientChangeIcon}
                                  />
                                </div>
                                {addPatientIcon.icon === "" ? (
                                  ""
                                ) : (
                                  <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                                    <label
                                      className="bayanno-admin-patient-add-popup-content-card-select-image-button mr-3"
                                      htmlFor="addPatientIconInput"
                                    >
                                      Change
                                    </label>
                                    <button
                                      className="bayanno-admin-patient-add-popup-content-card-remove-image-button"
                                      type="button"
                                      onClick={addPatientRemoveIcon}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}
                                <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                                  <button
                                    className="bayanno-admin-patient-add-popup-content-card-save-image-button mr-3"
                                    type="submit"
                                  >
                                    <i class="fa-solid fa-check mr-1"></i>
                                    <span className="ml-1">Save</span>
                                  </button>
                                  <p
                                    className={`bayanno-admin-patient-add-popup-content-card-server-msg ${addPatientServerMsg.textColor}`}
                                  >
                                    {addPatientServerMsg.serverMsg}
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="bayanno-admin-patient-add-popup-content-card-close-button-container">
                            <button
                              className="bayanno-admin-patient-add-popup-content-card-close-button mr-3"
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
                    <div className="bayanno-admin-patient-table-wrapper">
                      <div className="container-fluid">
                        <div className="row bayanno-admin-patient-search-pages-container">
                          <div className="col-12 p-0 col-lg-3">
                            <div className="bayanno-admin-patient-items-per-page-container">
                              <select
                                className="bayanno-admin-patient-items-select-container"
                                value={limitRowsValue}
                                onChange={changeLimitRowsValue}
                              >
                                <option value={"10"} selected>
                                  10
                                </option>
                                <option value={"25"}>25</option>
                                <option value={"50"}>50</option>
                                <option value={"100"}>100</option>
                              </select>
                              <label className="bayanno-admin-patient-items-per-page-text">
                                Per Page
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9 p-0">
                            <div className="d-flex align-items-center p-3 justify-content-lg-end">
                              <div className="bayanno-admin-patient-print-container mr-3">
                                <div className="bayanno-admin-patient-print-extensions-container">
                                  <IoExtensionPuzzleSharp className="bayanno-admin-patient-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-patient-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-patient-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-patient-print-extensions" />
                                </div>
                                <button className="bayanno-admin-patient-print-button">
                                  Print
                                </button>
                              </div>
                              <div className="ml-3">
                                <input
                                  className="bayanno-admin-patient-search-bar"
                                  type="search"
                                  placeholder="Search"
                                  value={searchInput}
                                  onChange={changeSearchInput}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {checkingWhatToRender()}
                        <div className="row d-flex align-items-center">
                          <div className="col-12 col-lg-3">
                            <div className="bayanno-admin-patient-showing-items-container">
                              <span className="bayanno-admin-patient-showing-items-text">
                                Showing{" "}
                                {patientsObject.patients.length >= 1 ? 1 : 0} to{" "}
                                {patientsObject.patients.length} of{" "}
                                {patientsObject.patients.length}
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9">
                            <div className="bayanno-admin-patient-pagination-container pt-3">
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

export default AdminPatientPage;
