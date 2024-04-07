import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function NavBarItem({ _key, isScrolled, item }) {
  const location = useLocation();
  const currentPath = location.pathname; // Get the entire path after domain
  const navigate = useNavigate();
  return (
    <a
      key={_key}
      className={
        "linkTo " + (isScrolled ? "isScrolledText" : "notScrolledText")
      }
      href={"#"}
      onClick={(e) => {
        e.preventDefault();
        if (currentPath !== item.path) {
          navigate(item.path);
        }
      }}
    >
      {item.name}{" "}
    </a>
  );
}
