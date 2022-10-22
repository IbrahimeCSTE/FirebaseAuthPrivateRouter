import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../screen/Auth/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);
  return (
    <div>
      <ul className="d-flex bg-light p-2">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/user/login">
          <li>Login</li>
        </Link>
        <Link>{user?.displayName}</Link>
      </ul>
    </div>
  );
};

export default Navbar;
