import { Link } from "react-router-dom";
import "./index.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const DepartmentPageRows = (props) => {
  const { eachObject, gettingDepartmentList } = props;
  const { icon, name, departmentDescription, _id } = eachObject;

  const getListAgain = () => {
    gettingDepartmentList();
  };

  const [editAddDepartmentName, setEditAddDepartmentName] = useState({
    name: name,
    nameRequiredText: "",
  });

  const [editAddDepartmentDescription, setEditAddDepartmentDescription] =
    useState({
      description: departmentDescription,
      descriptionRequiredText: "",
    });

  const [editAddDepartmentIcon, setEditAddDepartmentIcon] = useState({
    icon: icon,
    iconRequiredText: "",
  });

  const [editAddDepartmentImageToDisplay, setEditAddDepartmentImageToDisplay] =
    useState(icon);

  const [editServerMsg, setEditServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const editDepartmentChangeName = (event) => {
    const nameInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setEditAddDepartmentName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setEditAddDepartmentName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const editDepartmentChangeDescription = (event) => {
    const descriptionInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (descriptionInput === "") {
      setEditAddDepartmentDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      setEditAddDepartmentDescription((prevState) => ({
        ...prevState,
        description: descriptionInput,
        descriptionRequiredText: "",
      }));
    }
  };

  const editDepartmentChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setEditAddDepartmentImageToDisplay("");
      setEditAddDepartmentIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setEditAddDepartmentImageToDisplay(imageUrl);

      setEditAddDepartmentIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const submitEditedInputs = async (iconImage) => {
    const url = `http://localhost:5000/api/modify-department-details/${_id}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        icon: iconImage,
        name: editAddDepartmentName.name,
        departmentDescription: editAddDepartmentDescription.description,
      }),
    };
    const updatingWithOutIconRes = await fetch(url, options);

    if (updatingWithOutIconRes.ok) {
      const updatingWithOutIconResJson = await updatingWithOutIconRes.json();
      setEditServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updatingWithOutIconResJson.message,
        textColor:
          "bayanno-admin-department-edit-popup-content-card-server-msg-success",
      }));
      setEditAddDepartmentName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setEditAddDepartmentDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "",
      }));
      setEditAddDepartmentImageToDisplay("");
      setEditAddDepartmentIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "",
      }));
      getListAgain();
    } else {
      const updatingWithOutIconResJson = await updatingWithOutIconRes.json();
      setEditServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updatingWithOutIconResJson.message,
        textColor: "",
      }));
    }
  };

  const checkingValuesOfInputs = () => {
    if (editAddDepartmentIcon.icon === icon) {
      submitEditedInputs(icon);
    } else {
      const jwtToken = Cookies.get("hospital-jwt-token");
      const formData = new FormData();
      formData.append("file", editAddDepartmentIcon.icon);
      axios
        .post("http://localhost:5000/upload/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          submitEditedInputs(response.data.filename);
        })
        .catch((error) => console.log(error));
    }
  };

  const validateEditDepartmentForm = () => {
    if (editAddDepartmentName.name === "") {
      setEditAddDepartmentName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (editAddDepartmentDescription.description === "") {
      setEditAddDepartmentDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      checkingValuesOfInputs();
    }
  };

  const submitEditDepartmentForm = (event) => {
    event.preventDefault();
    validateEditDepartmentForm();
  };

  const closeEditPopup = () => {
    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));
    setEditAddDepartmentName((prevState) => ({
      ...prevState,
      name: name,
      nameRequiredText: "",
    }));
    setEditAddDepartmentDescription((prevState) => ({
      ...prevState,
      description: departmentDescription,
      descriptionRequiredText: "",
    }));
    setEditAddDepartmentImageToDisplay(icon);
    setEditAddDepartmentIcon((prevState) => ({
      ...prevState,
      icon: icon,
      iconRequiredText: "",
    }));
  };

  const editDepartmentRemoveIcon = () => {
    setEditAddDepartmentImageToDisplay(icon);
    setEditAddDepartmentIcon((prevState) => ({
      ...prevState,
      icon: icon,
      iconRequiredText: "",
    }));
  };

  const editPopup = () => {
    return (
      <Popup
        trigger={
          <button className="bayanno-admin-department-table-data-edit-button mt-2 mb-2 mr-2">
            <i className="fa-solid fa-pencil bayanno-admin-department-table-data-plus-icon"></i>
            <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
              Edit
            </span>
          </button>
        }
        modal="true"
        className="popup-edit"
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-department-edit-popup-container">
            <div className="bayanno-admin-department-edit-popup-head-container">
              <h3 className="bayanno-admin-department-edit-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-department-edit-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-department-edit-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="bayanno-admin-department-edit-popup-content-container">
              <div className="bayanno-admin-department-edit-popup-content-card shadow">
                <h1 className="bayanno-admin-department-edit-popup-content-heading mt-3">
                  Edit Department
                </h1>
                <form
                  className="d-flex flex-column mt-4 mb-3"
                  onSubmit={submitEditDepartmentForm}
                >
                  <div className="bayanno-admin-department-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-department-edit-popup-content-card-label mr-3"
                      htmlFor="addDepartmentNameInput"
                    >
                      Name
                    </label>
                    <div className="bayanno-admin-department-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Department Name"
                        className="bayanno-admin-department-edit-popup-content-card-name-input"
                        id="addDepartmentNameInput"
                        onChange={editDepartmentChangeName}
                        value={editAddDepartmentName.name}
                      />
                      <p className="bayanno-admin-department-edit-popup-required-txt">
                        {editAddDepartmentName.nameRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-department-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-department-edit-popup-content-card-label mr-3"
                      htmlFor="addDepartmentDescriptionInput"
                    >
                      Description
                    </label>
                    <div className="bayanno-admin-department-edit-popup-content-card-input-container">
                      <textarea
                        placeholder="Enter Description"
                        className="bayanno-admin-department-edit-popup-content-card-des-input"
                        id="addDepartmentDescriptionInput"
                        rows={20}
                        cols={60}
                        onChange={editDepartmentChangeDescription}
                        value={editAddDepartmentDescription.description}
                      ></textarea>
                      <p className="bayanno-admin-department-edit-popup-required-txt">
                        {editAddDepartmentDescription.descriptionRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-department-edit-popup-content-card-main-container mt-2 mb-2">
                    <label className="bayanno-admin-department-edit-popup-content-card-label mr-3">
                      Icon
                    </label>
                    <div>
                      <img
                        src={
                          editAddDepartmentImageToDisplay === icon
                            ? `http://localhost:5000/uploads/images/${icon}`
                            : editAddDepartmentImageToDisplay
                        }
                        alt="departmentImage"
                        className="bayanno-admin-department-edit-popup-content-card-image"
                      />
                      <p className="bayanno-admin-department-edit-popup-required-txt">
                        {editAddDepartmentIcon.iconRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="text-md-center mt-2 mb-2">
                    {editAddDepartmentIcon.icon === icon ? (
                      <label
                        className="bayanno-admin-department-edit-popup-content-card-select-image-button"
                        htmlFor="editDepartmentIconInput"
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
                      id="editDepartmentIconInput"
                      placeholder="Select Image"
                      onChange={editDepartmentChangeIcon}
                    />
                  </div>
                  {editAddDepartmentIcon.icon === icon ? (
                    ""
                  ) : (
                    <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                      <label
                        className="bayanno-admin-department-edit-popup-content-card-select-image-button mr-3"
                        htmlFor="editDepartmentIconInput"
                      >
                        Change
                      </label>
                      <button
                        className="bayanno-admin-department-edit-popup-content-card-remove-image-button"
                        type="button"
                        onClick={editDepartmentRemoveIcon}
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                    <button
                      className="bayanno-admin-department-edit-popup-content-card-save-image-button mr-3"
                      type="submit"
                    >
                      <i class="fa-solid fa-check mr-1"></i>
                      <span className="ml-1">Save</span>
                    </button>
                    <p
                      className={`bayanno-admin-department-edit-popup-content-card-server-msg ${editServerMsg.textColor}`}
                    >
                      {editServerMsg.serverMsg}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="bayanno-admin-department-edit-popup-content-card-close-button-container">
              <button
                className="bayanno-admin-department-edit-popup-content-card-close-button mr-3"
                type="button"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
  };

  return (
    <tr>
      <td className="bayanno-admin-department-table-data">
        <img
          src={`http://localhost:5000/uploads/images/${icon}`}
          alt={name}
          className="bayanno-admin-department-table-data-icon"
        />
      </td>
      <td className="bayanno-admin-department-table-data">{name}</td>
      <td className="bayanno-admin-department-table-data bayanno-admin-department-table-data-des">
        {departmentDescription}
      </td>
      <td className="bayanno-admin-department-table-data">
        <div className="d-flex align-items-center flex-wrap">
          <Link className="bayanno-admin-department-table-data-manage-facilities-container mt-2 mb-2 mr-2">
            <i className="fa-solid fa-plus bayanno-admin-department-table-data-plus-icon"></i>
            <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
              Manage Facilities
            </span>
          </Link>
          {editPopup()}
          <button className="bayanno-admin-department-table-data-delete-button mt-2 mb-2 mr-2">
            <i className="fa-regular fa-trash-can bayanno-admin-department-table-data-plus-icon"></i>
            <span className="bayanno-admin-department-table-data-manage-facilities ml-1">
              Delete
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DepartmentPageRows;
