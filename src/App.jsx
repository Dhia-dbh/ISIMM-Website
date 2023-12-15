import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/login';

function App() {
  for(var i=0 ; i<5 ; i++)
  {
    console.log(i);
  }
  const [count, setCount] = useState(0)
  const styles = {
    //color: "green",
    borderWidth: 1,
    borderStyle: "solid"
  };
  

  return (
    <Login></Login>
  )
}

export default App
