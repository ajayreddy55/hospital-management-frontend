import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import bayannoLogo from "../../assets/bayanno-hospital-logo.png";

import "./index.css";
import { useEffect, useState } from "react";

const BayannoLogin = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState({
    emailInput: "",
    emailRequiredText: "",
  });

  const [userPassword, setUserPassword] = useState({
    passwordInput: "",
    passwordRequiredText: "",
  });

  const [loginErrorMessage, setLoginErrorMessage] = useState();

  useEffect(() => {
    const hospitalJWTToken = Cookies.get("hospital-jwt-token");
    if (hospitalJWTToken !== undefined) {
      navigate("/bayanno/admin/dashboard");
    }
    //eslint-disable-next-line
  }, []);

  const changeUserEmail = (event) => {
    setLoginErrorMessage("");

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
    setLoginErrorMessage("");

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

  const saveJWTTokenAndNavigate = (jwtToken) => {
    Cookies.set("hospital-jwt-token", jwtToken, { expires: 1 });
    navigate("/bayanno/admin/dashboard");
  };

  const loginTheUser = async () => {
    const url = "http://localhost:5000/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: userEmail.emailInput,
        password: userPassword.passwordInput,
      }),
    };

    const loginRes = await fetch(url, options);

    if (loginRes.ok) {
      const loginResJson = await loginRes.json();
      saveJWTTokenAndNavigate(loginResJson.token);
    } else {
      const loginResJson = await loginRes.json();
      setLoginErrorMessage(loginResJson.message);
    }
  };

  const validateLoginForm = () => {
    if (userEmail.emailInput === "") {
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
      loginTheUser();
    }
  };

  const submitLoginForm = (event) => {
    event.preventDefault();
    validateLoginForm();
  };

  return (
    <div className="bayanno-login-bg-container">
      <div className="container-fluid bayanno-login-height">
        <div className="row bayanno-login-height">
          <div className="col-12 col-md-5 p-0 bayanno-login-height">
            <div className="bayanno-login-form-container">
              <div className="bayanno-login-logo-container mb-4">
                <img
                  src={bayannoLogo}
                  alt="bayannoLogo"
                  className="bayanno-login-logo"
                />
                <h3 className="bayanno-login-hospital-name">
                  Bayanno Hospital Management System
                </h3>
              </div>
              <form
                className="bayanno-login-form mt-5"
                onSubmit={submitLoginForm}
              >
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <input
                    type="text"
                    className="bayanno-login-email-input"
                    placeholder="Email"
                    name="login-email"
                    value={userEmail.emailInput}
                    onChange={changeUserEmail}
                  />
                  <p className="bayanno-login-email-required-text">
                    {userEmail.emailRequiredText}
                  </p>
                </div>
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <input
                    type="password"
                    className="bayanno-login-email-input"
                    placeholder="Password"
                    name="login-password"
                    value={userPassword.passwordInput}
                    onChange={changeUserPassword}
                  />
                  <p className="bayanno-login-email-required-text">
                    {userPassword.passwordRequiredText}
                  </p>
                </div>
                <div className="w-100 d-flex flex-column mt-2 mb-2">
                  <button className="bayanno-login-button" type="submit">
                    Login
                  </button>
                  <p className="bayanno-login-error-text">
                    {loginErrorMessage}
                  </p>
                </div>
              </form>
              <div className="bayanno-login-forgot-container mt-2 mb-3">
                <Link className="bayanno-login-forgot-link-item">
                  Forgot Your Password ?
                </Link>
              </div>
              <div className="bayanno-login-hr-line-container mt-3 mb-2">
                <hr className="bayanno-login-hr-line" />
              </div>
              <div className="bayanno-login-signup-button-container mt-2 mb-2">
                <Link
                  className="bayanno-login-signup-button"
                  to={"/bayanno/signup"}
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-7 p-0 bayanno-login-height">
            <div className="bayanno-login-page-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayannoLogin;
