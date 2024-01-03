import React from "react";
export default function NavBarItem({ isScrolled, item }) {
  return (
    <a
      className={isScrolled ? "isScrolledText" : "notScrolledText"}
      href={item.path}
    >
      {item.name}{" "}
    </a>
  );
}
