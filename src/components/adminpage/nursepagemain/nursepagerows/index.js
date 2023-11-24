import "./index.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import "../../admincommoncss/indexrows.css";

const NursePageRows = (props) => {
  const { eachObject, gettingNursesList } = props;
  const { name, email, address, phoneNumber, profileImage, _id } = eachObject;

  const getListAgain = () => {
    gettingNursesList();
  };

  const [editName, setEditName] = useState({
    name: name,
    nameRequiredText: "",
  });

  const [editEmail, setEditEmail] = useState({
    email: email,
    emailRequiredText: "",
  });

  const [editAddress, setEditAddress] = useState(address);

  const [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);

  const [editIcon, setEditIcon] = useState({
    icon: profileImage,
    iconRequiredText: "",
  });

  const [editImageToDisplay, setEditImageToDisplay] = useState(profileImage);

  const [editServerMsg, setEditServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const editChangeName = (event) => {
    const nameInput = event.target.value;

    setEditServerMsg((prevState) => ({
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

    setEditServerMsg((prevState) => ({
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

  const editChangeAddress = (event) => {
    const addressInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditAddress(addressInput);
  };

  const editChangePhoneNumber = (event) => {
    const phoneNumberInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditPhoneNumber(phoneNumberInput);
  };

  const editChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setEditImageToDisplay("");
      setEditIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setEditImageToDisplay(imageUrl);

      setEditIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const submitEditedInputs = async (iconImage) => {
    const url = `http://localhost:5000/api/modify-nurse/${_id}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: editName.name,
        email: editEmail.email,
        address: editAddress,
        phoneNumber: editPhoneNumber,
        profileImage: iconImage,
      }),
    };
    const updatedRes = await fetch(url, options);

    if (updatedRes.ok) {
      const updatedResJson = await updatedRes.json();
      setEditServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updatedResJson.message,
        textColor:
          "bayanno-admin-nplar-edit-popup-content-card-server-msg-success",
      }));
      setEditName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setEditEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "",
      }));
      setEditAddress("");
      setEditPhoneNumber("");
      setEditImageToDisplay("");
      setEditIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "",
      }));
      getListAgain();
    } else {
      const updatedResJson = await updatedRes.json();
      setEditServerMsg((prevState) => ({
        ...prevState,
        serverMsg: updatedResJson.message,
        textColor: "",
      }));
    }
  };

  const checkingValuesOfInputs = () => {
    if (editIcon.icon === profileImage) {
      submitEditedInputs(profileImage);
    } else {
      const jwtToken = Cookies.get("hospital-jwt-token");
      const formData = new FormData();
      formData.append("file", editIcon.icon);
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

  const validateEditForm = () => {
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
      checkingValuesOfInputs();
    }
  };

  const submitEditForm = (event) => {
    event.preventDefault();
    validateEditForm();
  };

  const deleteDetailsFromServer = async () => {
    const url = `http://localhost:5000/api/delete-nurse/${_id}`;
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
    setEditName((prevState) => ({
      ...prevState,
      name: name,
      nameRequiredText: "",
    }));
    setEditEmail((prevState) => ({
      ...prevState,
      email: email,
      emailRequiredText: "",
    }));
    setEditAddress(address);
    setEditPhoneNumber(phoneNumber);
    setEditImageToDisplay(profileImage);
    setEditIcon((prevState) => ({
      ...prevState,
      icon: profileImage,
      iconRequiredText: "",
    }));
  };

  const editRemoveIcon = () => {
    setEditImageToDisplay(profileImage);
    setEditIcon((prevState) => ({
      ...prevState,
      icon: profileImage,
      iconRequiredText: "",
    }));
  };

  const editPopup = () => {
    return (
      <Popup
        trigger={
          <button className="bayanno-admin-nplar-table-data-edit-button mt-2 mb-2 mr-2">
            <i className="fa-solid fa-pencil"></i>
            <span className="ml-1">Edit</span>
          </button>
        }
        modal="true"
        className="popup-edit-nplar"
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-nplar-edit-popup-container">
            <div className="bayanno-admin-nplar-edit-popup-head-container">
              <h3 className="bayanno-admin-nplar-edit-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-nplar-edit-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-nplar-edit-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="bayanno-admin-nplar-edit-popup-content-container">
              <div className="bayanno-admin-nplar-edit-popup-content-card shadow">
                <h1 className="bayanno-admin-nplar-edit-popup-content-heading mt-3">
                  Edit Nurse
                </h1>
                <form
                  className="d-flex flex-column mt-4 mb-3"
                  onSubmit={submitEditForm}
                >
                  <div className="bayanno-admin-nplar-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-nplar-edit-popup-content-card-label mr-3"
                      htmlFor="editNurseNameInput"
                    >
                      Name
                    </label>
                    <div className="bayanno-admin-nplar-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="bayanno-admin-nplar-edit-popup-content-card-name-input"
                        id="editNurseNameInput"
                        onChange={editChangeName}
                        value={editName.name}
                      />
                      <p className="bayanno-admin-nplar-edit-popup-required-txt">
                        {editName.nameRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-nplar-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-nplar-edit-popup-content-card-label mr-3"
                      htmlFor="editNurseEmailInput"
                    >
                      Email
                    </label>
                    <div className="bayanno-admin-nplar-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="bayanno-admin-nplar-edit-popup-content-card-name-input"
                        id="editNurseEmailInput"
                        onChange={editChangeEmail}
                        value={editEmail.email}
                      />
                      <p className="bayanno-admin-nplar-edit-popup-required-txt">
                        {editEmail.emailRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-nplar-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-nplar-edit-popup-content-card-label mr-3"
                      htmlFor="editNurseAddressInput"
                    >
                      Address
                    </label>
                    <div className="bayanno-admin-nplar-edit-popup-content-card-input-container">
                      <textarea
                        placeholder="Enter Address"
                        className="bayanno-admin-nplar-edit-popup-content-card-des-input"
                        id="editNurseAddressInput"
                        rows={20}
                        cols={60}
                        onChange={editChangeAddress}
                        value={editAddress}
                      ></textarea>
                    </div>
                  </div>
                  <div className="bayanno-admin-nplar-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-nplar-edit-popup-content-card-label mr-3"
                      htmlFor="editNursePhoneInput"
                    >
                      Phone
                    </label>
                    <div className="bayanno-admin-nplar-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="bayanno-admin-nplar-edit-popup-content-card-name-input"
                        id="editNursePhoneInput"
                        onChange={editChangePhoneNumber}
                        value={editPhoneNumber}
                      />
                    </div>
                  </div>
                  <div className="bayanno-admin-nplar-edit-popup-content-card-main-container mt-2 mb-2">
                    <label className="bayanno-admin-nplar-edit-popup-content-card-label mr-3">
                      Image
                    </label>
                    <div>
                      <img
                        src={
                          editImageToDisplay === profileImage
                            ? `http://localhost:5000/uploads/images/${profileImage}`
                            : editImageToDisplay
                        }
                        alt="profileImage"
                        className="bayanno-admin-nplar-edit-popup-content-card-image"
                      />
                      <p className="bayanno-admin-nplar-edit-popup-required-txt">
                        {editIcon.iconRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="text-md-center mt-2 mb-2">
                    {editIcon.icon === "" ? (
                      <label
                        className="bayanno-admin-nplar-edit-popup-content-card-select-image-button"
                        htmlFor="editNurseIconInput"
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
                      id="editNurseIconInput"
                      onChange={editChangeIcon}
                    />
                  </div>
                  {editIcon.icon === "" ? (
                    ""
                  ) : (
                    <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                      <label
                        className="bayanno-admin-nplar-edit-popup-content-card-select-image-button mr-3"
                        htmlFor="editNurseIconInput"
                      >
                        Change
                      </label>
                      <button
                        className="bayanno-admin-nplar-edit-popup-content-card-remove-image-button"
                        type="button"
                        onClick={editRemoveIcon}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                    <button
                      className="bayanno-admin-nplar-edit-popup-content-card-save-image-button mr-3"
                      type="submit"
                    >
                      <i class="fa-solid fa-check mr-1"></i>
                      <span className="ml-1">Update</span>
                    </button>
                    <p
                      className={`bayanno-admin-nplar-edit-popup-content-card-server-msg ${editServerMsg.textColor}`}
                    >
                      {editServerMsg.serverMsg}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="bayanno-admin-nplar-edit-popup-content-card-close-button-container">
              <button
                className="bayanno-admin-nplar-edit-popup-content-card-close-button mr-3"
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
          <button className="bayanno-admin-nplar-table-data-delete-button mt-2 mb-2 mr-2">
            <i className="fa-regular fa-trash-can"></i>
            <span className="ml-1">Delete</span>
          </button>
        }
        modal={true}
        contentStyle={contentStyleDelete}
      >
        {(close) => (
          <div className="bayanno-admin-nplar-delete-popup-container">
            <div className="bayanno-admin-nplar-delete-popup-head-container">
              <h3 className="bayanno-admin-nplar-delete-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-nplar-delete-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-nplar-delete-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap p-3 pb-3">
              <button
                className="bayanno-admin-nplar-delete-popup-button"
                type="button"
                onClick={deleteDetailsFromServer}
              >
                Delete
              </button>
              <button
                className="bayanno-admin-nplar-delete-popup-cancel-button"
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
      <td className="bayanno-admin-nplar-table-data">
        <img
          src={`http://localhost:5000/uploads/images/${profileImage}`}
          alt={name}
          className="bayanno-admin-nplar-table-data-icon"
        />
      </td>
      <td className="bayanno-admin-nplar-table-data">{name}</td>
      <td className="bayanno-admin-nplar-table-data">{email}</td>
      <td className="bayanno-admin-nplar-table-data">{address}</td>
      <td className="bayanno-admin-nplar-table-data">{phoneNumber}</td>
      <td className="bayanno-admin-nplar-table-data">
        <div className="d-flex align-items-center flex-wrap">
          {editPopup()}
          {deletePopup()}
        </div>
      </td>
    </tr>
  );
};

export default NursePageRows;
