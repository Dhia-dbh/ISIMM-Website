// Desc: This is the main entry point for the application
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/commun/not-found";
import Home from "./components/home/home";
import "./App.css";

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

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
