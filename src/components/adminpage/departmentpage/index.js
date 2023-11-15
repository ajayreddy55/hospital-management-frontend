import { Link } from "react-router-dom";
import AdminFooter from "../adminfooter";
import AdminHeader from "../adminheader";
import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import anestheticsImage from "../../../assets/anesthetics-image.png";
import cardiologyImage from "../../../assets/cardialogy-image.png";
import Popup from "reactjs-popup";
import addSelectImage from "../../../assets/select-256x256-image.png";
import "./index.css";
import { useState } from "react";

const AdminDepartment = () => {
  const [addDepartmentName, setAddDepartmentName] = useState({
    name: "",
    nameRequiredText: "",
  });

  const [addDepartmentDescription, setAddDepartmentDescription] = useState({
    description: "",
    descriptionRequiredText: "",
  });

  const [addDepartmentIcon, setAddDepartmentIcon] = useState({
    icon: "",
    iconRequiredText: "",
  });

  const [addDepartmentImageToDisplay, setAddDepartmentImageToDisplay] =
    useState("");

  const addDepartmentChangeName = (event) => {
    const nameInput = event.target.value;

    if (nameInput === "") {
      setAddDepartmentName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setAddDepartmentName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const addDepartmentChangeDescription = (event) => {
    const descriptionInput = event.target.value;

    if (descriptionInput === "") {
      setAddDepartmentDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      setAddDepartmentDescription((prevState) => ({
        ...prevState,
        description: descriptionInput,
        descriptionRequiredText: "",
      }));
    }
  };

  const addDepartmentChangeIcon = (event) => {
    const iconInput = event.target.files;

    if (iconInput === "") {
      setAddDepartmentImageToDisplay("");
      setAddDepartmentIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      setAddDepartmentImageToDisplay(
        URL.createObjectURL(event.target.files[0])
      );

      setAddDepartmentIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const addDepartmentRemoveIcon = () => {
    const input = document.getElementById("addDepartmentIconInput");
    input.value = null;
    setAddDepartmentImageToDisplay("");
    setAddDepartmentIcon((prevState) => ({
      ...prevState,
      icon: "",
      iconRequiredText: "*Required",
    }));
  };

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
                    <Popup
                      trigger={
                        <button
                          type="button"
                          className="bayanno-admin-department-add-button"
                        >
                          <i class="fa-solid fa-plus bayanno-admin-department-add-plus-icon"></i>{" "}
                          Add Department
                        </button>
                      }
                      modal="true"
                      className="popup-content"
                    >
                      {(close) => (
                        <div className="bayanno-admin-department-add-popup-container">
                          <div className="bayanno-admin-department-add-popup-head-container">
                            <h3 className="bayanno-admin-department-add-popup-head-name">
                              Bayanno Hospital Management System
                            </h3>
                            <button
                              type="button"
                              className="bayanno-admin-department-add-popup-head-close-button"
                              onClick={() => close()}
                            >
                              <i class="fa-solid fa-xmark bayanno-admin-department-add-popup-head-cross-icon"></i>
                            </button>
                          </div>
                          <div className="bayanno-admin-department-add-popup-content-container">
                            <div className="bayanno-admin-department-add-popup-content-card shadow">
                              <h1 className="bayanno-admin-department-add-popup-content-heading mt-3">
                                Add Department
                              </h1>
                              <form className="d-flex flex-column mt-4 mb-3">
                                <div className="bayanno-admin-department-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-department-add-popup-content-card-label mr-3"
                                    htmlFor="addDepartmentNameInput"
                                  >
                                    Name
                                  </label>
                                  <div className="bayanno-admin-department-add-popup-content-card-input-container">
                                    <input
                                      type="text"
                                      placeholder="Enter Department Name"
                                      className="bayanno-admin-department-add-popup-content-card-name-input"
                                      id="addDepartmentNameInput"
                                      onChange={addDepartmentChangeName}
                                      value={addDepartmentName.name}
                                    />
                                    <p className="bayanno-admin-department-add-popup-required-txt">
                                      {addDepartmentName.nameRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-department-add-popup-content-card-main-container mt-2 mb-2">
                                  <label
                                    className="bayanno-admin-department-add-popup-content-card-label mr-3"
                                    htmlFor="addDepartmentDescriptionInput"
                                  >
                                    Description
                                  </label>
                                  <div className="bayanno-admin-department-add-popup-content-card-input-container">
                                    <textarea
                                      placeholder="Enter Description"
                                      className="bayanno-admin-department-add-popup-content-card-des-input"
                                      id="addDepartmentDescriptionInput"
                                      rows={20}
                                      cols={60}
                                      onChange={addDepartmentChangeDescription}
                                      value={
                                        addDepartmentDescription.description
                                      }
                                    ></textarea>
                                    <p className="bayanno-admin-department-add-popup-required-txt">
                                      {
                                        addDepartmentDescription.descriptionRequiredText
                                      }
                                    </p>
                                  </div>
                                </div>
                                <div className="bayanno-admin-department-add-popup-content-card-main-container mt-2 mb-2">
                                  <label className="bayanno-admin-department-add-popup-content-card-label mr-3">
                                    Icon
                                  </label>
                                  <div>
                                    <img
                                      src={
                                        addDepartmentImageToDisplay === ""
                                          ? addSelectImage
                                          : addDepartmentImageToDisplay
                                      }
                                      alt="departmentImage"
                                      className="bayanno-admin-department-add-popup-content-card-image"
                                    />
                                    <p className="bayanno-admin-department-add-popup-required-txt">
                                      {addDepartmentIcon.iconRequiredText}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-md-center mt-2 mb-2">
                                  {addDepartmentIcon.icon === "" ? (
                                    <label
                                      className="bayanno-admin-department-add-popup-content-card-select-image-button"
                                      htmlFor="addDepartmentIconInput"
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
                                    id="addDepartmentIconInput"
                                    placeholder="Select Image"
                                    onChange={addDepartmentChangeIcon}
                                  />
                                </div>
                                {addDepartmentIcon.icon === "" ? (
                                  ""
                                ) : (
                                  <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                                    <label
                                      className="bayanno-admin-department-add-popup-content-card-select-image-button mr-3"
                                      htmlFor="addDepartmentIconInput"
                                    >
                                      Change
                                    </label>
                                    <button
                                      className="bayanno-admin-department-add-popup-content-card-remove-image-button"
                                      type="button"
                                      onClick={addDepartmentRemoveIcon}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}

                                <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                                  <button
                                    className="bayanno-admin-department-add-popup-content-card-save-image-button mr-3"
                                    type="submit"
                                  >
                                    <i class="fa-solid fa-check mr-1"></i>
                                    <span className="ml-1">Save</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="bayanno-admin-department-add-popup-content-card-close-button-container">
                            <button
                              className="bayanno-admin-department-add-popup-content-card-close-button mr-3"
                              type="button"
                              onClick={() => close()}
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
                    <div className="bayanno-admin-department-table-wrapper">
                      <div className="container-fluid">
                        <div className="row bayanno-admin-department-search-pages-container">
                          <div className="col-12 p-0 col-lg-3">
                            <div className="bayanno-admin-department-items-per-page-container">
                              <select className="bayanno-admin-department-items-select-container">
                                <option value={"10"} selected>
                                  10
                                </option>
                                <option value={"25"}>25</option>
                                <option value={"50"}>50</option>
                                <option value={"100"}>100</option>
                              </select>
                              <label className="bayanno-admin-department-items-per-page-text">
                                Per Page
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9 p-0">
                            <div className="d-flex align-items-center p-3 justify-content-lg-end">
                              <div className="bayanno-admin-department-print-container mr-3">
                                <div className="bayanno-admin-department-print-extensions-container">
                                  <IoExtensionPuzzleSharp className="bayanno-admin-department-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-department-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-department-print-extensions" />
                                  <IoExtensionPuzzleSharp className="bayanno-admin-department-print-extensions" />
                                </div>
                                <button className="bayanno-admin-department-print-button">
                                  Print
                                </button>
                              </div>
                              <div className="ml-3">
                                <input
                                  className="bayanno-admin-department-search-bar"
                                  type="search"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 p-0">
                            <table className="bayanno-admin-department-table-container">
                              <thead>
                                <tr>
                                  <th className="bayanno-admin-department-table-header-icon">
                                    Icon
                                  </th>
                                  <th className="bayanno-admin-department-table-header-name">
                                    Name
                                  </th>
                                  <th className="bayanno-admin-department-table-header-des">
                                    Description
                                  </th>
                                  <th className="bayanno-admin-department-table-header-options">
                                    Options
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="bayanno-admin-department-table-data">
                                    <img
                                      src={anestheticsImage}
                                      alt="anestheticsImage"
                                      className="bayanno-admin-department-table-data-icon"
                                    />
                                  </td>
                                  <td className="bayanno-admin-department-table-data">
                                    Anesthetics
                                  </td>
                                  <td className="bayanno-admin-department-table-data bayanno-admin-department-table-data-des">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum,
                                    you need to be sure there isn't anything
                                    embarrassing hidden in the middle of text.
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary, making this the first true
                                    generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined
                                    with a handful of model sentence structures,
                                    to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is
                                    therefore always free from repetition,
                                    injected humour, or non-characteristic words
                                    etc.
                                  </td>
                                  <td className="bayanno-admin-department-table-data">
                                    <div className="d-flex align-items-center flex-wrap">
                                      <Link className="bayanno-admin-department-table-data-manage-facilities-container mt-2 mb-2 mr-2">
                                        <i className="fa-solid fa-plus bayanno-admin-department-table-data-plus-icon"></i>
                                        <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
                                          Manage Facilities
                                        </span>
                                      </Link>
                                      <button className="bayanno-admin-department-table-data-edit-button mt-2 mb-2 mr-2">
                                        <i className="fa-solid fa-pencil bayanno-admin-department-table-data-plus-icon"></i>
                                        <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
                                          Edit
                                        </span>
                                      </button>
                                      <button className="bayanno-admin-department-table-data-delete-button mt-2 mb-2 mr-2">
                                        <i className="fa-regular fa-trash-can bayanno-admin-department-table-data-plus-icon"></i>
                                        <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
                                          Delete
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="bayanno-admin-department-table-data">
                                    <img
                                      src={cardiologyImage}
                                      alt="cardiology"
                                      className="bayanno-admin-department-table-data-icon"
                                    />
                                  </td>
                                  <td className="bayanno-admin-department-table-data">
                                    Cardiology
                                  </td>
                                  <td className="bayanno-admin-department-table-data bayanno-admin-department-table-data-des">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum,
                                    you need to be sure there isn't anything
                                    embarrassing hidden in the middle of text.
                                    All the Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as
                                    necessary, making this the first true
                                    generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined
                                    with a handful of model sentence structures,
                                    to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is
                                    therefore always free from repetition,
                                    injected humour, or non-characteristic words
                                    etc.
                                  </td>
                                  <td className="bayanno-admin-department-table-data">
                                    <div className="d-flex align-items-center flex-wrap">
                                      <Link className="bayanno-admin-department-table-data-manage-facilities-container mt-2 mb-2 mr-2">
                                        <i className="fa-solid fa-plus bayanno-admin-department-table-data-plus-icon"></i>
                                        <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
                                          Manage Facilities
                                        </span>
                                      </Link>
                                      <button className="bayanno-admin-department-table-data-edit-button mt-2 mb-2 mr-2">
                                        <i className="fa-solid fa-pencil bayanno-admin-department-table-data-plus-icon"></i>
                                        <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
                                          Edit
                                        </span>
                                      </button>
                                      <button className="bayanno-admin-department-table-data-delete-button mt-2 mb-2 mr-2">
                                        <i className="fa-regular fa-trash-can bayanno-admin-department-table-data-plus-icon"></i>
                                        <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
                                          Delete
                                        </span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row d-flex align-items-center">
                          <div className="col-12 col-lg-3">
                            <div className="bayanno-admin-department-showing-items-container">
                              <span className="bayanno-admin-department-showing-items-text">
                                Showing 1 to 2 of 2
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-9">
                            <div className="bayanno-admin-department-pagination-container pt-3">
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

export default AdminDepartment;
