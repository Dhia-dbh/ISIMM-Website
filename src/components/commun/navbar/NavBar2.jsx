import { NavBarItemMenuless } from "./NavBarItemMenuless";
import NavBarItemMenu from "./navBarItemMenu";
import NavBarItemMenu from "./navBarItemMenu";
import NavBarItemMenu2 from "./navBarItemMenu2";

import { useState, useEffect } from "react";
import items from "../../../Data/navBarItems.json";

import "./navBar2.css";
import logo from "/src/assets/logoNoBg.png";

const NavBar2 = () => {
  const logoSize = "80px";
  const handleMouseEnter = () => {
    alert("Mouse Enter");
  };
  return (
    <div className="wrapper">
      <header>
        <nav className={"isScrolledNavBar2"}>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo2">
            <a href="/home">
              <img
                src={logo}
                alt="ISIMM"
                style={{ cursor: "pointer" }}
                height={logoSize}
              />
            </a>
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
