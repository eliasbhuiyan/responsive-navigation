const NavItem = ({ children, path }) => {
  return (
    <li className="nav-item">
      <a href={path}>{children}</a>
    </li>
  );
};

export default NavItem;
