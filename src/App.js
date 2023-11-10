import { Route, Routes } from "react-router-dom";

import "./App.css";
import BayannoHome from "./components/bayannohome";
import BayannoLogin from "./components/bayannologin";
import BayannoSignUp from "./components/bayannosignup";
import AdminDashboard from "./components/adminpage/dashboardpage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/bayanno/home" element={<BayannoHome />} />
      <Route exact path="/bayanno/login" element={<BayannoLogin />} />
      <Route exact path="/bayanno/signup" element={<BayannoSignUp />} />
      <Route
        exact
        path="/bayanno/admin/dashboard"
        element={<AdminDashboard />}
      />
    </Routes>
  );
};

export default App;
