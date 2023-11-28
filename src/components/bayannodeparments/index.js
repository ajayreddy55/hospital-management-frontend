import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import Footer from "../footer";
import Navbar from "../navbar";
import BayannoDepartmentFacilities from "../bayannodepfacilities";
import doctorsProfileIcon from "../../assets/doctors-profile-icon.jpg";

const departmentList = [
  {
    id: 1,
    name: "Anesthetics",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    departmentFacilities: [
      {
        id: 1,
        title: "Nor is there anyone who loves pain because it is pain",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
      {
        id: 2,
        title: "Nor is there anyone who loves pain because it is pain",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
    ],
    doctors: [
      {
        id: 1,
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
    departmentFacilities: [
      {
        id: 1,
        title: "Nor is there anyone who loves pain because it is pain",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
      {
        id: 2,
        title: "Nor is there anyone who loves pain because it is pain",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
    ],
    doctors: [
      {
        id: 1,
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
    departmentFacilities: [
      {
        id: 1,
        title: "Nor is there anyone who loves pain because it is pain",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
      {
        id: 2,
        title: "Nor is there anyone who loves pain because it is pain",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
    ],
    doctors: [
      {
        id: 1,
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

const BayannoDepartmentsPage = () => {
  const params = useParams();
  const location = useLocation();
  const { id } = params;

  const depObject = departmentList.find(
    (eachObject) => eachObject.id === parseInt(id)
  );

  return (
    <div className="bayanno-departments-bg-container">
      <div className="bayanno-departments-inner-bg-container">
        <Navbar />
        <div className="bayanno-departments-content-container">
          <section className="bayanno-common-home-heading-container">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="bayanno-common-home-heading">
                    {depObject.name.toLocaleUpperCase()}
                  </h1>
                  <h4 className="bayanno-common-home-heading-second">
                    Home / {depObject.name}
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-departments-main-section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="bayanno-departments-sidebar-container mr-2">
                    <div className="bayanno-departments-names-sidebar-container">
                      <div className="mt-3 mb-2">
                        {departmentList.map((eachObject) => {
                          return (
                            <>
                              <Link
                                key={eachObject.id}
                                className="bayanno-departments-name-item-sidebar-container"
                                to={`/bayanno/home/departments/${eachObject.id}`}
                              >
                                <div>
                                  <p
                                    className={`${
                                      `/bayanno/home/departments/${eachObject.id}` ===
                                      location.pathname
                                        ? "bayanno-departments-name-item-sidebar-active"
                                        : ""
                                    }`}
                                  >
                                    - {eachObject.name}
                                  </p>
                                </div>
                              </Link>
                              <hr className="bayanno-departments-name-item-sidebar" />
                            </>
                          );
                        })}
                      </div>
                      <Link className="bayanno-departments-sidebar-book-link-item mt-3 mb-3">
                        <span>BOOK AN APPOINTMENT</span>
                      </Link>
                    </div>
                    <div className="d-flex flex-column mt-3 mb-3">
                      <h5 className="bayanno-departments-sidebar-contact-heading">
                        For Emergency Contact
                      </h5>
                      <h2 className="bayanno-departments-sidebar-contact-number">
                        1-800-400-7400
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                  <div className="bayanno-departments-description-main-container">
                    <div className="bayanno-departments-description-text-container">
                      <p>{depObject.description}</p>
                    </div>
                    <div className="bayanno-departments-facilities-main-container mt-3">
                      <div>
                        <h3 className="bayanno-departments-facilities-heading">
                          {depObject.name} Department Facilities
                        </h3>
                        <span className="bayanno-departments-facilities-short-line"></span>
                      </div>
                      <div className="d-flex flex-column mt-4 mb-4">
                        {depObject.departmentFacilities.map((eachObject) => (
                          <BayannoDepartmentFacilities
                            key={eachObject.id}
                            eachObject={eachObject}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bayanno-departments-doctors-main-container mt-3">
                      <div>
                        <h3 className="bayanno-departments-facilities-heading">
                          Awesome Doctors Of {depObject.name} Department
                        </h3>
                        <span className="bayanno-departments-facilities-short-line"></span>
                      </div>
                      <div className="d-flex align-items-stretch mt-4 mb-4">
                        {depObject.doctors.map((eachObject) => {
                          return (
                            <div
                              key={eachObject.id}
                              className="bayanno-departments-doctor-item-container"
                            >
                              <div className="mr-2 d-flex flex-column w-100">
                                <div>
                                  <img
                                    alt="doctorsProfileIcon"
                                    src={doctorsProfileIcon}
                                    className="bayanno-departments-doctors-profile-icon"
                                  />
                                </div>
                                <div className="d-flex flex-column mt-2">
                                  <p className="bayanno-departments-doctors-department">
                                    {depObject.name}
                                  </p>
                                  <p className="bayanno-departments-doctors-name">
                                    {eachObject.name}
                                  </p>
                                  <hr className="bayanno-departments-doctors-hr-line" />
                                  <div className="d-flex align-items-center">
                                    <a
                                      className="mr-2"
                                      href="https://www.facebook.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-facebook-f bayanno-departments-doctors-social-icon"></i>
                                    </a>
                                    <a
                                      className="mr-2"
                                      href="https://twitter.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-twitter bayanno-departments-doctors-social-icon"></i>
                                    </a>
                                    <a
                                      className="mr-2"
                                      href="https://www.google.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-google-plus-g bayanno-departments-doctors-social-icon"></i>
                                    </a>
                                    <a
                                      className="mr-2"
                                      href="https://www.linkedin.com/"
                                      target="__blank"
                                    >
                                      <i class="fa-brands fa-linkedin bayanno-departments-doctors-social-icon"></i>
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
          <section className="bayanno-departments-get-touch-container">
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

export default BayannoDepartmentsPage;
