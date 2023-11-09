import { Link, useNavigate } from "react-router-dom";

import bayannoLogo from "../../assets/bayanno-hospital-logo.png";

import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const BayannoSignUp = () => {
  const [userName, setUserName] = useState({
    nameInput: "",
    nameRequiredText: "",
  });

  const [userEmail, setUserEmail] = useState({
    emailInput: "",
    emailRequiredText: "",
  });

  const [userPassword, setUserPassword] = useState({
    passwordInput: "",
    passwordRequiredText: "",
  });

  const [signupErrorMessage, setSignupErrorMessage] = useState({
    errMsg: "",
    textColor: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const hospitalJWTToken = Cookies.get("hospital-jwt-token");
    if (hospitalJWTToken !== undefined) {
      navigate("/bayanno/admin/dashboard");
    }
    //eslint-disable-next-line
  }, []);

  const changeUserName = (event) => {
    setSignupErrorMessage((prevState) => ({
      ...prevState,
      errMsg: "",
      textColor: "",
    }));

    const nameEntered = event.target.value;

    if (nameEntered === "") {
      setUserName((prevState) => ({
        ...prevState,
        nameInput: "",
        nameRequiredText: "Required*",
      }));
    } else {
      setUserName((prevState) => ({
        ...prevState,
        nameInput: nameEntered,
        nameRequiredText: "",
      }));
    }
  };

  const changeUserEmail = (event) => {
    setSignupErrorMessage((prevState) => ({
      ...prevState,
      errMsg: "",
      textColor: "",
    }));

    const emailEntered = event.target.value;

    if (emailEntered === "") {
      setUserEmail((prevState) => ({
        ...prevState,
        emailInput: "",
        emailRequiredText: "Required*",
      }));
    } else {
      setUserEmail((prevState) => ({
        ...prevState,
        emailInput: emailEntered,
        emailRequiredText: "",
      }));
    }
  };

  const changeUserPassword = (event) => {
    setSignupErrorMessage((prevState) => ({
      ...prevState,
      errMsg: "",
      textColor: "",
    }));

    const passwordEntered = event.target.value;

    if (passwordEntered === "") {
      setUserPassword((prevState) => ({
        ...prevState,
        passwordInput: "",
        passwordRequiredText: "Required*",
      }));
    } else {
      setUserPassword((prevState) => ({
        ...prevState,
        passwordInput: passwordEntered,
        passwordRequiredText: "",
      }));
    }
  };

  const registerNewUser = async () => {
    const url = "http://localhost:5000/auth/signup";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: userName.nameInput,
        email: userEmail.emailInput,
        password: userPassword.passwordInput,
      }),
    };

    const signupRes = await fetch(url, options);

    if (signupRes.ok) {
      const signupResJson = await signupRes.json();
      setSignupErrorMessage((prevState) => ({
        ...prevState,
        errMsg: signupResJson.message,
        textColor: "success-msg-signup",
      }));
      setUserName((prevState) => ({
        ...prevState,
        nameInput: "",
        nameRequiredText: "",
      }));
      setUserEmail((prevState) => ({
        ...prevState,
        emailInput: "",
        emailRequiredText: "",
      }));
      setUserPassword((prevState) => ({
        ...prevState,
        passwordInput: "",
        passwordRequiredText: "",
      }));
    } else {
      const signupResJson = await signupRes.json();
      setSignupErrorMessage((prevState) => ({
        ...prevState,
        errMsg: signupResJson.message,
        textColor: "",
      }));
    }
  };

  const validateSignupForm = () => {
    if (userName.nameInput === "") {
      setUserName((prevState) => ({
        ...prevState,
        nameInput: "",
        nameRequiredText: "Required*",
      }));
    } else if (userEmail.emailInput === "") {
      setUserEmail((prevState) => ({
        ...prevState,
        emailInput: "",
        emailRequiredText: "Required*",
      }));
    } else if (userPassword.passwordInput === "") {
      setUserPassword((prevState) => ({
        ...prevState,
        passwordInput: "",
        passwordRequiredText: "Required*",
      }));
    } else {
      registerNewUser();
    }
  };

  const submitSignupForm = (event) => {
    event.preventDefault();
    validateSignupForm();
  };

  return (
    <div className="bayanno-signup-bg-container">
      <div className="container-fluid bayanno-signup-height">
        <div className="row bayanno-signup-height">
          <div className="col-12 col-md-5 p-0 bayanno-signup-height">
            <div className="bayanno-signup-form-container">
              <div className="bayanno-signup-logo-container mb-4">
                <img
                  src={bayannoLogo}
                  alt="bayannoLogo"
                  className="bayanno-signup-logo"
                />
                <h3 className="bayanno-signup-hospital-name">
                  Bayanno Hospital Management System
                </h3>
              </div>
              <form
                className="bayanno-signup-form mt-5"
                onSubmit={submitSignupForm}
              >
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <input
                    type="text"
                    className="bayanno-signup-email-input"
                    placeholder="Name"
                    name="signup-name"
                    value={userName.nameInput}
                    onChange={changeUserName}
                  />
                  <p className="bayanno-signup-email-required-text">
                    {userName.nameRequiredText}
                  </p>
                </div>
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <input
                    type="text"
                    className="bayanno-signup-email-input"
                    placeholder="Email"
                    name="signup-email"
                    value={userEmail.emailInput}
                    onChange={changeUserEmail}
                  />
                  <p className="bayanno-signup-email-required-text">
                    {userEmail.emailRequiredText}
                  </p>
                </div>
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <input
                    type="password"
                    className="bayanno-signup-email-input"
                    placeholder="Password"
                    name="signup-password"
                    value={userPassword.passwordInput}
                    onChange={changeUserPassword}
                  />
                  <p className="bayanno-signup-email-required-text">
                    {userPassword.passwordRequiredText}
                  </p>
                </div>
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <button className="bayanno-signup-button" type="submit">
                    Signup
                  </button>
                  <p
                    className={`bayanno-signup-error-text ${signupErrorMessage.textColor}`}
                  >
                    {signupErrorMessage.errMsg}
                  </p>
                </div>
              </form>
              <div className="bayanno-signup-hr-line-container mt-3 mb-2">
                <hr className="bayanno-signup-hr-line" />
              </div>
              <div className="bayanno-signup-login-button-container mt-2 mb-2">
                <Link
                  className="bayanno-signup-login-button"
                  to={"/bayanno/login"}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-7 p-0 bayanno-signup-height">
            <div className="bayanno-signup-page-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayannoSignUp;
