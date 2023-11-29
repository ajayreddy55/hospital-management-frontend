import "./index.css";
import Footer from "../footer";
import Navbar from "../navbar";
import { v4 as uuidV4 } from "uuid";
import { useEffect, useState } from "react";

const departmentList = [
  {
    id: 1,
    name: "Anesthetics",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    doctors: [
      {
        id: uuidV4(),
        name: "Erich Mcbride",
        phone: "+612-92-1385682",
        email: "xidim@gmail.com",
        address: "Eius sed incidunt ipsam omnis",
        degrees: "M.D. of Medicine",
        profile:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    id: 2,
    name: "Cardiology",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    doctors: [
      {
        id: uuidV4(),
        name: "MICHEAL PEWD",
        phone: "+984-46-9388638",
        email: "doctor@example.com",
        address: "Eius sed incidunt ipsam omnis",
        degrees: "M.D. of Medicine",
        profile:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 3,
    name: "Gastroenterology",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    doctors: [
      {
        id: uuidV4(),
        name: "John",
        phone: "+984-46-93886344",
        email: "doctor12@example.com",
        address: "Eius sed incidunt ipsam omnis",
        degrees: "M.D. of Medicine",
        profile:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
];

const BayannoAppointmentPage = () => {
  const [departmentId, setDepartmentId] = useState(1);
  const [patientType, setPatientType] = useState("new");

  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    let departmentObject = departmentList.find(
      (eachObject) => eachObject.id === parseInt(departmentId)
    );

    setDoctorsList(departmentObject.doctors);
  }, [departmentId]);

  return (
    <div className="bayanno-appointment-bg-container">
      <div className="bayanno-appointment-inner-bg-container">
        <Navbar />
        <div className="bayanno-appointment-content-container">
          <section className="bayanno-common-home-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="bayanno-common-home-heading">APPOINTMENT</h1>
                  <h4 className="bayanno-common-home-heading-second">
                    Home / Appointment
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-appointment-make-appointment-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-3 mt-3">
                  <h3 className="bayanno-appointment-make-appointment-heading">
                    Make An Appointment
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-appointment-main-section">
            <div className="container">
              <div className="row">
                <div className="col-12 mt-3 mb-2">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="mr-3 mt-2 mb-2">
                      <input
                        type="radio"
                        className="bayanno-appointment-patient-type-checkbox"
                        id="appointmentNewPatientCheckbox"
                        name="patientType"
                        value={"new"}
                        defaultChecked
                        onChange={(event) => setPatientType(event.target.value)}
                      />
                      <label
                        className="bayanno-appointment-patient-type-label"
                        htmlFor="appointmentNewPatientCheckbox"
                      >
                        New Patient
                      </label>
                    </div>
                    <div className="mt-2 mb-2">
                      <input
                        type="radio"
                        className="bayanno-appointment-patient-type-checkbox"
                        id="appointmentOldPatientCheckbox"
                        name="patientType"
                        value={"old"}
                        onChange={(event) => setPatientType(event.target.value)}
                      />
                      <label
                        className="bayanno-appointment-patient-type-label"
                        htmlFor="appointmentOldPatientCheckbox"
                      >
                        Old Patient
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3 mb-3">
                  <form className="bayanno-appointment-form-container">
                    <div className={`${patientType === "new" ? "" : "d-none"}`}>
                      <div className="mt-3 mb-3">
                        <label
                          className="bayanno-appointment-form-label"
                          htmlFor="appointmentPatientName"
                        >
                          NAME
                        </label>
                        <input
                          id="appointmentPatientName"
                          className="bayanno-appointment-form-input"
                          placeholder="Enter Your Name"
                          type="text"
                        />
                      </div>
                      <div className="mt-4 mb-3">
                        <label
                          className="bayanno-appointment-form-label"
                          htmlFor="appointmentPatientEmail"
                        >
                          EMAIL
                        </label>
                        <input
                          id="appointmentPatientEmail"
                          className="bayanno-appointment-form-input"
                          placeholder="Enter Your Email"
                          type="text"
                        />
                      </div>
                      <div className="mt-4 mb-3">
                        <label
                          className="bayanno-appointment-form-label"
                          htmlFor="appointmentPatientPhone"
                        >
                          PHONE
                        </label>
                        <input
                          id="appointmentPatientPhone"
                          className="bayanno-appointment-form-input"
                          placeholder="Enter Your Phone Number"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className={`${patientType === "old" ? "" : "d-none"}`}>
                      <div className="mt-3 mb-3">
                        <label
                          className="bayanno-appointment-form-label"
                          htmlFor="appointmentPatientCode"
                        >
                          PATIENT CODE
                        </label>
                        <input
                          id="appointmentPatientCode"
                          className="bayanno-appointment-form-input"
                          placeholder="Enter Your Code"
                          type="text"
                        />
                        <p className="bayanno-appointment-form-patient-code-text">
                          Log In To Patient Account To See Your Code
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-appointment-form-label"
                        htmlFor="appointmentPatientDate"
                      >
                        DATE
                      </label>
                      <input
                        id="appointmentPatientDate"
                        className="bayanno-appointment-form-input"
                        placeholder="Enter Your Date"
                        type="date"
                      />
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-appointment-form-label"
                        htmlFor="appointmentPatientDepartment"
                      >
                        DEPARTMENT
                      </label>
                      <select
                        id="appointmentPatientDepartment"
                        className="bayanno-appointment-form-input"
                        placeholder="Select Department"
                        value={departmentId}
                        onChange={(event) =>
                          setDepartmentId(event.target.value)
                        }
                      >
                        {departmentList.map((eachObject) => (
                          <option key={eachObject.id} value={eachObject.id}>
                            {eachObject.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-appointment-form-label"
                        htmlFor="appointmentPatientDoctor"
                      >
                        DOCTOR
                      </label>
                      <select
                        id="appointmentPatientDoctor"
                        className="bayanno-appointment-form-input"
                        placeholder="Select Department"
                      >
                        {doctorsList.map((eachObject) => (
                          <option key={eachObject.id} value={eachObject.id}>
                            {eachObject.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-4 mb-3">
                      <label
                        className="bayanno-appointment-form-label"
                        htmlFor="appointmentPatientMessage"
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="appointmentPatientMessage"
                        className="bayanno-appointment-form-input"
                        placeholder="Enter Your Message"
                        rows={7}
                        cols={55}
                      ></textarea>
                    </div>
                    <div className="mt-4 mb-3">
                      <div className="bayanno-appointment-not-robot-container">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="bayanno-appointment-not-robot-checkbox"
                          />
                          <label className="bayanno-appointment-not-robot-label">
                            I'm not a robot
                          </label>
                        </div>
                        <div>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"
                            className="bayanno-appointment-not-robot-image"
                            alt="captchaImage"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-3">
                      <button
                        className="bayanno-appointment-book-now-button"
                        type="submit"
                      >
                        <i class="fa-regular fa-calendar-days mr-3 mt-1"></i>
                        <span className="mt-1">BOOK NOW</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BayannoAppointmentPage;
