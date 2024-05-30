const Header = ({ children, style }) => {
  return (
    <div style={style}>
      <div className="mega_header">
        {children}
        </div>
    </div>
  );
};

export default Header;
