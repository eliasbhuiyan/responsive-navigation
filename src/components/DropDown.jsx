import { useState } from "react";

const DropDown = ({ label, children, style }) => {
  const [show, setShow] = useState(false);
  return (
    <li className="nav-item">
      <p onClick={() => setShow(!show)}>
        <span>{label}</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="m112 184 144 144 144-144"
          ></path>
        </svg>
      </p>
      <div className={`dropDown ${show ? "show" : "hiden"}`}>
        <ul style={style}>{children}</ul>
      </div>
    </li>
  );
};

export default DropDown;
