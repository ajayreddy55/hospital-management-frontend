import AdminFooter from "../adminfooter";
import AdminHeader from "../adminheader";
import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "../admincommoncss/index.css";
import "./index.css";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminAccountPage = () => {
  const [editName, setEditName] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [editEmail, setEditEmail] = useState({
    email: "",
    emailRequiredText: "",
  });

  const [oldPassword, setOldPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [newPassword, setNewPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [confirmNewPassword, setConfirmNewPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });

  const [editServerMsgDetails, setEditServerMsgDetails] = useState({
    serverMsg: "",
    textColor: "",
  });

  //eslint-disable-next-line
  const [adminDetailsObject, setAdminDetailsObject] = useState({
    adminDetails: {},
    apiStatus: apiConstants.initial,
  });

  const [passwordServerMsg, setPasswordServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  useEffect(() => {
    getAdminDetails();
    //eslint-disable-next-line
  }, []);

  const getAdminDetails = async () => {
    setAdminDetailsObject((prevState) => ({
      ...prevState,
      adminDetails: {},
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
      setAdminDetailsObject((prevState) => ({
        ...prevState,
        adminDetailsObject: responseObjectJson.userDetails,
        apiStatus: apiConstants.success,
      }));
      setEditName((prevState) => ({
        ...prevState,
        name: responseObjectJson.userDetails.name,
        nameRequiredText: "",
      }));
      setEditEmail((prevState) => ({
        ...prevState,
        email: responseObjectJson.userDetails.email,
        emailRequiredText: "",
      }));
    } else {
      setAdminDetailsObject((prevState) => ({
        ...prevState,
        adminDetails: {},
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const editChangeName = (event) => {
    const nameInput = event.target.value;

    setEditServerMsgDetails((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setPasswordServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setEditName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setEditName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const editChangeEmail = (event) => {
    const emailInput = event.target.value;

    setEditServerMsgDetails((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setPasswordServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (emailInput === "") {
      setEditEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      setEditEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const oldPasswordChange = (event) => {
    const passwordInput = event.target.value;

    setEditServerMsgDetails((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setPasswordServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (passwordInput === "") {
      setOldPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else {
      setOldPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const newPasswordChange = (event) => {
    const passwordInput = event.target.value;

    setEditServerMsgDetails((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setPasswordServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (passwordInput === "") {
      setNewPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else {
      setNewPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const confirmNewPasswordChange = (event) => {
    const passwordInput = event.target.value;

    setEditServerMsgDetails((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setPasswordServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (passwordInput === "") {
      setConfirmNewPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (newPassword.password !== passwordInput) {
      setConfirmNewPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "Confirm Password must be same as New Password",
      }));
    } else {
      setConfirmNewPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };

  const modifyProfileInServer = async () => {
    const url = "http://localhost:5000/auth/update-details";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: editName.name,
        email: editEmail.email,
      }),
    };

    const profileRes = await fetch(url, options);

    if (profileRes.ok) {
      const profileResJson = await profileRes.json();
      setEditServerMsgDetails((prevState) => ({
        serverMsg: profileResJson.message,
        textColor: "bayanno-admin-account-profile-server-msg-success",
      }));
      getAdminDetails();
    } else {
      const profileResJson = await profileRes.json();
      setEditServerMsgDetails((prevState) => ({
        serverMsg: profileResJson.message,
        textColor: "",
      }));
    }
  };

  const validateEditProfileForm = () => {
    if (editName.name === "") {
      setEditName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (editEmail.email === "") {
      setEditEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      modifyProfileInServer();
    }
  };

  const submitEditProfileForm = (event) => {
    event.preventDefault();
    validateEditProfileForm();
  };

  const modifyPasswordInDatabase = async () => {
    const url = "http://localhost:5000/auth/update-password";
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        oldPassword: oldPassword.password,
        newPassword: newPassword.password,
      }),
    };

    const updateRes = await fetch(url, options);

    if (updateRes.ok) {
      const updateResJson = await updateRes.json();
      setPasswordServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updateResJson.message,
        textColor: "bayanno-admin-account-profile-server-msg-success",
      }));
      setOldPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "",
      }));
      setNewPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "",
      }));
      setConfirmNewPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "",
      }));
    } else {
      const updateResJson = await updateRes.json();
      setPasswordServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updateResJson.message,
        textColor: "",
      }));
    }
  };

  const validateEditPasswordForm = () => {
    if (oldPassword.password === "") {
      setOldPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (newPassword.password === "") {
      setNewPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (confirmNewPassword.password === "") {
      setConfirmNewPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "*Required",
      }));
    } else if (confirmNewPassword.password !== newPassword.password) {
      setConfirmNewPassword((prevState) => ({
        ...prevState,
        passwordRequiredText: "Confirm Password must be same as New Password",
      }));
    } else {
      modifyPasswordInDatabase();
    }
  };

  const submitEditPasswordForm = (event) => {
    event.preventDefault();
    validateEditPasswordForm();
  };

  return (
    <div className="bayanno-admin-nplar-main-container">
      <div className="container-fluid bayanno-admin-height-container-nplar">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar
              userName={
                adminDetailsObject.apiStatus === apiConstants.success
                  ? adminDetailsObject.adminDetails.name
                  : ""
              }
              userEmail={
                adminDetailsObject.apiStatus === apiConstants.success
                  ? adminDetailsObject.adminDetails.email
                  : ""
              }
            />
          </div>
        </div>
        <div className="row bayanno-admin-height-container-nplar">
          <div className="col-12 bayanno-admin-height-container-nplar d-flex p-0">
            <AdminSidebar
              userName={
                adminDetailsObject.apiStatus === apiConstants.success
                  ? adminDetailsObject.adminDetails.name
                  : ""
              }
              userEmail={
                adminDetailsObject.apiStatus === apiConstants.success
                  ? adminDetailsObject.adminDetails.email
                  : ""
              }
            />

            <div className="bayanno-admin-main-content-container-nplar">
              <div className="container-fluid">
                <AdminHeader
                  userName={
                    adminDetailsObject.apiStatus === apiConstants.success
                      ? adminDetailsObject.adminDetails.name
                      : ""
                  }
                  userEmail={
                    adminDetailsObject.apiStatus === apiConstants.success
                      ? adminDetailsObject.adminDetails.email
                      : ""
                  }
                />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-nplar-main-heading-icon"></i>
                      <h3 className="bayanno-admin-nplar-main-heading-text">
                        Manage Profile
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-12 mt-3">
                    <div className="bayanno-admin-account-details-card">
                      <div className="w-100 p-3">
                        <div>
                          <h3 className="bayanno-admin-account-profile-heading">
                            Edit Profile
                          </h3>
                        </div>
                        <form
                          className="bayanno-admin-account-profile-form-container"
                          onSubmit={submitEditProfileForm}
                        >
                          <div className="bayanno-admin-account-name-main-container w-100">
                            <div className="bayanno-admin-account-profile-name-label-container mt-2 mb-1">
                              <label
                                className="bayanno-admin-account-profile-name-label"
                                htmlFor="accountNameInput"
                              >
                                Name
                              </label>
                            </div>
                            <div className="bayanno-admin-account-profile-name-input-container mt-2 mb-1">
                              <input
                                className="bayanno-admin-account-profile-name-input"
                                id="accountNameInput"
                                placeholder="Enter Your Name"
                                value={editName.name}
                                onChange={editChangeName}
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mb-3">
                            <div className="bayanno-admin-account-profile-button-container">
                              <p className="bayanno-admin-account-profile-email-required-msg">
                                {editName.nameRequiredText}
                              </p>
                            </div>
                          </div>
                          <div className="bayanno-admin-account-name-main-container w-100">
                            <div className="bayanno-admin-account-profile-name-label-container mt-2 mb-1">
                              <label
                                className="bayanno-admin-account-profile-name-label"
                                htmlFor="accountEmailInput"
                              >
                                Email
                              </label>
                            </div>
                            <div className="bayanno-admin-account-profile-name-input-container mt-2 mb-1">
                              <input
                                className="bayanno-admin-account-profile-name-input"
                                id="accountEmailInput"
                                placeholder="Enter Your Email"
                                value={editEmail.email}
                                onChange={editChangeEmail}
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mb-3">
                            <div className="bayanno-admin-account-profile-button-container">
                              <p className="bayanno-admin-account-profile-email-required-msg">
                                {editEmail.emailRequiredText}
                              </p>
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mt-3 mb-3">
                            <div className="bayanno-admin-account-profile-button-container mt-2 mb-2">
                              <button
                                className="bayanno-admin-account-profile-button"
                                type="submit"
                              >
                                <i class="fa-solid fa-check"></i>
                                &nbsp; Update Profile
                              </button>
                              <p
                                className={`bayanno-admin-account-profile-server-msg ${editServerMsgDetails.textColor}`}
                              >
                                {editServerMsgDetails.serverMsg}
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-12 mt-3">
                    <div className="bayanno-admin-account-details-card">
                      <div className="w-100 p-3">
                        <div>
                          <h3 className="bayanno-admin-account-profile-heading">
                            Change Password
                          </h3>
                        </div>
                        <form
                          className="bayanno-admin-account-profile-form-container"
                          onSubmit={submitEditPasswordForm}
                        >
                          <div className="bayanno-admin-account-name-main-container w-100">
                            <div className="bayanno-admin-account-profile-name-label-container mt-2 mb-1">
                              <label
                                className="bayanno-admin-account-profile-name-label"
                                htmlFor="currentPasswordInput"
                              >
                                Current Password
                              </label>
                            </div>
                            <div className="bayanno-admin-account-profile-name-input-container mt-2 mb-1">
                              <input
                                className="bayanno-admin-account-profile-name-input"
                                id="currentPasswordInput"
                                placeholder="Enter Current Password"
                                value={oldPassword.password}
                                onChange={oldPasswordChange}
                                type="password"
                              />
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mb-3">
                            <div className="bayanno-admin-account-profile-button-container">
                              <p className="bayanno-admin-account-profile-email-required-msg">
                                {oldPassword.passwordRequiredText}
                              </p>
                            </div>
                          </div>
                          <div className="bayanno-admin-account-name-main-container w-100">
                            <div className="bayanno-admin-account-profile-name-label-container mt-2 mb-1">
                              <label
                                className="bayanno-admin-account-profile-name-label"
                                htmlFor="newPasswordInput"
                              >
                                New Password
                              </label>
                            </div>
                            <div className="bayanno-admin-account-profile-name-input-container mt-2 mb-1">
                              <input
                                className="bayanno-admin-account-profile-name-input"
                                id="newPasswordInput"
                                placeholder="Enter New Password"
                                value={newPassword.password}
                                onChange={newPasswordChange}
                                type="password"
                              />
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mb-3">
                            <div className="bayanno-admin-account-profile-button-container">
                              <p className="bayanno-admin-account-profile-email-required-msg">
                                {newPassword.passwordRequiredText}
                              </p>
                            </div>
                          </div>
                          <div className="bayanno-admin-account-name-main-container w-100">
                            <div className="bayanno-admin-account-profile-name-label-container mt-2 mb-1">
                              <label
                                className="bayanno-admin-account-profile-name-label"
                                htmlFor="confirmNewPasswordInput"
                              >
                                Confirm New Password
                              </label>
                            </div>
                            <div className="bayanno-admin-account-profile-name-input-container mt-2 mb-1">
                              <input
                                className="bayanno-admin-account-profile-name-input"
                                id="confirmNewPasswordInput"
                                placeholder="Confirm New Password"
                                value={confirmNewPassword.password}
                                onChange={confirmNewPasswordChange}
                                type="password"
                              />
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mb-3">
                            <div className="bayanno-admin-account-profile-button-container">
                              <p className="bayanno-admin-account-profile-email-required-msg">
                                {confirmNewPassword.passwordRequiredText}
                              </p>
                            </div>
                          </div>
                          <div className="bayanno-admin-account-profile-button-main-container mt-3 mb-3">
                            <div className="bayanno-admin-account-profile-button-container mt-2 mb-2">
                              <button
                                className="bayanno-admin-account-profile-button"
                                type="submit"
                              >
                                <i class="fa-solid fa-check"></i>
                                &nbsp; Update Password
                              </button>
                              <p
                                className={`bayanno-admin-account-profile-server-msg ${passwordServerMsg.textColor}`}
                              >
                                {passwordServerMsg.serverMsg}
                              </p>
                            </div>
                          </div>
                        </form>
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

export default AdminAccountPage;
