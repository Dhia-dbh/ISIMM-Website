import "./dropDownMenu.css";

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
              <a
                key={_key}
                className={isScrolled ? "isScrolled" : "notScrolled"}
                href={item.path}
              >
                {item.name}
              </a>
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
