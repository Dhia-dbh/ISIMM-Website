import { NavBarItemMenuless } from "./NavBarItemMenuless";
import NavBarItemMenu from "./navBarItemMenu";

import { useState, useEffect } from "react";

import "./navBar.css";
import logo from "/src/assets/logo2.png";

const NavBar = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState("150px"); // Logo Size ISIMM

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(currentScrollPosition);

      // Adjust logo size based on the scroll position
      if (currentScrollPosition > 400) {
        setScrolled(true);
        setLogoSize("80px");
      } else {
        setScrolled(false);
        setLogoSize("150px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <header>
        <nav className={isScrolled ? "isScrolled" : "notScrolled"}>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
            <img src={logo} alt="ISIMM" height={logoSize} />
          </div>
          <div className="menu">
            <ul>
              {items.map((item, _key) => {
                return item.submenu ? (
                  <NavBarItemMenu
                    _key={_key}
                    isScrolled={isScrolled}
                    item={item}
                  />
                ) : (
                  <NavBarItemMenuless
                    _key={_key}
                    isScrolled={isScrolled}
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

export default NavBar;
