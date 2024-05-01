import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import useAuth from "../../hooks/useAuth";

import isimm1 from "../../assets/logoNoBg.png";
import axios from "axios";

import "./login.css";
function Login() {
  const LOGIN_URL = "/api/authenticate";
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg();
    //if (!PASSWORD_REGEX.test(password)){
    if (false) {
      alert("Please enter a valid password"); //TODO: replace alert with tostify
      setErrorMsg("Please enter a valid password");
      return;
    }
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          //username: email, password, rememberMe
          username: "admin",
          password: "admin",
          rememberMe: false,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      const idToken = response?.data?.id_token;
      setAuth({ id_token: idToken });
      setEmail("");
      setPassword("");
      Cookies.set("isimmAuthToken", idToken, {
        expires: (1 / 24 / 60) * 1,
        secure: true,
        httpOnly: false,
      });
      console.log("from: ", from);
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response");
      } else if (err.response?.status == 400) {
        setErrorMsg("Missing Email or Password");
      } else if (err.response?.status == 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
    }
  };
  return (
    <div className="background">
      <div id="forum_login">
        <div className="title">
          <img src={isimm1} className="imge"></img>
          <h5>
            institut supérieur d'informatique et de mathématiques de monastir
          </h5>
        </div>
        <h1>Login</h1>
        {errorMsg ? (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail </label>
          <input
            id="email"
            type="text"
            placeholder="Flen.Fouleni@gmail.com"
            onChange={setEmail}
          />
          <br />
          <div>
            <label htmlFor="password">Password </label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
          <br />
          <button> Login </button>
          <br></br>
          <a href="">first time ?</a>
          <br />
          <a href="https://www.facebook.com/"> Forgot password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
