import React from "react";

const DropDown = ({ label, children }) => {
  return (
    <li className="nav-item">
      <p>{label}</p>
      <div className="dropDown">{children}</div>
    </li>
  );
};

export default DropDown;
