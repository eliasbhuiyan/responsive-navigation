const MainMenu = ({ children, style }) => {
  return (
    <div>
      <div className="container">
        <div style={style} className="mainMenu_wraper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
