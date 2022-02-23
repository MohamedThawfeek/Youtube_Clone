import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { auth, facebook, google } from "../firebade/firebase";
import { signInWithPopup } from "firebase/auth";
import { addUser } from "../Redux/Action/User";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const dispatch = useDispatch();

  const googleauth = async () => {
    const result = await signInWithPopup(auth, google);
    dispatch(addUser(result.user));
  };
  const facebookauth = async () => {
    const result = await signInWithPopup(auth, facebook);
    dispatch(addUser(result.user));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
        <div className="login__buttons">
          <Button className="button1" onClick={googleauth}>
            {" "}
            <GoogleIcon className="GoogleIcon" /> Sign in with Google
          </Button>
          <Button className="button2" onClick={facebookauth}>
            {" "}
            <FacebookIcon className="FacebookIcon" /> Sign in with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
