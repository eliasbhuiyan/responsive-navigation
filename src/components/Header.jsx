const Header = ({ children, style }) => {
  return (
    <div style={style}>
      <div className="container">
        <div className="mega_header">{children}</div>
      </div>
    </div>
  );
};

export default Header;
