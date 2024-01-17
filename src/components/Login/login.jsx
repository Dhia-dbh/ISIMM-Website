import { useState } from 'react';
import './login.css';


function Login() {
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

export default Login;
