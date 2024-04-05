import { useState } from "react";

import NavBar2 from "../commun/navbar/NavBar2";
import isimm1 from "../../assets/logoNoBg.png";
import axios from '../../api/axios'

import "./login.css";
function Login() {
  const LOGIN_URL = '/api/authenticate';
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!PASSWORD_REGEX.test(password)){
      alert("Please enter a valid password"); //TODO: replace alert with tostify
      setErrorMsg("Please enter a valid password")
      return
    }
    try{
      const response = await axios.post(LOGIN_URL, JSON.stringify({
        email: username, password, rememberMe
      }), 
      {
        headers: {"Content-Type": 'application/json'},
        withCredentials: true
      }
    );
    console.log(response?.accessToken);
    setEmail("");
    setPassword("");
    }catch(err){
    if ( !err?.response ) {
    setErrorMsg('No Server Response') ;
    } else if (err. response?.status == 409){
    setErrorMsg('Username Taken');
    } else {
    setErrorMsg('Registration Failed');
    }
  } 
  }
  return (
    <div class="background">
      <div id="forum_login">
          <div class="title">
            <img src={isimm1} class="imge"></img>
            <h5>
              institut supérieur d'informatique et de mathématiques de monastir
            </h5>
          </div>
          <h1>Login</h1>
          {
            errorMsg
            ?
            <div class="alert alert-danger" role="alert">
              {errorMsg}
            </div>
            :null
          }
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">E-Mail </label>
          <input id="email" type="email" placeholder="Flen.Fouleni@gmail.com" onChange={setEmail} />
          <br />
          <div><label htmlFor="password">Password </label></div>
          <input id="password" type="password" placeholder="Password" onChange={setPassword} />
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
