import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Cookies from "js-cookie";

const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const storedToken = Cookies.get("isimmAuthToken");
  return auth?.id_token || storedToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
