import { Navigate, Outlet } from "react-router-dom";
// call useAuth
const PrivateRoutes = () => {
  const auth = {accessToken: ''} // replace

  return auth?.accessToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
