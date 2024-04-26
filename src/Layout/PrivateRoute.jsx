import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { CommonContext } from "./CommonRoute";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(CommonContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 z-10 border-green-500 fixed top-[50%] left-[50%]"></div>
    );
  }

  if (user) {
    return <>{children}</>;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
