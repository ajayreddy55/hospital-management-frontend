import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import Footer from "../footer";
import Navbar from "../navbar";
import doctorsProfileIcon from "../../assets/doctors-profile-icon.jpg";
import { v4 as uuidV4 } from "uuid";

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

const BayannoDoctorsPage = () => {
  const params = useParams();
  const location = useLocation();
  const { id } = params;

  let doctorsList = [];
  let department;

  if (id === "0") {
    for (let i of departmentList) {
      doctorsList.push(...i.doctors);
      department = {
        name: "All Departments",
      };
    }
  } else {
    department = departmentList.find(
      (eachObject) => eachObject.id === parseInt(id)
    );
    doctorsList = department.doctors;
  }

  return (
    <div className="bayanno-doctors-bg-container">
      <div className="bayanno-doctors-inner-bg-container">
        <Navbar />
        <div className="bayanno-doctors-content-container">
          <section className="bayanno-common-home-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="bayanno-common-home-heading">
                    DOCTORS OF{" "}
                    {id === "0"
                      ? "ALL DEPARTMENTS"
                      : `${department.name.toLocaleUpperCase()} DEPARTMENT`}
                  </h1>
                  <h4 className="bayanno-common-home-heading-second">
                    Home / Doctors
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-doctors-main-section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="bayanno-doctors-sidebar-container mr-2">
                    <div className="bayanno-doctors-names-sidebar-container">
                      <div className="mt-3 mb-2">
                        <div>
                          <Link
                            className="bayanno-doctors-name-item-sidebar-container"
                            to={`/bayanno/home/doctors/0`}
                          >
                            <div>
                              <p
                                className={`${
                                  `/bayanno/home/doctors/0` ===
                                  location.pathname
                                    ? "bayanno-doctors-name-item-sidebar-active"
                                    : ""
                                }`}
                              >
                                - All Departments
                              </p>
                            </div>
                          </Link>
                          <hr className="bayanno-doctors-name-item-sidebar-line" />
                        </div>
                        {departmentList.map((eachObject) => {
                          return (
                            <>
                              <Link
                                key={eachObject.id}
                                className="bayanno-doctors-name-item-sidebar-container"
                                to={`/bayanno/home/doctors/${eachObject.id}`}
                              >
                                <div>
                                  <p
                                    className={`${
                                      `/bayanno/home/doctors/${eachObject.id}` ===
                                      location.pathname
                                        ? "bayanno-doctors-name-item-sidebar-active"
                                        : ""
                                    }`}
                                  >
                                    - {eachObject.name}
                                  </p>
                                </div>
                              </Link>
                              <hr className="bayanno-doctors-name-item-sidebar-line" />
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                  <div className="bayanno-doctors-description-main-container">
                    <div className="bayanno-doctors-doctors-main-container">
                      <div className="d-flex align-items-stretch mb-4">
                        {doctorsList.map((eachObject) => {
                          return (
                            <div
                              key={eachObject.id}
                              className="bayanno-doctors-doctor-item-container"
                            >
                              <div className="mr-2 d-flex flex-column w-100">
                                <div>
                                  <img
                                    alt="doctorsProfileIcon"
                                    src={doctorsProfileIcon}
                                    className="bayanno-doctors-doctors-profile-icon"
                                  />
                                </div>
                                <div className="d-flex flex-column mt-2">
                                  <p className="bayanno-doctors-doctors-name">
                                    {eachObject.name}
                                  </p>
                                  <hr className="bayanno-doctors-doctors-hr-line" />
                                  <div className="d-flex align-items-center">
                                    <a
                                      className="mr-2"
                                      href="https://www.facebook.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-facebook-f bayanno-doctors-doctors-social-icon"></i>
                                    </a>
                                    <a
                                      className="mr-2"
                                      href="https://twitter.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-twitter bayanno-doctors-doctors-social-icon"></i>
                                    </a>
                                    <a
                                      className="mr-2"
                                      href="https://www.google.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-google-plus-g bayanno-doctors-doctors-social-icon"></i>
                                    </a>
                                    <a
                                      className="mr-2"
                                      href="https://www.linkedin.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-linkedin bayanno-doctors-doctors-social-icon"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-doctors-get-touch-container">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-3 mt-3">
                  <h3 className="bayanno-doctors-get-touch-heading">
                    Get In Touch With Our Professionals
                  </h3>
                </div>
                <div className="col-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
                  <Link className="bayanno-doctors-get-touch-link-item">
                    <p className="bayanno-doctors-get-touch-link-text">
                      MAKE AN APPOINTMENT
                    </p>
                  </Link>
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

export default BayannoDoctorsPage;
