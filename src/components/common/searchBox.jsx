import React from "react";

const SearchBox = ({value, onChange}) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control-lg my-3"
      placeholder="Country Search..."
      value={value}
      onChange = {(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
