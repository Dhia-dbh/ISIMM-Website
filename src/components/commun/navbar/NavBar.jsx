import { useState, useEffect } from "react";
import NavBarItemMenu from "./navBarItemMenu";
import { VscThreeBars } from "react-icons/vsc";
import { NavBarItemMenuless } from "./NavBarItemMenuless";

import "./NavBar.css";
import logo from "/src/assets/logoNoBg.png";

const NavBar = ({ items, isScrolledHeight }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState("150px"); // Logo Size ISIMM
  const [navBarItemStyle, setNavBarItemStyle] = useState({
    backgroundColor: "none",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(currentScrollPosition);

      // Adjust logo size based on the scroll position
      if (currentScrollPosition > isScrolledHeight) {
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
  const handleMouseEnter = () => {
    alert("Mouse Enter");
  };
  return (
    <div className="wrapper">
      <header>
        <input type="checkbox" name="showNavBar" id="showNavBar" />
        <nav className={isScrolled ? "isScrolledNavBar" : "notScrolledNavBar"}>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className={"logo " + (isScrolled ? "smallImage" : "bigImage")}>
            <img
              src={logo}
              alt="ISIMM"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
          <label className="showNavBarButton" htmlFor="showNavBar">
            <VscThreeBars />
          </label>
          <div className="smallSizeNavBarButtonContainer"></div>
          <div className="navBarItems">
            <ul>
              {items.map((item, _key) => {
                return item.submenu ? (
                  <NavBarItemMenu
                    onHover={handleMouseEnter}
                    _key={"Menu" + _key}
                    isScrolled={isScrolled}
                    item={item}
                  />
                ) : (
                  <NavBarItemMenuless
                    _key={"MenuLess" + _key}
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
