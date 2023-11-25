import { useParams } from "react-router-dom";
import AdminFooter from "../adminfooter";
import AdminHeader from "../adminheader";
import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import Popup from "reactjs-popup";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Hourglass } from "react-loader-spinner";
import "reactjs-popup/dist/index.css";
import DepartmentFacilitiesPageRows from "../departmentfacilityrows";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const AdminDepartmentFacilities = () => {
  const params = useParams();
  const { departmentId } = params;

  const [addFacilityTitle, setAddFacilityTitle] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [addFacilityDescription, setAddFacilityDescription] = useState({
    description: "",
    descriptionRequiredText: "",
  });

  const [addFacilityServerMsg, setAddFacilityServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const [facilitiesObject, setFacilitiesObject] = useState({
    facilities: [],
    apiStatus: apiConstants.initial,
  });

  const [departmentDetails, setDepartmentDetails] = useState({
    department: {},
    apiStatus: apiConstants.initial,
  });

  useEffect(() => {
    getFacilitiesList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getDepartmentDetails();
    //eslint-disable-next-line
  }, []);

  const getDepartmentDetails = async () => {
    const url = `http://localhost:5000/api/get-department/${departmentId}`;
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
      setDepartmentDetails((prevState) => ({
        ...prevState,
        department: departmentResJson.departmentDetails,
        apiStatus: apiConstants.success,
      }));
    } else {
      // const departmentResJson = await departmentRes.json();
      setDepartmentDetails((prevState) => ({
        ...prevState,
        department: {},
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const getFacilitiesList = async () => {
    setFacilitiesObject((prevState) => ({
      ...prevState,
      facilities: [],
      apiStatus: apiConstants.inProgress,
    }));

    const url = `http://localhost:5000/api/get-department-facilities/${departmentId}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const facilitiesRes = await fetch(url, options);

    if (facilitiesRes.ok) {
      const facilitiesResJson = await facilitiesRes.json();
      setFacilitiesObject((prevState) => ({
        ...prevState,
        facilities: facilitiesResJson.departmentFacilities,
        apiStatus: apiConstants.success,
      }));
    } else {
      setFacilitiesObject((prevState) => ({
        ...prevState,
        facilities: [],
        apiStatus: apiConstants.failure,
      }));
    }
  };

  const addFacilityChangeTitle = (event) => {
    const titleInput = event.target.value;

    setAddFacilityServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (titleInput === "") {
      setAddFacilityTitle((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setAddFacilityTitle((prevState) => ({
        ...prevState,
        name: titleInput,
        nameRequiredText: "",
      }));
    }
  };

  const addFacilityChangeDescription = (event) => {
    const descriptionInput = event.target.value;

    setAddFacilityServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (descriptionInput === "") {
      setAddFacilityDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      setAddFacilityDescription((prevState) => ({
        ...prevState,
        description: descriptionInput,
        descriptionRequiredText: "",
      }));
    }
  };

  const addFacilityDatabase = async () => {
    const url = "http://localhost:5000/api/adding-facilities";
    const jwtToken = Cookies.get("hospital-jwt-token");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        departmentId,
        title: addFacilityTitle.name,
        facilityDescription: addFacilityDescription.description,
      }),
    };

    const addFacilityRes = await fetch(url, options);

    if (addFacilityRes.ok) {
      const addFacilityResJson = await addFacilityRes.json();
      setAddFacilityServerMsg((prevState) => ({
        ...prevState,
        serverMsg: addFacilityResJson.message,
        textColor:
          "bayanno-admin-facility-add-popup-content-card-server-msg-success",
      }));
      setAddFacilityTitle((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setAddFacilityDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "",
      }));
      getFacilitiesList();
    } else {
      const addFacilityResJson = await addFacilityRes.json();
      setAddFacilityServerMsg((prevState) => ({
        ...prevState,
        serverMsg: addFacilityResJson.message,
        textColor: "",
      }));
    }
  };

  const validateAddFacilityForm = () => {
    if (addFacilityTitle.name === "") {
      setAddFacilityTitle((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (addFacilityDescription.description === "") {
      setAddFacilityDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      addFacilityDatabase();
    }
  };

  const submitAddFacilityForm = (event) => {
    event.preventDefault();
    validateAddFacilityForm();
  };

  const closeAddFacilityPopup = () => {
    setAddFacilityServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));
    setAddFacilityTitle((prevState) => ({
      ...prevState,
      name: "",
      nameRequiredText: "",
    }));
    setAddFacilityDescription((prevState) => ({
      ...prevState,
      description: "",
      descriptionRequiredText: "",
    }));
  };

  const noDataView = () => {
    return (
      <div className="bayanno-admin-facility-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-facility-table-no-data-view-text">
          No Data Found
        </h3>
      </div>
    );
  };

  const renderFacilitiesList = () => {
    if (facilitiesObject.facilities.length === 0) {
      return noDataView();
    }

    return (
      <>
        <div className="row">
          <div className="col-12 p-0">
            <table className="bayanno-admin-facility-table-container">
              <thead>
                <tr>
                  <th className="bayanno-admin-facility-table-header-name">
                    Title
                  </th>
                  <th className="bayanno-admin-facility-table-header-des">
                    Description
                  </th>
                  <th className="bayanno-admin-facility-table-header-options">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {facilitiesObject.facilities.map((eachObject) => (
                  <DepartmentFacilitiesPageRows
                    key={eachObject._id}
                    eachObject={eachObject}
                    gettingFacilitiesList={getFacilitiesList}
                    departmentName={
                      departmentDetails.apiStatus === apiConstants.success
                        ? departmentDetails.department.name
                        : ""
                    }
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
      <div className="bayanno-admin-facility-table-no-data-view-container pt-4 pb-4">
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
      <div className="bayanno-admin-facility-table-no-data-view-container pt-4 pb-4">
        <h3 className="bayanno-admin-facility-table-no-data-view-text">
          Oops! Something Went Wrong.
        </h3>
      </div>
    );
  };

  const checkingWhatToRender = () => {
    switch (facilitiesObject.apiStatus) {
      case apiConstants.success:
        return renderFacilitiesList();

      case apiConstants.inProgress:
        return renderLoaderView();

      case apiConstants.failure:
        return renderFailureView();

      default:
        return null;
    }
  };

  return (
    <div className="bayanno-admin-facility-main-container">
      <div className="container-fluid bayanno-admin-height-container-facility">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container-facility">
          <div className="col-12 bayanno-admin-height-container-facility d-flex p-0">
            <AdminSidebar />

            <div className="bayanno-admin-main-content-container-facility">
              <div className="container-fluid">
                <AdminHeader />
                <div className="row mt-3 mb-2">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <i class="fa-regular fa-circle-right bayanno-admin-facility-main-heading-icon"></i>
                      <h3 className="bayanno-admin-facility-main-heading-text">
                        Department Facilities |{" "}
                        {departmentDetails.apiStatus === apiConstants.success
                          ? `${departmentDetails.department.name} Department`
                          : ""}
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
                          className="bayanno-admin-facility-add-button"
                        >
                          <i class="fa-solid fa-plus bayanno-admin-facility-add-plus-icon"></i>{" "}
                          Add Department Facility
                        </button>
                      }
                      modal="true"
                      className="popup-content"
                      onClose={closeAddFacilityPopup}
                    >
                      {(close) => (
                        <div className="bayanno-admin-facility-add-popup-container">
                          <div className="bayanno-admin-facility-add-popup-head-container">
                            <h3 className="bayanno-admin-facility-add-popup-head-name">
                              Bayanno Hospital Management System
                            </h3>
                            <button
                              type="button"
                              className="bayanno-admin-facility-add-popup-head-close-button"
                              onClick={close}
                            >
                              <i class="fa-solid fa-xmark bayanno-admin-facility-add-popup-head-cross-icon"></i>
                            </button>
                          </div>
                          <div className="bayanno-admin-facility-add-popup-content-container">
                            <div className="bayanno-admin-facility-add-popup-content-card shadow">
                              <h1 className="bayanno-admin-facility-add-popup-content-heading mt-3">
                                Add Facility |{" "}
                                {departmentDetails.apiStatus ===
                                apiConstants.success
                                  ? `${departmentDetails.department.name} Department`
                                  : ""}
                              </h1>
                              <form
                                className="d-flex flex-column mt-4 mb-3"
                                onSubmit={submitAddFacilityForm}
                              >
                                <div className="bayanno-admin-facility-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-facility-add-popup-content-card-label mr-3"
                                    htmlFor="addFacilityTitleInput"
                                  >
                                    Title
                                  </label>
                                  <div className="bayanno-admin-facility-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Facility Title"
                                      className="bayanno-admin-facility-add-popup-content-card-name-input"
                                      id="addFacilityTitleInput"
                                      onChange={addFacilityChangeTitle}
                                      value={addFacilityTitle.name}
                                    />
                                    <p className="bayanno-admin-facility-add-popup-required-txt">
                                      {addFacilityTitle.nameRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-facility-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-facility-add-popup-content-card-label mr-3"
                                    htmlFor="addFacilityDescriptionInput"
                                  >
                                    Description
                                  </label>
                                  <div className="bayanno-admin-facility-add-popup-content-card-input-container">
                                    <textarea
                                      placeholder="Enter Description"
                                      className="bayanno-admin-facility-add-popup-content-card-des-input"
                                      id="addFacilityDescriptionInput"
                                      rows={20}
                                      cols={60}
                                      onChange={addFacilityChangeDescription}
                                      value={addFacilityDescription.description}
                                    ></textarea>
                                    <p className="bayanno-admin-facility-add-popup-required-txt">
                                      {
                                        addFacilityDescription.descriptionRequiredText
                                      }
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-facility-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-facility-add-popup-content-card-label mr-3"
                                    htmlFor="facilityDepartmentName"
                                  >
                                    Department
                                  </label>
                                  <div className="bayanno-admin-facility-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Department Name"
                                      className="bayanno-admin-facility-add-popup-content-card-name-input"
                                      id="facilityDepartmentName"
                                      value={
                                        departmentDetails.apiStatus ===
                                        apiConstants.success
                                          ? departmentDetails.department.name
                                          : ""
                                      }
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                                  <button
                                    className="bayanno-admin-facility-add-popup-content-card-save-image-button mr-3"
                                    type="submit"
                                  >
                                    <i class="fa-solid fa-check mr-1"></i>
                                    <span className="ml-1">Save</span>
                                  </button>
                                  <p
                                    className={`bayanno-admin-facility-add-popup-content-card-server-msg ${addFacilityServerMsg.textColor}`}
                                  >
                                    {addFacilityServerMsg.serverMsg}
                                  </p>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="bayanno-admin-facility-add-popup-content-card-close-button-container">
                            <button
                              className="bayanno-admin-facility-add-popup-content-card-close-button mr-3"
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
                    <div className="bayanno-admin-facility-table-wrapper">
                      <div className="container-fluid">
                        <div className="row bayanno-admin-facility-search-pages-container">
                          <div className="col-12 p-0 col-lg-3">
                            <div className="bayanno-admin-facility-items-per-page-container">
                              <select className="bayanno-admin-facility-items-select-container">
                                <option value={"10"} selected>
                                  10
                                </option>
                                <option value={"25"}>25</option>
                                <option value={"50"}>50</option>
                                <option value={"100"}>100</option>
                              </select>
                              <label className="bayanno-admin-facility-items-per-page-text">
                                Per Page
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9 p-0">
                            <div className="d-flex align-items-center p-3 justify-content-lg-end">
                              <div className="bayanno-admin-facility-print-container mr-3">
                                <div className="bayanno-admin-facility-print-extensions-container">
                                  <IoExtensionPuzzleSharp className="bayanno-admin-facility-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-facility-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-facility-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-facility-print-extensions" />
                                </div>
                                <button className="bayanno-admin-facility-print-button">
                                  Print
                                </button>
                              </div>
                              <div className="ml-3">
                                <input
                                  className="bayanno-admin-facility-search-bar"
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
                            <div className="bayanno-admin-facility-showing-items-container">
                              <span className="bayanno-admin-facility-showing-items-text">
                                Showing{" "}
                                {facilitiesObject.facilities.length >= 1
                                  ? 1
                                  : 0}{" "}
                                to {facilitiesObject.facilities.length} of{" "}
                                {facilitiesObject.facilities.length}
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9">
                            <div className="bayanno-admin-facility-pagination-container pt-3">
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

export default AdminDepartmentFacilities;
