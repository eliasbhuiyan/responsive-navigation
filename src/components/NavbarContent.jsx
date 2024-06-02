const NavbarContent = ({ children }) => {
  const henelClose = () => {
    document.querySelector(".main_menu").style.display = "none";
  };
  return (
    <div className="navbar_contentWraper">
      <ul className="navbar_content">{children}</ul>
      <button onClick={henelClose} className="menu_close">
        X
      </button>
    </div>
  );
};

export default NavbarContent;
