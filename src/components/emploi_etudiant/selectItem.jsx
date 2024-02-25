const SelectItem = ({ items, onChange, value }) => {
  return (
    <select
      id="selectClasse"
      className="form-select form-select-lg mb-3"
      value={value}
      onChange={onChange}
    >
      <option value="">-Select-</option>
      {Object.keys(items).map((item) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
};

export default SelectItem;
