import "./index.css";

const AdminFooter = () => {
  return (
    <div className="row">
      <div className="col-12 mt-3">
        <div className="w-100">
          <hr className="bayanno-admin-footer-hr-line" />
        </div>
      </div>
      <div className="col-12 mt-1 mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <i className="fa-regular fa-copyright bayanno-admin-footer-copyright-icon"></i>
            <p className="bayanno-admin-footer-copyright-text">
              2017{" "}
              <span className="bayanno-admin-footer-copyright-hospital-name">
                Bayanno Hospital Management System
              </span>{" "}
              Developed by{" "}
              <span className="bayanno-admin-footer-copyright-hospital-name">
                Ajay Reddy
              </span>
            </p>
          </div>
          <p className="bayanno-admin-footer-version-text">VERSION 4.0</p>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;
