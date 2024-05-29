import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";

const Sidebar = ({ children, title, style }) => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)} className="categoryBrows">
      <p style={style} className="categoryBrows_title">
        <BiCategory /> <span>{title}</span> <IoChevronDown />
      </p>
      <div className={`categoryBrows_dropDown ${show ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
