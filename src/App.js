import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import BayannoHome from "./components/bayannohome";
import BayannoLogin from "./components/bayannologin";
import BayannoSignUp from "./components/bayannosignup";
import AdminDashboard from "./components/adminpage/dashboardpage";
import AdminDepartment from "./components/adminpage/departmentpage";
import AdminDepartmentFacilities from "./components/adminpage/departmentfacilities";
import ProtectedRoute from "./components/protectedRoute";
import AdminDoctorPage from "./components/adminpage/doctorpagemain/doctorpage";
import AdminPatientPage from "./components/adminpage/patientpagemain/patientpage";
import AdminNursePage from "./components/adminpage/nursepagemain/nursepage";
import AdminPharmacistPage from "./components/adminpage/pharmacistpagemain/pharmacistpage";
import AdminLaboratoristPage from "./components/adminpage/laboratoristmainpage/laboratoristpage";
import AdminAccountantPage from "./components/adminpage/accountantmainpage/accountantpage";
import AdminReceptionistPage from "./components/adminpage/receptionistmainpage/receptionistpage";
import AdminAccountPage from "./components/adminpage/adminaccountpage";
import BayannoDepartmentsPage from "./components/bayannodeparments";
import BayannoDoctorsPage from "./components/bayannodoctors";
import BayannoAboutUsPage from "./components/bayannoaboutus";
import BayannoAppointmentPage from "./components/bayannoappointment";
import BayannoBlogsPage from "./components/bayannoblogs";
import BayannoBlogDetailsPage from "./components/bayannoblogdetails";
import BayannoContactPage from "./components/bayannocontact";

const App = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Navigate to="/bayanno/home" replace={true} />}
      />
      <Route exact path="/bayanno/home" element={<BayannoHome />} />
      <Route exact path="/bayanno/login" element={<BayannoLogin />} />
      <Route exact path="/bayanno/signup" element={<BayannoSignUp />} />
      <Route
        exact
        path="/bayanno/home/departments/:id"
        element={<BayannoDepartmentsPage />}
      />
      <Route
        exact
        path="/bayanno/home/doctors/:id"
        element={<BayannoDoctorsPage />}
      />
      <Route
        exact
        path="/bayanno/home/about"
        element={<BayannoAboutUsPage />}
      />
      <Route
        exact
        path="/bayanno/home/appointment"
        element={<BayannoAppointmentPage />}
      />
      <Route exact path="/bayanno/home/blogs" element={<BayannoBlogsPage />} />
      <Route
        exact
        path="/bayanno/home/blogs-details/:id"
        element={<BayannoBlogDetailsPage />}
      />
      <Route
        exact
        path="/bayanno/home/contact"
        element={<BayannoContactPage />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          exact
          path="/bayanno/admin/dashboard"
          element={<AdminDashboard />}
        />
        <Route
          exact
          path="/bayanno/admin/department"
          element={<AdminDepartment />}
        />
        <Route
          exact
          path="/bayanno/admin/department_facilities/:departmentId"
          element={<AdminDepartmentFacilities />}
        />
        <Route
          exact
          path="/bayanno/admin/doctor"
          element={<AdminDoctorPage />}
        />
        <Route
          exact
          path="/bayanno/admin/patient"
          element={<AdminPatientPage />}
        />
        <Route exact path="/bayanno/admin/nurse" element={<AdminNursePage />} />
        <Route
          exact
          path="/bayanno/admin/pharmacist"
          element={<AdminPharmacistPage />}
        />
        <Route
          exact
          path="/bayanno/admin/laboratorist"
          element={<AdminLaboratoristPage />}
        />
        <Route
          exact
          path="/bayanno/admin/accountant"
          element={<AdminAccountantPage />}
        />
        <Route
          exact
          path="/bayanno/admin/receptionist"
          element={<AdminReceptionistPage />}
        />
        <Route
          exact
          path="/bayanno/admin/account"
          element={<AdminAccountPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
