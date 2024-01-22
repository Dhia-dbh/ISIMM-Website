import "./login.css";

function Login() {

  return (
    <div >
    <div id="forum_login" >
      <form >
        <legend>
          institut supérieur d'informatique et de mathématiques de monastir
        </legend>
        <h1>Login</h1>

        <label>Login </label>
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
