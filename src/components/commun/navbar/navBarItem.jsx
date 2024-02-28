import React from "react";
export default function NavBarItem({ isScrolled, item }) {
  return (
    <a
      className={isScrolled ? "isScrolledText" : "notScrolledText"}
      href={item.path}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {item.name}{" "}
    </a>
  );
}
