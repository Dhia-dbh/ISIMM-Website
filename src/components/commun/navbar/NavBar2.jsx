import { NavBarItemMenuless } from "./NavBarItemMenuless";
import NavBarItemMenu from "./navBarItemMenu";

import { useState, useEffect } from "react";
import items from "../../../Data/navBarItems.json";

import "./navBar2.css";
import logo from "/src/assets/logo2.png";

const NavBar2 = () => {
  const logoSize = "80px";
  const handleMouseEnter = () => {
    alert("Mouse Enter");
  };
  console.log("items", items);
  return (
    <div className="wrapper">
      <header>
        <nav className={"isScrolledNavBar"}>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
            <img
              src={logo}
              alt="ISIMM"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              height={logoSize}
            />
          </div>
          <div className="">
            <ul>
              {items["navBarItems"].map((item, _key) => {
                return item.submenu ? (
                  <NavBarItemMenu
                    onHover={handleMouseEnter}
                    _key={_key}
                    isScrolled={true}
                    item={item}
                  />
                ) : (
                  <NavBarItemMenuless
                    _key={_key}
                    isScrolled={true}
                    item={item}
                  />
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar2;
