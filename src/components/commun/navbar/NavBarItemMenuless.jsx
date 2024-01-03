import React from "react";
import NavBarItem from "./navBarItem";
export function NavBarItemMenuless({ _key, isScrolled, item }) {
  return (
    <li>
      <NavBarItem _key={_key} isScrolled={isScrolled} item={item} />
    </li>
  );
}
