import "./index.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import Cookies from "js-cookie";
import "reactjs-popup/dist/index.css";

const DepartmentFacilitiesPageRows = (props) => {
  const { eachObject, gettingFacilitiesList, departmentName } = props;
  const { title, facilityDescription, _id } = eachObject;

  const getListAgain = () => {
    gettingFacilitiesList();
  };

  const [editFacilityName, setEditFacilityName] = useState({
    name: title,
    nameRequiredText: "",
  });

  const [editFacilityDescription, setEditFacilityDescription] = useState({
    description: facilityDescription,
    descriptionRequiredText: "",
  });

  const [editServerMsg, setEditServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const editFacilityChangeName = (event) => {
    const titleInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (titleInput === "") {
      setEditFacilityName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setEditFacilityName((prevState) => ({
        ...prevState,
        name: titleInput,
        nameRequiredText: "",
      }));
    }
  };

  const editFacilityChangeDescription = (event) => {
    const descriptionInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (descriptionInput === "") {
      setEditFacilityDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      setEditFacilityDescription((prevState) => ({
        ...prevState,
        description: descriptionInput,
        descriptionRequiredText: "",
      }));
    }
  };

  const submitEditedInputs = async () => {
    const url = `http://localhost:5000/api//modify-facility-details/${_id}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        title: editFacilityName.name,
        facilityDescription: editFacilityDescription.description,
      }),
    };
    const updateRes = await fetch(url, options);

    if (updateRes.ok) {
      const updateResJson = await updateRes.json();
      setEditServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updateResJson.message,
        textColor:
          "bayanno-admin-facility-edit-popup-content-card-server-msg-success",
      }));
      setEditFacilityName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setEditFacilityDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "",
      }));
      getListAgain();
    } else {
      const updateResJson = await updateRes.json();
      setEditServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updateResJson.message,
        textColor: "",
      }));
    }
  };

  const validateEditFacilityForm = () => {
    if (editFacilityName.name === "") {
      setEditFacilityName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (editFacilityDescription.description === "") {
      setEditFacilityDescription((prevState) => ({
        ...prevState,
        description: "",
        descriptionRequiredText: "*Required",
      }));
    } else {
      submitEditedInputs();
    }
  };

  const submitEditFacilityForm = (event) => {
    event.preventDefault();
    validateEditFacilityForm();
  };

  const deleteTheFacility = async () => {
    const url = `http://localhost:5000/api/delete-facility/${_id}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const deleteRes = await fetch(url, options);

    if (deleteRes.ok) {
      getListAgain();
    }
  };

  const closeEditPopup = () => {
    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));
    setEditFacilityName((prevState) => ({
      ...prevState,
      name: title,
      nameRequiredText: "",
    }));
    setEditFacilityDescription((prevState) => ({
      ...prevState,
      description: facilityDescription,
      descriptionRequiredText: "",
    }));
  };

  const editPopup = () => {
    return (
      <Popup
        trigger={
          <button className="bayanno-admin-facility-table-data-edit-button mt-2 mb-2 mr-2">
            <i className="fa-solid fa-pencil bayanno-admin-facility-table-data-plus-icon"></i>
            <span className="bayanno-admin-facility-table-data-manage-facilities ml-1">
              Edit
            </span>
          </button>
        }
        modal="true"
        className="popup-edit"
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-facility-edit-popup-container">
            <div className="bayanno-admin-facility-edit-popup-head-container">
              <h3 className="bayanno-admin-facility-edit-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-facility-edit-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-facility-edit-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="bayanno-admin-facility-edit-popup-content-container">
              <div className="bayanno-admin-facility-edit-popup-content-card shadow">
                <h1 className="bayanno-admin-facility-edit-popup-content-heading mt-3">
                  Edit Facility
                </h1>
                <form
                  className="d-flex flex-column mt-4 mb-3"
                  onSubmit={submitEditFacilityForm}
                >
                  <div className="bayanno-admin-facility-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-facility-edit-popup-content-card-label mr-3"
                      htmlFor="editFacilityTitleInput"
                    >
                      Name
                    </label>
                    <div className="bayanno-admin-facility-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Facility Title"
                        className="bayanno-admin-facility-edit-popup-content-card-name-input"
                        id="editFacilityTitleInput"
                        onChange={editFacilityChangeName}
                        value={editFacilityName.name}
                      />
                      <p className="bayanno-admin-facility-edit-popup-required-txt">
                        {editFacilityName.nameRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-facility-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-facility-edit-popup-content-card-label mr-3"
                      htmlFor="editFacilityDescriptionInput"
                    >
                      Description
                    </label>
                    <div className="bayanno-admin-facility-edit-popup-content-card-input-container">
                      <textarea
                        placeholder="Enter Description"
                        className="bayanno-admin-facility-edit-popup-content-card-des-input"
                        id="editFacilityDescriptionInput"
                        rows={20}
                        cols={60}
                        onChange={editFacilityChangeDescription}
                        value={editFacilityDescription.description}
                      ></textarea>
                      <p className="bayanno-admin-facility-edit-popup-required-txt">
                        {editFacilityDescription.descriptionRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-facility-edit-popup-content-card-main-container mt-2 mb-2">
                    <label className="bayanno-admin-facility-edit-popup-content-card-label mr-3">
                      Department
                    </label>
                    <div className="bayanno-admin-facility-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Department Name"
                        className="bayanno-admin-facility-edit-popup-content-card-name-input"
                        id="editFacilityDepartmentName"
                        value={departmentName}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                    <button
                      className="bayanno-admin-facility-edit-popup-content-card-save-image-button mr-3"
                      type="submit"
                    >
                      <i class="fa-solid fa-check mr-1"></i>
                      <span className="ml-1">Update</span>
                    </button>
                    <p
                      className={`bayanno-admin-facility-edit-popup-content-card-server-msg ${editServerMsg.textColor}`}
                    >
                      {editServerMsg.serverMsg}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="bayanno-admin-facility-edit-popup-content-card-close-button-container">
              <button
                className="bayanno-admin-facility-edit-popup-content-card-close-button mr-3"
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

  const deletePopup = () => {
    const contentStyleDelete = {
      backgroundColor: "#ffffff",
      width: "98%",
      maxWidth: "600px",
      minHeight: "150px",
      height: "200px",
      maxHeight: "300px",
      padding: "0px",
    };

    return (
      <Popup
        trigger={
          <button className="bayanno-admin-facility-table-data-delete-button mt-2 mb-2 mr-2">
            <i className="fa-regular fa-trash-can bayanno-admin-facility-table-data-plus-icon"></i>
            <span className="bayanno-admin-facility-table-data-manage-facilities ml-1">
              Delete
            </span>
          </button>
        }
        modal={true}
        contentStyle={contentStyleDelete}
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-facility-delete-popup-container">
            <div className="bayanno-admin-facility-delete-popup-head-container">
              <h3 className="bayanno-admin-facility-delete-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-facility-delete-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-facility-delete-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap p-3 pb-3">
              <button
                className="bayanno-admin-facility-delete-popup-button"
                type="button"
                onClick={deleteTheFacility}
              >
                Delete
              </button>
              <button
                className="bayanno-admin-facility-delete-popup-cancel-button"
                type="button"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
  };

  return (
    <tr>
      <td className="bayanno-admin-department-table-data">{title}</td>
      <td className="bayanno-admin-facility-table-data bayanno-admin-facility-table-data-des">
        {facilityDescription}
      </td>
      <td className="bayanno-admin-facility-table-data">
        <div className="d-flex align-items-center flex-wrap">
          {editPopup()}
          {deletePopup()}
        </div>
      </td>
    </tr>
  );
};

export default DepartmentFacilitiesPageRows;
