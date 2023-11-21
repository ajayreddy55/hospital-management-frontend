import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("hospital-jwt-token");

  if (jwtToken === undefined) {
    return <Navigate to={"/bayanno/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
