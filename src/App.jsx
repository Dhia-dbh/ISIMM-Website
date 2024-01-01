import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  const styles = {
    //color: "green",
    borderWidth: 1,
    borderStyle: "solid"
  };
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App;
