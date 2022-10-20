import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/FirebaseAuth";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let userAuth = JSON.parse(localStorage.getItem("User"));

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const googleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //let newUser = {};
        const user = result.user;
        //newUser.client - user;
        localStorage.setItem("User", JSON.stringify(user));
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="text-center">
        <h1>Login</h1>
        <button
          onClick={googleSign}
          type="button"
          className="btn btn-outline-secondary"
        >
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
