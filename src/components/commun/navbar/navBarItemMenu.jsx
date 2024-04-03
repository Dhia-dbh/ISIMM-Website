import React, { useState, useRef } from "react";
import NavBarItem from "./navBarItem";
import DropDownMenu from "./dropDownMenu";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBarItemMenu = ({ _key, isScrolled, item }) => {
  const navBarItemDropdownMenuRef = useRef(null);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    navBarItemDropdownMenuRef.current.style.display = "inline";
    setHovered(true);
  };
  const handleMouseLeave = () => {
    navBarItemDropdownMenuRef.current.style.display = "none";
    setHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? "bg-white text-black" : "bg-none text-white"}
      style={{ transitionDuration: "0.2s" }}
    >
      <NavBarItem
        _key={_key}
        isScrolled={isHovered | isScrolled ? true : false}
        item={item}
      />
      <span>
        {isHovered ? (
          <MdKeyboardArrowUp
            style={{ color: isHovered | isScrolled ? "black" : "white" }}
          />
        ) : (
          <MdKeyboardArrowDown
            style={{ color: isHovered | isScrolled ? "black" : "white" }}
          />
        )}
      </span>

      <section ref={navBarItemDropdownMenuRef} style={{ display: "none" }}>
        <DropDownMenu
          _key={_key}
          isScrolled={isHovered | isScrolled ? true : false}
          items={item.submenu}
        />
      </section>
    </li>
  );
};

export default NavBarItemMenu;
