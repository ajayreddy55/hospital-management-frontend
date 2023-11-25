import AdminFooter from "../../adminfooter";
import AdminHeader from "../../adminheader";
import AdminNavbar from "../../adminnavbar";
import AdminSidebar from "../../adminsidebar";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import Popup from "reactjs-popup";
import addProfileImage from "../../../../assets/add-image-doctor.png";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import "../../admincommoncss/index.css";
import ReceptionistPageRows from "../receptionistpagerows";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminReceptionistPage = () => {
  const [addName, setAddName] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [addEmail, setAddEmail] = useState({
    email: "",
    emailRequiredText: "",
  });

  const [addPassword, setAddPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [addAddress, setAddAddress] = useState("");

  const [addPhoneNumber, setAddPhoneNumber] = useState("");

  const [addIcon, setAddIcon] = useState({
    icon: "",
    iconRequiredText: "",
  });

  const [addImageToDisplay, setAddImageToDisplay] = useState("");

  const [addServerMsg, setAddServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const [receptionistsObject, setReceptionistsObject] = useState({
    receptionists: [],
    apiStatus: apiConstants.initial,
  });

  useEffect(() => {
    getReceptionistsList();
    //eslint-disable-next-line
  }, []);

  const getReceptionistsList = async () => {
    setReceptionistsObject((prevState) => ({
      ...prevState,
      receptionists: [],
      apiStatus: apiConstants.inProgress,
    }));

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
      setReceptionistsObject((prevState) => ({
        ...prevState,
        receptionists: responseListJson.receptionists,
        apiStatus: apiConstants.success,
      }));
    } else {
      setReceptionistsObject((prevState) => ({
        ...prevState,
        receptionists: [],
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const addChangeName = (event) => {
    const nameInput = event.target.value;

    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setAddName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setAddName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const addChangeEmail = (event) => {
    const emailInput = event.target.value;

    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (emailInput === "") {
      setAddEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      setAddEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const addChangePassword = (event) => {
    const passwordInput = event.target.value;

    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (passwordInput === "") {
      setAddPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else {
      setAddPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const addChangeAddress = (event) => {
    const addressInput = event.target.value;

    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddAddress(addressInput);
  };

  const addChangePhoneNumber = (event) => {
    const phoneNumberInput = event.target.value;

    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setAddPhoneNumber(phoneNumberInput);
  };

  const addChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setAddImageToDisplay("");
      setAddIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setAddImageToDisplay(imageUrl);

      setAddIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const addRemoveIcon = () => {
    const input = document.getElementById("addReceptionistIconInput");
    input.value = null;
    setAddImageToDisplay("");
    setAddIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "*Required",
    }));
  };

  const addDetailsInDatabase = async (image) => {
    const url = "http://localhost:5000/api/adding-receptionist";
    const jwtToken = Cookies.get("hospital-jwt-token");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: addName.name,
        email: addEmail.email,
        password: addPassword.password,
        address: addAddress,
        phoneNumber: addPhoneNumber,
        profileImage: image,
      }),
    };

    const responseObject = await fetch(url, options);

    if (responseObject.ok) {
      const responseObjectJson = await responseObject.json();
      setAddServerMsg((prevState) => ({
        ...prevState,
        serverMsg: responseObjectJson.message,
        textColor:
          "bayanno-admin-nplar-add-popup-content-card-server-msg-success",
      }));
      setAddName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setAddEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "",
      }));
      setAddPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "",
      }));
      setAddAddress("");
      setAddPhoneNumber("");
      const inputIcon = document.getElementById("addReceptionistIconInput");
      inputIcon.value = null;
      setAddImageToDisplay("");
      setAddIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "",
      }));
      getReceptionistsList();
    } else {
      const responseObjectJson = await responseObject.json();
      setAddServerMsg((prevState) => ({
        ...prevState,
        serverMsg: responseObjectJson.message,
        textColor: "",
      }));
    }
  };

  const addNewDetailsInServer = () => {
    const jwtToken = Cookies.get("hospital-jwt-token");
    const formData = new FormData();
    formData.append("file", addIcon.icon);
    axios
      .post("http://localhost:5000/upload/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        addDetailsInDatabase(response.data.filename);
      })
      .catch((error) => console.log(error));
  };

  const validateAddForm = () => {
    if (addName.name === "") {
      setAddName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (addEmail.email === "") {
      setAddEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else if (addPassword.password === "") {
      setAddPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (addIcon.icon === "") {
      setAddImageToDisplay("");
      setAddIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      addNewDetailsInServer();
    }
  };

  const submitAddForm = (event) => {
    event.preventDefault();
    validateAddForm();
  };

  const closeAddPopup = () => {
    setAddServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));
    setAddName((prevState) => ({
      ...prevState,
      name: "",
      nameRequiredText: "",
    }));
    setAddEmail((prevState) => ({
      ...prevState,
      email: "",
      emailRequiredText: "",
    }));
    setAddPassword((prevState) => ({
      ...prevState,
      password: "",
      passwordRequiredText: "",
    }));
    setAddAddress("");
    setAddPhoneNumber("");
    setAddImageToDisplay("");
    setAddIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "",
    }));
  };

  const noDataView = () => {
    return (
      <div className="bayanno-admin-nplar-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-nplar-table-no-data-view-text">
          No Data Found
        </h3>
      </div>
    );
  };

  const renderListDataView = () => {
    if (receptionistsObject.receptionists.length === 0) {
      return noDataView();
    }

    return (
      <>
        <div className="row">
          <div className="col-12 p-0">
            <table className="bayanno-admin-nplar-table-container">
              <thead>
                <tr>
                  <th className="bayanno-admin-nplar-table-header-icon">
                    Image
                  </th>
                  <th className="bayanno-admin-nplar-table-header-name">
                    Name
                  </th>
                  <th className="bayanno-admin-nplar-table-header-email">
                    Email
                  </th>
                  <th className="bayanno-admin-nplar-table-header-address">
                    Address
                  </th>
                  <th className="bayanno-admin-nplar-table-header-phone">
                    Phone
                  </th>
                  <th className="bayanno-admin-nplar-table-header-options">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {receptionistsObject.receptionists.map((eachObject) => (
                  <ReceptionistPageRows
                    key={eachObject._id}
                    eachObject={eachObject}
                    gettingReceptionistsList={getReceptionistsList}
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
      <div className="bayanno-admin-nplar-table-no-data-view-container pt-4 pb-4">
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
      <div className="bayanno-admin-nplar-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-nplar-table-no-data-view-text">
          Oops! Something Went Wrong.
        </h3>
      </div>
    );
  };

  const checkingWhatToRender = () => {
    switch (receptionistsObject.apiStatus) {
      case apiConstants.success:
        return renderListDataView();

      case apiConstants.inProgress:
        return renderLoaderView();

      case apiConstants.failure:
        return renderFailureView();

      default:
        return null;
    }
  };

  return (
    <div className="bayanno-admin-nplar-main-container">
      <div className="container-fluid bayanno-admin-height-container-nplar">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container-nplar">
          <div className="col-12 bayanno-admin-height-container-nplar d-flex p-0">
            <AdminSidebar />

            <div className="bayanno-admin-main-content-container-nplar">
              <div className="container-fluid">
                <AdminHeader />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-nplar-main-heading-icon"></i>
                      <h3 className="bayanno-admin-nplar-main-heading-text">
                        Receptionist
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
                          className="bayanno-admin-nplar-add-button"
                        >
                          <i class="fa-solid fa-plus bayanno-admin-nplar-add-plus-icon"></i>{" "}
                          Add Receptionist
                        </button>
                      }
                      modal="true"
                      className="popup-nplar"
                      onClose={closeAddPopup}
                    >
                      {(close) => (
                        <div className="bayanno-admin-nplar-add-popup-container">
                          <div className="bayanno-admin-nplar-add-popup-head-container">
                            <h3 className="bayanno-admin-nplar-add-popup-head-name">
                              Bayanno Hospital Management System
                            </h3>
                            <button
                              type="button"
                              className="bayanno-admin-nplar-add-popup-head-close-button"
                              onClick={close}
                            >
                              <i class="fa-solid fa-xmark bayanno-admin-nplar-add-popup-head-cross-icon"></i>
                            </button>
                          </div>
                          <div className="bayanno-admin-nplar-add-popup-content-container">
                            <div className="bayanno-admin-nplar-add-popup-content-card shadow">
                              <h1 className="bayanno-admin-nplar-add-popup-content-heading mt-3">
                                Add Receptionist
                              </h1>
                              <form
                                className="d-flex flex-column mt-4 mb-3"
                                onSubmit={submitAddForm}
                              >
                                <div className="bayanno-admin-nplar-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-nplar-add-popup-content-card-label mr-3"
                                    htmlFor="addReceptionistNameInput"
                                  >
                                    Name
                                  </label>
                                  <div className="bayanno-admin-nplar-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Name"
                                      className="bayanno-admin-nplar-add-popup-content-card-name-input"
                                      id="addReceptionistNameInput"
                                      onChange={addChangeName}
                                      value={addName.name}
                                    />
                                    <p className="bayanno-admin-nplar-add-popup-required-txt">
                                      {addName.nameRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-nplar-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-nplar-add-popup-content-card-label mr-3"
                                    htmlFor="addReceptionistEmailInput"
                                  >
                                    Email
                                  </label>
                                  <div className="bayanno-admin-nplar-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Email"
                                      className="bayanno-admin-nplar-add-popup-content-card-name-input"
                                      id="addReceptionistEmailInput"
                                      onChange={addChangeEmail}
                                      value={addEmail.email}
                                    />
                                    <p className="bayanno-admin-nplar-add-popup-required-txt">
                                      {addEmail.emailRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-nplar-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-nplar-add-popup-content-card-label mr-3"
                                    htmlFor="addReceptionistPasswordInput"
                                  >
                                    Password
                                  </label>
                                  <div className="bayanno-admin-nplar-add-popup-content-card-input-container">
                                    <input
                                      type="password"
                                      placeholder="Enter Your Password"
                                      className="bayanno-admin-nplar-add-popup-content-card-name-input"
                                      id="addReceptionistPasswordInput"
                                      onChange={addChangePassword}
                                      value={addPassword.password}
                                    />
                                    <p className="bayanno-admin-nplar-add-popup-required-txt">
                                      {addPassword.passwordRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-nplar-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-nplar-add-popup-content-card-label mr-3"
                                    htmlFor="addReceptionistAddressInput"
                                  >
                                    Address
                                  </label>
                                  <div className="bayanno-admin-nplar-add-popup-content-card-input-container">
                                    <textarea
                                      placeholder="Enter Address"
                                      className="bayanno-admin-nplar-add-popup-content-card-des-input"
                                      id="addReceptionistAddressInput"
                                      rows={20}
                                      cols={60}
                                      onChange={addChangeAddress}
                                      value={addAddress}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="bayanno-admin-nplar-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-nplar-add-popup-content-card-label mr-3"
                                    htmlFor="addReceptionistPhoneInput"
                                  >
                                    Phone
                                  </label>
                                  <div className="bayanno-admin-nplar-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Phone Number"
                                      className="bayanno-admin-nplar-add-popup-content-card-name-input"
                                      id="addReceptionistPhoneInput"
                                      onChange={addChangePhoneNumber}
                                      value={addPhoneNumber}
                                    />
                                  </div>
                                </div>
                                <div className="bayanno-admin-nplar-add-popup-content-card-main-container mt-2 mb-2">
                                  <label className="bayanno-admin-nplar-add-popup-content-card-label mr-3">
                                    Image
                                  </label>
                                  <div>
                                    <img
                                      src={
                                        addImageToDisplay === ""
                                          ? addProfileImage
                                          : addImageToDisplay
                                      }
                                      alt="profileImage"
                                      className="bayanno-admin-nplar-add-popup-content-card-image"
                                    />
                                    <p className="bayanno-admin-nplar-add-popup-required-txt">
                                      {addIcon.iconRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-md-center mt-2 mb-2">
                                  {addIcon.icon === "" ? (
                                    <label
                                      className="bayanno-admin-nplar-add-popup-content-card-select-image-button"
                                      htmlFor="addReceptionistIconInput"
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
                                    id="addReceptionistIconInput"
                                    onChange={addChangeIcon}
                                  />
                                </div>
                                {addIcon.icon === "" ? (
                                  ""
                                ) : (
                                  <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                                    <label
                                      className="bayanno-admin-nplar-add-popup-content-card-select-image-button mr-3"
                                      htmlFor="addReceptionistIconInput"
                                    >
                                      Change
                                    </label>
                                    <button
                                      className="bayanno-admin-nplar-add-popup-content-card-remove-image-button"
                                      type="button"
                                      onClick={addRemoveIcon}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}
                                <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                                  <button
                                    className="bayanno-admin-nplar-add-popup-content-card-save-image-button mr-3"
                                    type="submit"
                                  >
                                    <i class="fa-solid fa-check mr-1"></i>
                                    <span className="ml-1">Save</span>
                                  </button>
                                  <p
                                    className={`bayanno-admin-nplar-add-popup-content-card-server-msg ${addServerMsg.textColor}`}
                                  >
                                    {addServerMsg.serverMsg}
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="bayanno-admin-nplar-add-popup-content-card-close-button-container">
                            <button
                              className="bayanno-admin-nplar-add-popup-content-card-close-button mr-3"
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
                    <div className="bayanno-admin-nplar-table-wrapper">
                      <div className="container-fluid">
                        <div className="row bayanno-admin-nplar-search-pages-container">
                          <div className="col-12 p-0 col-lg-3">
                            <div className="bayanno-admin-nplar-items-per-page-container">
                              <select className="bayanno-admin-nplar-items-select-container">
                                <option value={"10"} selected>
                                  10
                                </option>
                                <option value={"25"}>25</option>
                                <option value={"50"}>50</option>
                                <option value={"100"}>100</option>
                              </select>
                              <label className="bayanno-admin-nplar-items-per-page-text">
                                Per Page
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9 p-0">
                            <div className="d-flex align-items-center p-3 justify-content-lg-end">
                              <div className="bayanno-admin-nplar-print-container mr-3">
                                <div className="bayanno-admin-nplar-print-extensions-container">
                                  <IoExtensionPuzzleSharp className="bayanno-admin-nplar-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-nplar-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-nplar-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-nplar-print-extensions" />
                                </div>
                                <button className="bayanno-admin-nplar-print-button">
                                  Print
                                </button>
                              </div>
                              <div className="ml-3">
                                <input
                                  className="bayanno-admin-nplar-search-bar"
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
                            <div className="bayanno-admin-nplar-showing-items-container">
                              <span className="bayanno-admin-nplar-showing-items-text">
                                Showing{" "}
                                {receptionistsObject.receptionists.length >= 1
                                  ? 1
                                  : 0}{" "}
                                to {receptionistsObject.receptionists.length} of{" "}
                                {receptionistsObject.receptionists.length}
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9">
                            <div className="bayanno-admin-nplar-pagination-container pt-3">
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

export default AdminReceptionistPage;
