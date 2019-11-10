import React from "react";
import './useroutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>This is p one</p>
      <p>This is p two of {props.userName}</p>
    </div>
  );
};

export default UserOutput;
