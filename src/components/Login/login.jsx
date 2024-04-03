import NavBar2 from "../commun/navbar/NavBar2";
import "./login.css";
import isimm1 from "../../assets/logoNoBg.png";
function Login() {
  return (
    <div class="background">
      <div id="forum_login">
        <form>
          <div class="title">
            <img src={isimm1} class="imge"></img>
            <h5>
              institut supérieur d'informatique et de mathématiques de monastir
            </h5>
          </div>
          <h1>Login</h1>

          <label>Mail </label>
          <input type="text" placeholder="Flen.Fouleni@gmail.com"></input>
          <br />
          <label>Password </label>
          <input type="password" placeholder="Password"></input>
          <br />
          <input type="submit" value="Login"></input>
          <br></br>
          <a href="https://www.facebook.com/">first time ?</a>
          <br />
          <a href="https://www.facebook.com/"> Forgot password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
