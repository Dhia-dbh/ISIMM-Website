import "./dropDownMenu2.css";

const DropDownMenu2 = ({ isScrolled, items }) => {
  //Only allow the display of submenus if scrolled
  return true ? (
    <ul
      className={
        "dropDownMenu " +
        (isScrolled ? "dropDownMenuScrolled" : "dropDownMenuNotScrolled")
      }
    >
      {items.map((item, _key) => {
        return (
          <>
            <li key={_key}>
              <a
                key={_key}
                className={isScrolled ? "isScrolled" : "notScrolled"}
                href={item.path}
              >
                {item.name}
              </a>
            </li>
            <br key="line_break" />
          </>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

export default DropDownMenu2;
