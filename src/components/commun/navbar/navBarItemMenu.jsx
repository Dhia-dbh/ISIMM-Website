import React, { useRef } from "react";
import NavBarItem from "./navBarItem";
import DropDownMenu from "./dropDownMenu";
const NavBarItemMenu = ({ _key, isScrolled, item }) => {
  const navBarItemDropdownMenuRef = useRef(null);

  const handleMouseEnter = () => {
    navBarItemDropdownMenuRef.current.style.display = "inline";
  };
  const handleMouseLeave = () => {
    navBarItemDropdownMenuRef.current.style.display = "none";
    console.log("kapoof");
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavBarItem _key={_key} isScrolled={isScrolled} item={item} />

      <section ref={navBarItemDropdownMenuRef} style={{ display: "none" }}>
        <DropDownMenu isScrolled={isScrolled} items={item.submenu} />
      </section>
    </li>
  );
};

export default NavBarItemMenu;
