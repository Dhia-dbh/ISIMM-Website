import { useState } from 'react';
import './register.css';

function Register() {
  
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const getpassword =(event) =>{
    setpassword(event.target.value);
  }
  const getmail =(event) =>{
    setmail(event.target.value);
  }
  const getCpassword =(event) =>{
    setCpassword(event.target.value);
  }
  const Validation= () =>{
     if (password !== Cpassword)
    {
      alert("password not compatible")
      setCpassword("");
      setpassword("");
    }
    else{
      alert("the request to create the account is sent to your institut admin, you will soon recive the mail of your account creation.");
    }
  }


    return (
      <div>   
        <form id='forum_register' >
          <legend >institut supérieur d'informatique et de mathématiques de monastir</legend>
          <h1>Register</h1>
         <label>Mail</label>
         <input type='email' onChange={getmail} placeholder='Flen.Fouleni@gmail.com' ></input>
         <br/>
         <label>Nom</label>
         <input type='text' placeholder='Flen' ></input>
         <br/>
         <label>Prenom</label>
         <input type='text' placeholder='Fouleni' ></input>
         <br/>
         <label>Password </label>
         <input type='password' onChange={getpassword} placeholder='Password' ></input>
         <label>Confirm Password </label>
         <input type='password' onChange={getCpassword}  placeholder='Confirm Password' ></input>
         <br/>
         <input type='submit' onClick={Validation}  value="Register" ></input>
        </form>
      </div>
      
    )
  }

  export default Register
