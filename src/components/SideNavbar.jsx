import { useState } from "react";

const SideNavbar = ({ children, style, className }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={`sidebar-wraper ${show ? "show" : "hide"}`}>
      <div className={`sidenavbar-main ${className}`} style={style}>
        {children}
      </div>
      {show ? (
        <button onClick={() => setShow(!show)} className="sidebar-arrow">
          &#10094;
        </button>
      ) : (
        <button onClick={() => setShow(!show)} className="sidebar-arrow">
          &#10095;
        </button>
      )}
    </div>
  );
};

export default SideNavbar;
