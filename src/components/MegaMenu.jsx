import { useEffect, useState } from "react";
import "../index.css";
const MegaMenu = ({ children, style }) => {

  const [scrolingY, setScrollY] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       setScrollY(true);
  //     } else {
  //       setScrollY(false);
  //     }
  //   });
  // }, [scrolingY]);
  return (
    <header
      style={style}
      className={`header ${scrolingY ? "fixedMenu-true" : ""}`}
    >
      <div className="container">{children}</div>
    </header>
  );
};

export default MegaMenu;
