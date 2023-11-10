import AdminNavbar from "../adminnavbar";
import AdminSidebar from "../adminsidebar";
import "./index.css";

const AdminDashboard = () => {
  return (
    <div className="bayanno-admin-dashboard-main-container">
      <div className="container-fluid bayanno-admin-height-container">
        <div className="row d-md-none">
          <div className="col-12 p-0">
            <AdminNavbar />
          </div>
        </div>
        <div className="row bayanno-admin-height-container">
          <div className="col-12 bayanno-admin-height-container p-0">
            <div className="bayanno-admin-height-container">
              <AdminSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
