import "./dropDownMenu.css";
import NavBarItem from "./navBarItem";

const DropDownMenu = ({ _key, isScrolled, items }) => {
  //Only allow the display of submenus if scrolled
  return true ? (
    <ul
      key={_key}
      className={
        "dropDownMenu " +
        (isScrolled ? "dropDownMenuScrolled" : "dropDownMenuNotScrolled")
      }
    >
      {items.map((item, _key) => {
        return (
          <>
            <li key={_key} className="drowDownMenuItem">
              <NavBarItem _key={_key} isScrolled={isScrolled} item={item} />
            </li>
          </>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

export default DropDownMenu;
