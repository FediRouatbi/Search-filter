import React from "react";
import "./InputValue.css";

const InputValue = (props) => {
  const changeView = () => {
    const input = document.querySelector(".input");
    props.onChangeSearch(input.value);
  };

  return (
    <div className="search-bar">
      <div className="search">
        <input
          onChange={changeView}
          className="input"
          type="text"
          placeholder="Search... "
        ></input>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
export default InputValue;
