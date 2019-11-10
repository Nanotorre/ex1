import React from "react";

const componentStyle = {
  backgroundColor: "grey",
  color: "blue",
  padding: "5px",
  marginTop: "10vh",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1rem"
};

const UserInput = props => {
  return (
    <input
      style={componentStyle}
      type="text"
      placeholder="input something"
      onChange={props.handler}
      value={props.initValue}
    ></input>
  );
};

export default UserInput;
