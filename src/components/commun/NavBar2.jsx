import { useState, useEffect } from "react";

import "./NavBar2.css";
import logo from "../../assets/logo2.png";

const NavBar2 = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState("200px"); // Logo Size ISIMM

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
        setLogoSize("200px");
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
        <nav className={scrolled ? "isScrolled" : "notScrolled"}>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
            <img src={logo} alt="ISIMM" height={logoSize} />
          </div>
          <div className="menu">
            <ul>
              {items.map((item, _key) => (
                <li key={_key}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar2;
