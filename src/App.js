import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import BayannoHome from "./components/bayannohome";
import BayannoLogin from "./components/bayannologin";
import BayannoSignUp from "./components/bayannosignup";
import AdminDashboard from "./components/adminpage/dashboardpage";
import AdminDepartment from "./components/adminpage/departmentpage";
import AdminDepartmentFacilities from "./components/adminpage/departmentfacilities";
import ProtectedRoute from "./components/protectedRoute";

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
      </Route>
    </Routes>
  );
};

export default App;
