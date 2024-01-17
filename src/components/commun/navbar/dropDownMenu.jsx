import "./dropDownMenu.css";

const DropDownMenu = ({ isScrolled, isHovered, items }) => {
  //Only allow the display of submenus if scrolled
  return isScrolled ? (
    <ul className="dropDownMenu">
      {items.map((item, _key) => {
        return (
          <>
            <li key={_key} className="">
              <a key={_key} className={"isScrolledText"} href={item.path}>
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

export default DropDownMenu;
