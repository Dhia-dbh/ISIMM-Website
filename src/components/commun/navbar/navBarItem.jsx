import React from "react";
import { useLocation } from "react-router-dom";
export default function NavBarItem({ _key, isScrolled, item }) {
  const location = useLocation();
  const currentPath = location.pathname; // Get the entire path after domain

  return (
    <a
      key={_key}
      className={isScrolled ? "isScrolledText" : "notScrolledText"}
      href={item.path}
      onClick={(e) => {
        if (currentPath === item.path) {
          e.preventDefault();
        }
      }}
    >
      {item.name}{" "}
    </a>
  );
}
