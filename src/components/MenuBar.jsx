const MenuBar = ({ children }) => {
  return (
    <nav className="navbar_main">
      <ul>{children}</ul>
    </nav>
  );
};

export default MenuBar;
