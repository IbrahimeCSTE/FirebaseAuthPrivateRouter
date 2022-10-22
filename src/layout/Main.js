import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../component/header/LeftNav";
import Navbar from "../component/header/Navbar";
import Login from "../screen/userScreen/Login";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <LeftNav />
          </div>
          <div className="col-md-6">
            <Outlet></Outlet>
          </div>
          <div className="col-md-3">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
