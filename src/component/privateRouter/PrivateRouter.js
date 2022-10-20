import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let auth = JSON.parse(localStorage.getItem("User"));
  let location = useLocation();
  //console.log(auth.email);

  if (!auth) {
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
