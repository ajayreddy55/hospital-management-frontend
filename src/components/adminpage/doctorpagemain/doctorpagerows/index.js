import "./index.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "reactjs-popup/dist/index.css";

const DoctorPageRows = (props) => {
  const { eachObject, gettingDoctorsList } = props;
  const {
    name,
    email,
    address,
    phoneNumber,
    department,
    profile,
    facebookLink,
    twitterLink,
    googleLink,
    linkedinLink,
    profileImage,
    _id,
  } = eachObject;

  const getListAgain = () => {
    gettingDoctorsList();
  };

  const [editDoctorName, setEditDoctorName] = useState({
    name: name,
    nameRequiredText: "",
  });

  const [editDoctorEmail, setEditDoctorEmail] = useState({
    email: email,
    emailRequiredText: "",
  });

  const [editDoctorAddress, setEditDoctorAddress] = useState(address);

  const [editDoctorPhoneNumber, setEditDoctorPhoneNumber] =
    useState(phoneNumber);

  const [editDoctorDepartment, setEditDoctorDepartment] = useState({
    department: department,
    departmentRequiredText: "",
  });

  const [editDoctorProfileText, setEditDoctorProfileText] = useState(profile);

  const [editFacebookLink, setEditFacebookLink] = useState(facebookLink);
  const [editTwitterLink, setEditTwitterLink] = useState(twitterLink);
  const [editGoogleLink, setEditGoogleLink] = useState(googleLink);
  const [editLinkedinLink, setEditLinkedinLink] = useState(linkedinLink);

  const [editDoctorIcon, setEditDoctorIcon] = useState({
    icon: profileImage,
    iconRequiredText: "",
  });

  const [editDoctorImageToDisplay, setEditDoctorImageToDisplay] =
    useState(profileImage);

  const [editServerMsg, setEditServerMsg] = useState({
    serverMsg: "",
    textColor: "",
  });

  const editDoctorChangeName = (event) => {
    const nameInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (nameInput === "") {
      setEditDoctorName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else {
      setEditDoctorName((prevState) => ({
        ...prevState,
        name: nameInput,
        nameRequiredText: "",
      }));
    }
  };

  const editDoctorChangeEmail = (event) => {
    const emailInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (emailInput === "") {
      setEditDoctorEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else {
      setEditDoctorEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };

  const editDoctorChangeAddress = (event) => {
    const addressInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditDoctorAddress(addressInput);
  };

  const editDoctorChangePhoneNumber = (event) => {
    const phoneNumberInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditDoctorPhoneNumber(phoneNumberInput);
  };

  const editDoctorChangeDepartment = (event) => {
    const departmentInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (departmentInput === "") {
      setEditDoctorDepartment((prevState) => ({
        ...prevState,
        department: "",
        departmentRequiredText: "*Required",
      }));
    } else {
      setEditDoctorDepartment((prevState) => ({
        ...prevState,
        department: departmentInput,
        departmentRequiredText: "",
      }));
    }
  };

  const editDoctorChangeProfileText = (event) => {
    const textInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditDoctorProfileText(textInput);
  };

  const editDoctorChangeFacebookLink = (event) => {
    const socialInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditFacebookLink(socialInput);
  };

  const editDoctorChangeTwitterLink = (event) => {
    const socialInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditTwitterLink(socialInput);
  };

  const editDoctorChangeGoogleLink = (event) => {
    const socialInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditGoogleLink(socialInput);
  };

  const editDoctorChangeLinkedinLink = (event) => {
    const socialInput = event.target.value;

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    setEditLinkedinLink(socialInput);
  };

  const editDoctorChangeIcon = (event) => {
    const iconInput = event.target.files[0];

    setEditServerMsg((prevState) => ({
      ...prevState,
      serverMsg: "",
      textColor: "",
    }));

    if (!iconInput) {
      setEditDoctorImageToDisplay("");
      setEditDoctorIcon((prevState) => ({
        ...prevState,
        icon: "",
        iconRequiredText: "*Required",
      }));
    } else {
      const imageUrl = URL.createObjectURL(event.target.files[0]);

      setEditDoctorImageToDisplay(imageUrl);

      setEditDoctorIcon((prevState) => ({
        ...prevState,
        icon: iconInput,
        iconRequiredText: "",
      }));
    }
  };

  const submitEditedInputs = async (iconImage) => {
    const url = `http://localhost:5000/api/modify-doctor/${_id}`;
    const jwtToken = Cookies.get("hospital-jwt-token");
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        name: editDoctorName.name,
        email: editDoctorEmail.email,
        address: editDoctorAddress,
        phoneNumber: editDoctorPhoneNumber,
        department: editDoctorDepartment.department,
        profile: editDoctorProfileText,
        facebookLink: editFacebookLink,
        twitterLink: editTwitterLink,
        googleLink: editGoogleLink,
        linkedinLink: editLinkedinLink,
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
          "bayanno-admin-doctor-edit-popup-content-card-server-msg-success",
      }));
      setEditDoctorName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "",
      }));
      setEditDoctorEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "",
      }));
      setEditDoctorAddress("");
      setEditDoctorPhoneNumber("");
      setEditDoctorDepartment((prevState) => ({
        ...prevState,
        department: "",
        departmentRequiredText: "",
      }));
      setEditDoctorProfileText("");
      setEditFacebookLink("");
      setEditTwitterLink("");
      setEditGoogleLink("");
      setEditLinkedinLink("");
      setEditDoctorImageToDisplay("");
      setEditDoctorIcon((prevState) => ({
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
    if (editDoctorIcon.icon === profileImage) {
      submitEditedInputs(profileImage);
    } else {
      const jwtToken = Cookies.get("hospital-jwt-token");
      const formData = new FormData();
      formData.append("file", editDoctorIcon.icon);
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

  const validateEditDoctorForm = () => {
    if (editDoctorName.name === "") {
      setEditDoctorName((prevState) => ({
        ...prevState,
        name: "",
        nameRequiredText: "*Required",
      }));
    } else if (editDoctorEmail.email === "") {
      setEditDoctorEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "*Required",
      }));
    } else if (editDoctorDepartment.department === "") {
      setEditDoctorDepartment((prevState) => ({
        ...prevState,
        department: "",
        departmentRequiredText: "*Required",
      }));
    } else {
      checkingValuesOfInputs();
    }
  };

  const submitEditDoctorForm = (event) => {
    event.preventDefault();
    validateEditDoctorForm();
  };

  const deleteTheDoctor = async () => {
    const url = `http://localhost:5000/api/delete-doctor/${_id}`;
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
    setEditDoctorName((prevState) => ({
      ...prevState,
      name: name,
      nameRequiredText: "",
    }));
    setEditDoctorEmail((prevState) => ({
      ...prevState,
      email: email,
      emailRequiredText: "",
    }));
    setEditDoctorAddress(address);
    setEditDoctorPhoneNumber(phoneNumber);
    setEditDoctorDepartment((prevState) => ({
      ...prevState,
      department: department,
      departmentRequiredText: "",
    }));
    setEditDoctorProfileText(profile);
    setEditFacebookLink(facebookLink);
    setEditTwitterLink(twitterLink);
    setEditGoogleLink(googleLink);
    setEditLinkedinLink(linkedinLink);
    setEditDoctorImageToDisplay(profileImage);
    setEditDoctorIcon((prevState) => ({
      ...prevState,
      icon: profileImage,
      iconRequiredText: "",
    }));
  };

  const editDoctorRemoveIcon = () => {
    setEditDoctorImageToDisplay(profileImage);
    setEditDoctorIcon((prevState) => ({
      ...prevState,
      icon: profileImage,
      iconRequiredText: "",
    }));
  };

  const editPopup = () => {
    return (
      <Popup
        trigger={
          <button className="bayanno-admin-doctor-table-data-edit-button mt-2 mb-2 mr-2">
            <i className="fa-solid fa-pencil"></i>
            <span className="ml-1">Edit</span>
          </button>
        }
        modal="true"
        className="popup-edit-doctor"
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-doctor-edit-popup-container">
            <div className="bayanno-admin-doctor-edit-popup-head-container">
              <h3 className="bayanno-admin-doctor-edit-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-doctor-edit-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-doctor-edit-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="bayanno-admin-doctor-edit-popup-content-container">
              <div className="bayanno-admin-doctor-edit-popup-content-card shadow">
                <h1 className="bayanno-admin-doctor-edit-popup-content-heading mt-3">
                  Edit Doctor
                </h1>
                <form
                  className="d-flex flex-column mt-4 mb-3"
                  onSubmit={submitEditDoctorForm}
                >
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-doctor-edit-popup-content-card-label mr-3"
                      htmlFor="editDoctorNameInput"
                    >
                      Name
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Doctor Name"
                        className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                        id="editDoctorNameInput"
                        onChange={editDoctorChangeName}
                        value={editDoctorName.name}
                      />
                      <p className="bayanno-admin-doctor-edit-popup-required-txt">
                        {editDoctorName.nameRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-doctor-edit-popup-content-card-label mr-3"
                      htmlFor="editDoctorEmailInput"
                    >
                      Email
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                        id="editDoctorEmailInput"
                        onChange={editDoctorChangeEmail}
                        value={editDoctorEmail.email}
                      />
                      <p className="bayanno-admin-doctor-edit-popup-required-txt">
                        {editDoctorEmail.emailRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-doctor-edit-popup-content-card-label mr-3"
                      htmlFor="editDoctorAddressInput"
                    >
                      Address
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <textarea
                        placeholder="Enter Address"
                        className="bayanno-admin-doctor-edit-popup-content-card-des-input"
                        id="editDoctorAddressInput"
                        rows={20}
                        cols={60}
                        onChange={editDoctorChangeAddress}
                        value={editDoctorAddress}
                      ></textarea>
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-doctor-edit-popup-content-card-label mr-3"
                      htmlFor="editDoctorPhoneInput"
                    >
                      Phone
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                        id="editDoctorPhoneInput"
                        onChange={editDoctorChangePhoneNumber}
                        value={editDoctorPhoneNumber}
                      />
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-doctor-edit-popup-content-card-label mr-3"
                      htmlFor="editDoctorDepartmentInput"
                    >
                      Department
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <select
                        placeholder="Select Department"
                        className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                        id="editDoctorDepartmentInput"
                        onChange={editDoctorChangeDepartment}
                        value={editDoctorDepartment.department}
                      >
                        <option value={"Anesthetics"}>Anesthetics</option>
                        <option value={"Cardiology"}>Cardiology</option>
                        <option value={"Gastroenterology"}>
                          Gastroenterology
                        </option>
                      </select>
                      <p className="bayanno-admin-doctor-edit-popup-required-txt">
                        {editDoctorDepartment.departmentRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label
                      className="bayanno-admin-doctor-edit-popup-content-card-label mr-3"
                      htmlFor="editDoctorProfileInput"
                    >
                      Profile
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <textarea
                        placeholder="Enter Profile"
                        className="bayanno-admin-doctor-edit-popup-content-card-des-input"
                        id="editDoctorProfileInput"
                        rows={20}
                        cols={60}
                        onChange={editDoctorChangeProfileText}
                        value={editDoctorProfileText}
                      ></textarea>
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label className="bayanno-admin-doctor-edit-popup-content-card-label mr-3">
                      Social Links
                    </label>
                    <div className="bayanno-admin-doctor-edit-popup-content-card-input-container">
                      <div className="d-flex flex-column w-100 mt-2 mb-3">
                        <input
                          type="text"
                          placeholder="Enter Your Facebook Link"
                          className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                          name="editFacebookInput"
                          onChange={editDoctorChangeFacebookLink}
                          value={editFacebookLink}
                        />
                        <p className="bayanno-admin-doctor-edit-popup-social-txt">
                          Facebook Profile Link
                        </p>
                      </div>
                      <div className="d-flex flex-column w-100 mt-2 mb-3">
                        <input
                          type="text"
                          placeholder="Enter Your Twitter Link"
                          className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                          name="editTwitterInput"
                          onChange={editDoctorChangeTwitterLink}
                          value={editTwitterLink}
                        />
                        <p className="bayanno-admin-doctor-edit-popup-social-txt">
                          Twitter Profile Link
                        </p>
                      </div>
                      <div className="d-flex flex-column w-100 mt-2 mb-3">
                        <input
                          type="text"
                          placeholder="Enter Your Google Plus Link"
                          className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                          name="editGoogleInput"
                          onChange={editDoctorChangeGoogleLink}
                          value={editGoogleLink}
                        />
                        <p className="bayanno-admin-doctor-edit-popup-social-txt">
                          Google Plus Profile Link
                        </p>
                      </div>
                      <div className="d-flex flex-column w-100 mt-2 mb-3">
                        <input
                          type="text"
                          placeholder="Enter Your Linkedin Link"
                          className="bayanno-admin-doctor-edit-popup-content-card-name-input"
                          name="editLinkedinInput"
                          onChange={editDoctorChangeLinkedinLink}
                          value={editLinkedinLink}
                        />
                        <p className="bayanno-admin-doctor-edit-popup-social-txt">
                          Linkedin Profile Link
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bayanno-admin-doctor-edit-popup-content-card-main-container mt-2 mb-2">
                    <label className="bayanno-admin-doctor-edit-popup-content-card-label mr-3">
                      Image
                    </label>
                    <div>
                      <img
                        src={
                          editDoctorImageToDisplay === profileImage
                            ? `http://localhost:5000/uploads/images/${profileImage}`
                            : editDoctorImageToDisplay
                        }
                        alt="profileImage"
                        className="bayanno-admin-doctor-edit-popup-content-card-image"
                      />
                      <p className="bayanno-admin-doctor-edit-popup-required-txt">
                        {editDoctorIcon.iconRequiredText}
                      </p>
                    </div>
                  </div>
                  <div className="text-md-center mt-2 mb-2">
                    {editDoctorIcon.icon === "" ? (
                      <label
                        className="bayanno-admin-doctor-edit-popup-content-card-select-image-button"
                        htmlFor="editDoctorIconInput"
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
                      id="editDoctorIconInput"
                      onChange={editDoctorChangeIcon}
                    />
                  </div>
                  {editDoctorIcon.icon === "" ? (
                    ""
                  ) : (
                    <div className="mt-2 mb-2 d-flex align-items-center justify-content-md-center">
                      <label
                        className="bayanno-admin-doctor-edit-popup-content-card-select-image-button mr-3"
                        htmlFor="editDoctorIconInput"
                      >
                        Change
                      </label>
                      <button
                        className="bayanno-admin-doctor-edit-popup-content-card-remove-image-button"
                        type="button"
                        onClick={editDoctorRemoveIcon}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <div className="mt-2 mb-2 d-flex align-items-md-center justify-content-center flex-column">
                    <button
                      className="bayanno-admin-doctor-edit-popup-content-card-save-image-button mr-3"
                      type="submit"
                    >
                      <i class="fa-solid fa-check mr-1"></i>
                      <span className="ml-1">Update</span>
                    </button>
                    <p
                      className={`bayanno-admin-doctor-edit-popup-content-card-server-msg ${editServerMsg.textColor}`}
                    >
                      {editServerMsg.serverMsg}
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="bayanno-admin-doctor-edit-popup-content-card-close-button-container">
              <button
                className="bayanno-admin-doctor-edit-popup-content-card-close-button mr-3"
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
          <button className="bayanno-admin-doctor-table-data-delete-button mt-2 mb-2 mr-2">
            <i className="fa-regular fa-trash-can"></i>
            <span className="ml-1">Delete</span>
          </button>
        }
        modal={true}
        contentStyle={contentStyleDelete}
        onClose={closeEditPopup}
      >
        {(close) => (
          <div className="bayanno-admin-doctor-delete-popup-container">
            <div className="bayanno-admin-doctor-delete-popup-head-container">
              <h3 className="bayanno-admin-doctor-delete-popup-head-name">
                Bayanno Hospital Management System
              </h3>
              <button
                type="button"
                className="bayanno-admin-doctor-delete-popup-head-close-button"
                onClick={close}
              >
                <i class="fa-solid fa-xmark bayanno-admin-doctor-delete-popup-head-cross-icon"></i>
              </button>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center flex-wrap p-3 pb-3">
              <button
                className="bayanno-admin-doctor-delete-popup-button"
                type="button"
                onClick={deleteTheDoctor}
              >
                Delete
              </button>
              <button
                className="bayanno-admin-doctor-delete-popup-cancel-button"
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
      <td className="bayanno-admin-doctor-table-data">
        <img
          src={`http://localhost:5000/uploads/images/${profileImage}`}
          alt={name}
          className="bayanno-admin-doctor-table-data-icon"
        />
      </td>
      <td className="bayanno-admin-doctor-table-data">{name}</td>
      <td className="bayanno-admin-doctor-table-data">{email}</td>
      <td className="bayanno-admin-doctor-table-data">{phoneNumber}</td>
      <td className="bayanno-admin-doctor-table-data">{department}</td>
      <td className="bayanno-admin-doctor-table-data">
        <div className="d-flex align-items-center flex-wrap">
          {editPopup()}
          {deletePopup()}
        </div>
      </td>
    </tr>
  );
};

export default DoctorPageRows;
