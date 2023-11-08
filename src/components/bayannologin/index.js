import bayannoLogo from "../../assets/bayanno-hospital-logo.png";

import "./index.css";

const BayannoLogin = () => {
  return (
    <div className="bayanno-login-bg-container">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12 col-md-5 p-0 h-100">
            <div className="bayanno-login-form-container">
              <div>
                <img
                  src={bayannoLogo}
                  alt="bayannoLogo"
                  className="bayanno-login-logo"
                />
                <h3 className="bayanno-login-hospital-name">
                  Bayanno Hospital Management System
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayannoLogin;
