import AdminFooter from "../../adminfooter";
import AdminHeader from "../../adminheader";
import AdminNavbar from "../../adminnavbar";
import AdminSidebar from "../../adminsidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Hourglass } from "react-loader-spinner";
import "../../admincommoncss/index.css";
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

  const [editServerMsgDetails, seteditServerMsgDetails] = useState({
    serverMsg: "",
    textColor: "",
  });

  const [adminDetailsObject, setAdminDetailsObject] = useState({
    adminDetails: {},
    apiStatus: apiConstants.initial,
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
    } else {
      setAdminDetailsObject((prevState) => ({
        ...prevState,
        adminDetails: [],
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const editChangeName = (event) => {
    const nameInput = event.target.value;

    seteditServerMsgDetails((prevState) => ({
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

    seteditServerMsgDetails((prevState) => ({
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

  //   const addChangePassword = (event) => {
  //     const passwordInput = event.target.value;

  //     setAddServerMsg((prevState) => ({
  //       ...prevState,
  //       serverMsg: "",
  //       textColor: "",
  //     }));

  //     if (passwordInput === "") {
  //       setAddPassword((prevState) => ({
  //         ...prevState,
  //         password: "",
  //         passwordRequiredText: "*Required",
  //       }));
  //     } else {
  //       setAddPassword((prevState) => ({
  //         ...prevState,
  //         password: passwordInput,
  //         passwordRequiredText: "",
  //       }));
  //     }
  //   };

  //   const validateAddForm = () => {
  //     if (addName.name === "") {
  //       setAddName((prevState) => ({
  //         ...prevState,
  //         name: "",
  //         nameRequiredText: "*Required",
  //       }));
  //     } else if (addEmail.email === "") {
  //         setAddEmail( ( prevState ) => ( {
  //             ...prevState,
  //             email: "",
  //             emailRequiredText: "*Required",
  //         } ) );
  //     }
  //   };

  //   const submitAddForm = (event) => {
  //     event.preventDefault();
  //     validateAddForm();
  //   };

  const noDataView = () => {
    return (
      <div className="bayanno-admin-nplar-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-nplar-table-no-data-view-text">
          No Data Found
        </h3>
      </div>
    );
  };

  const renderListDataView = () => {};

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
    switch (adminDetailsObject.apiStatus) {
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
                        Manage Profile
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-12 mt-3">
                    <div className="bayanno-admin-account-details-card">
                      <div className="container-fluid"></div>
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
