
import "./login.css";


function Login() {
<<<<<<< HEAD
  const styles = {
    //color: "green",
    borderWidth: 1,
    borderStyle: "solid",
  };

  return (
    <div>
      <form style={styles}>
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
        <a>Forgot password</a>
      </form>
    </div>
  );
}

=======
    return (
      <div  >    
        <form id='forum_login' >
          <legend >institut supérieur d'informatique et de mathématiques de monastir</legend>
          <h1>Login</h1>
          
         <label>Login </label>
         <input type='text' placeholder='Flen.Fouleni@gmail.com' ></input>
         <br/>
         <label>Password </label>
         <input type='password' placeholder='Password' ></input>
         <br/>
         <input type='submit' value="Login" ></input>
         <br></br>
         {/* Add navigation to the register page*/}
         <a href='https://www.youtube.com/watch?v=24rZwis4npw' >first time ?</a>
         <br/>
         <a>Forgot password</a>
        </form>
      </div>
      
    )
  }

>>>>>>> 9654098d7a02da0a52c472ed30f158462ddd1a52
export default Login;
