import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  const { title, itemsLeft, itemsRight } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {itemsLeft.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink
                  key={item.name}
                  className="nav-link"
                  aria-current="page"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {itemsRight.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink
                  key={item.name}
                  className="nav-link"
                  aria-current="page"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
