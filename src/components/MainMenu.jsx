const MainMenu = ({ children, style }) => {
  const henelClose = () => {
    document.querySelector(".main_menu").style.display = "none";
  };
  return (
    <div className="main_menu">
      <button onClick={henelClose} className="menu_close">
        X
      </button>
      <div style={style} className="mainMenu_wraper">
        {children}
      </div>
    </div>
  );
};

export default MainMenu;
