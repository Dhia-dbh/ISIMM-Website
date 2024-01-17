import React from "react";
import PropTypes from "prop-types";
function ListGroup(props) {
  const { items, selectedItem, id, filter, className, onItemSelect } = props;
  return (
    <ul className={className + " list-group "}>
      {items.map((item) => (
        <li
          key={item[id]}
          onClick={() => onItemSelect(item)}
          className={
            "list-group-item clickable " +
            (item[filter] === selectedItem ? "active" : "")
          }
        >
          {item[filter]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  filter: "name",
  id: "_id",
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  /* customProp: function (props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  }, */
};
export default ListGroup;
