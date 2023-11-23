import "./index.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import { format } from "date-fns";

const PatientPageRows = (props) => {
  const { eachObject, gettingPatientsList } = props;
  const {
    name,
    email,
    address,
    phoneNumber,
    gender,
    birthDate,
    age,
    bloodGroup,
    profileImage,
    _id,
  } = eachObject;

  const formatDateDay = format(new Date(birthDate), "yyyy-MM-dd");

  const getListAgain = () => {
    gettingPatientsList();
  };

  const [editPatientName, setEditPatientName] = useState({
    name: name,
    nameRequiredText: "",
  });

  const [editPatientEmail, setEditPatientEmail] = useState({
    email: email,
    emailRequiredText: "",
  });

  const [editPatientAddress, setEditPatientAddress] = useState(address);

  const [editPatientPhoneNumber, setEditPatientPhoneNumber] =
    useState(phoneNumber);

  const [editPatientGender, setEditPatientGender] = useState({
    gender: gender,
    genderRequiredText: "",
  });

  const [editPatientBirthDate, setEditPatientBirthDate] =
    useState(formatDateDay);

  const [editPatientAge, setEditPatientAge] = useState(age);
  const [editPatientBloodGroup, setEditPatientBloodGroup] =
    useState(bloodGroup);

  const [editPatientIcon, setEditPatientIcon] = useState({
    icon: profileImage,
    iconRequiredText: "",
  });

  const [editPatientImageToDisplay, setEditPatientImageToDisplay] =
    useState(profileImage);

  const [editServerMsg, setEditServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const editPatientChangeName = (event) => {
    const nameInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setEditPatientName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setEditPatientName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const editPatientChangeEmail = (event) => {
    const emailInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (emailInput === "") {
      setEditPatientEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      setEditPatientEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const editPatientChangeAddress = (event) => {
    const addressInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditPatientAddress(addressInput);
  };

  const editPatientChangePhoneNumber = (event) => {
    const phoneNumberInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditPatientPhoneNumber(phoneNumberInput);
  };

  const editPatientChangeGender = (event) => {
    const genderInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (genderInput === "") {
      setEditPatientGender((prevState) => ({
        ...prevState,
        gender: "",
        genderRequiredText: "*Required",
      }));
    } else {
      setEditPatientGender((prevState) => ({
        ...prevState,
        gender: genderInput,
        genderRequiredText: "",
      }));
    }
  };

  const editPatientChangeBirthDate = (event) => {
    const dateInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditPatientBirthDate(dateInput);
  };

  const editPatientChangeAge = (event) => {
    const ageInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditPatientAge(ageInput);
  };

  const editPatientChangeBloodGroup = (event) => {
    const bloodGroupInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditPatientBloodGroup(bloodGroupInput);
  };

  const editPatientChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setEditPatientImageToDisplay("");
      setEditPatientIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setEditPatientImageToDisplay(imageUrl);

      setEditPatientIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const submitEditedInputs = async (iconImage) => {
    const url = `http://localhost:5000/api/modify-patient/${_id}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: editPatientName.name,
        email: editPatientEmail.email,
        address: editPatientAddress,
        phoneNumber: editPatientPhoneNumber,
        gender: editPatientGender.gender,
        birthDate: editPatientBirthDate,
        age: editPatientAge,
        bloodGroup: editPatientBloodGroup,
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
          "bayanno-admin-patient-edit-popup-content-card-server-msg-success",
      }));
      setEditPatientName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setEditPatientEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "",
      }));
      setEditPatientAddress("");
      setEditPatientPhoneNumber("");
      setEditPatientGender((prevState) => ({
        ...prevState,
        gender: "",
        genderRequiredText: "",
      }));
      setEditPatientBirthDate("");
      setEditPatientAge("");
      setEditPatientBloodGroup("");
      setEditPatientImageToDisplay("");
      setEditPatientIcon((prevState) => ({
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
    if (editPatientIcon.icon === profileImage) {
      submitEditedInputs(profileImage);
    } else {
      const jwtToken = Cookies.get("hospital-jwt-token");
      const formData = new FormData();
      formData.append("file", editPatientIcon.icon);
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

  const validateEditPatientForm = () => {
    if (editPatientName.name === "") {
      setEditPatientName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (editPatientEmail.email === "") {
      setEditPatientEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else if (editPatientGender.gender === "") {
      setEditPatientGender((prevState) => ({
        ...prevState,
        gender: "",
        genderRequiredText: "*Required",
      }));
    } else {
      checkingValuesOfInputs();
    }
  };

  const submitEditPatientForm = (event) => {
    event.preventDefault();
    validateEditPatientForm();
  };

  const deleteThePatient = async () => {
    const url = `http://localhost:5000/api/delete-patient/${_id}`;
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
    setEditPatientName((prevState) => ({
      ...prevState,
      name: name,
      nameRequiredText: "",
    }));
    setEditPatientEmail((prevState) => ({
      ...prevState,
      email: email,
      emailRequiredText: "",
    }));
    setEditPatientAddress(address);
    setEditPatientPhoneNumber(phoneNumber);
    setEditPatientGender((prevState) => ({
      ...prevState,
      gender: gender,
      genderRequiredText: "",
    }));
    setEditPatientBirthDate(formatDateDay);
    setEditPatientAge(age);
    setEditPatientBloodGroup(bloodGroup);
    setEditPatientImageToDisplay(profileImage);
    setEditPatientIcon((prevState) => ({
      ...prevState,
      icon: profileImage,
      iconRequiredText: "",
    }));
  };

  const editPatientRemoveIcon = () => {
    setEditPatientImageToDisplay(profileImage);
    setEditPatientIcon((prevState) => ({
      ...prevState,
      icon: profileImage,
      iconRequiredText: "",
    }));
  };

  const editPopup = () => {
    return (
      <Popup
        trigger={
          <button className="bayanno-admin-patient-table-data-edit-button mt-2 mb-2 mr-2">
            <i className="fa-solid fa-pencil"></i>
            <span className="ml-1">Edit</span>
          </button>
        }
        modal="true"
        className="popup-edit-patient"
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-patient-edit-popup-container">
            <div className="bayanno-admin-patient-edit-popup-head-container">
              <h3 className="bayanno-admin-patient-edit-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-patient-edit-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-patient-edit-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="bayanno-admin-patient-edit-popup-content-container">
              <div className="bayanno-admin-patient-edit-popup-content-card shadow">
                <h1 className="bayanno-admin-patient-edit-popup-content-heading mt-3">
                  Edit Patient
                </h1>
                <form
                  className="d-flex flex-column mt-4 mb-3"
                  onSubmit={submitEditPatientForm}
                >
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientNameInput"
                    >
                      Name
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Patient Name"
                        className="bayanno-admin-patient-edit-popup-content-card-name-input"
                        id="editPatientNameInput"
                        onChange={editPatientChangeName}
                        value={editPatientName.name}
                      />
                      <p className="bayanno-admin-patient-edit-popup-required-txt">
                        {editPatientName.nameRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientEmailInput"
                    >
                      Email
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="bayanno-admin-patient-edit-popup-content-card-name-input"
                        id="editPatientEmailInput"
                        onChange={editPatientChangeEmail}
                        value={editPatientEmail.email}
                      />
                      <p className="bayanno-admin-patient-edit-popup-required-txt">
                        {editPatientEmail.emailRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientAddressInput"
                    >
                      Address
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <textarea
                        placeholder="Enter Address"
                        className="bayanno-admin-patient-edit-popup-content-card-des-input"
                        id="editPatientAddressInput"
                        rows={20}
                        cols={60}
                        onChange={editPatientChangeAddress}
                        value={editPatientAddress}
                      ></textarea>
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientPhoneInput"
                    >
                      Phone
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="bayanno-admin-patient-edit-popup-content-card-name-input"
                        id="editPatientPhoneInput"
                        onChange={editPatientChangePhoneNumber}
                        value={editPatientPhoneNumber}
                      />
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientGenderInput"
                    >
                      Sex
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <select
                        placeholder="Select Gender"
                        className="bayanno-admin-patient-edit-popup-content-card-name-input"
                        id="editPatientGenderInput"
                        onChange={editPatientChangeGender}
                        value={editPatientGender.gender}
                      >
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                      </select>
                      <p className="bayanno-admin-patient-edit-popup-required-txt">
                        {editPatientGender.genderRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientBirthDateInput"
                    >
                      Birth Date
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <input
                        type="date"
                        placeholder="Enter Birth Date"
                        className="bayanno-admin-patient-edit-popup-content-card-name-input"
                        id="editPatientBirthDateInput"
                        onChange={editPatientChangeBirthDate}
                        value={editPatientBirthDate}
                      />
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      id="editPatientAgeInput"
                    >
                      Age
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <div className="d-flex flex-column w-100 mt-2 mb-3">
                        <input
                          type="number"
                          placeholder="Enter Your Age"
                          className="bayanno-admin-patient-edit-popup-content-card-name-input"
                          id="editPatientAgeInput"
                          onChange={editPatientChangeAge}
                          value={editPatientAge}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-patient-edit-popup-content-card-label mr-3"
                      htmlFor="editPatientBloodGroupInput"
                    >
                      Blood Group
                    </label>
                    <div className="bayanno-admin-patient-edit-popup-content-card-input-container">
                      <select
                        placeholder="Select Blood Group"
                        className="bayanno-admin-patient-edit-popup-content-card-name-input"
                        id="editPatientBloodGroupInput"
                        onChange={editPatientChangeBloodGroup}
                        value={editPatientBloodGroup}
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
                  <div className="bayanno-admin-patient-edit-popup-content-card-main-container mt-2 mb-2">
                    <label className="bayanno-admin-patient-edit-popup-content-card-label mr-3">
                      Image
                    </label>
                    <div>
                      <img
                        src={
                          editPatientImageToDisplay === profileImage
                            ? `http://localhost:5000/uploads/images/${profileImage}`
                            : editPatientImageToDisplay
                        }
                        alt="profileImage"
                        className="bayanno-admin-patient-edit-popup-content-card-image"
                      />
                      <p className="bayanno-admin-patient-edit-popup-required-txt">
                        {editPatientIcon.iconRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="text-md-center mt-2 mb-2">
                    {editPatientIcon.icon === "" ? (
                      <label
                        className="bayanno-admin-patient-edit-popup-content-card-select-image-button"
                        htmlFor="editPatientIconInput"
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
                      id="editPatientIconInput"
                      onChange={editPatientChangeIcon}
                    />
                  </div>
                  {editPatientIcon.icon === "" ? (
                    ""
                  ) : (
                    <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                      <label
                        className="bayanno-admin-patient-edit-popup-content-card-select-image-button mr-3"
                        htmlFor="editPatientIconInput"
                      >
                        Change
                      </label>
                      <button
                        className="bayanno-admin-patient-edit-popup-content-card-remove-image-button"
                        type="button"
                        onClick={editPatientRemoveIcon}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                    <button
                      className="bayanno-admin-patient-edit-popup-content-card-save-image-button mr-3"
                      type="submit"
                    >
                      <i class="fa-solid fa-check mr-1"></i>
                      <span className="ml-1">Update</span>
                    </button>
                    <p
                      className={`bayanno-admin-patient-edit-popup-content-card-server-msg ${editServerMsg.textColor}`}
                    >
                      {editServerMsg.serverMsg}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="bayanno-admin-patient-edit-popup-content-card-close-button-container">
              <button
                className="bayanno-admin-patient-edit-popup-content-card-close-button mr-3"
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
          <button className="bayanno-admin-patient-table-data-delete-button mt-2 mb-2 mr-2">
            <i className="fa-regular fa-trash-can"></i>
            <span className="ml-1">Delete</span>
          </button>
        }
        modal={true}
        contentStyle={contentStyleDelete}
      >
        {(close) => (
          <div className="bayanno-admin-patient-delete-popup-container">
            <div className="bayanno-admin-patient-delete-popup-head-container">
              <h3 className="bayanno-admin-patient-delete-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-patient-delete-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-patient-delete-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap p-3 pb-3">
              <button
                className="bayanno-admin-patient-delete-popup-button"
                type="button"
                onClick={deleteThePatient}
              >
                Delete
              </button>
              <button
                className="bayanno-admin-patient-delete-popup-cancel-button"
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

  const formatDateMonth = () => {
    return format(new Date(birthDate), "MM/dd/yyyy");
  };

  return (
    <tr>
      <td className="bayanno-admin-patient-table-data">
        <img
          src={`http://localhost:5000/uploads/images/${profileImage}`}
          alt={name}
          className="bayanno-admin-patient-table-data-icon"
        />
      </td>
      <td className="bayanno-admin-patient-table-data">{name}</td>
      <td className="bayanno-admin-patient-table-data">{email}</td>
      <td className="bayanno-admin-patient-table-data">{phoneNumber}</td>
      <td className="bayanno-admin-patient-table-data">{gender}</td>
      <td className="bayanno-admin-patient-table-data">{formatDateMonth()}</td>
      <td className="bayanno-admin-patient-table-data">{age}</td>
      <td className="bayanno-admin-patient-table-data">{bloodGroup}</td>
      <td className="bayanno-admin-patient-table-data">
        <div className="d-flex align-items-center flex-wrap">
          {editPopup()}
          {deletePopup()}
        </div>
      </td>
    </tr>
  );
};

export default PatientPageRows;
