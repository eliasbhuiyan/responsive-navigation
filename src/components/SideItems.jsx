const SideItems = ({ children, path }) => {
  return (
    <div className="megaMenu_sideitem">
      <span></span>
      <a href={path}>{children}</a>
    </div>
  );
};

export default SideItems;
