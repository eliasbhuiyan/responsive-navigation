import NavItem from "../components/NavItem";
import Navbar from "../components/Navbar";
import NavbarBrand from "../components/NavbarBrand";
import NavbarContent from "../components/NavbarContent";
import SideItems from "../components/SideItems";
import DropDown from "../components/DropDown";
const NavbarLive = () => {
  return (
    <div className="preview-example">
      <div
        style={{
          background: "#f1f1f1",
          padding: "18px",
          borderRadius: "10px",
          height: "600px",
        }}
      >
        <Navbar
          style={{
            backgroundColor: "white",
            borderBottom: "1px solid #dee2e6",
            padding: "20px 0",
            position: "relative",
          }}
        >
          <NavbarBrand>
            <a href="/" style={{ fontSize: "30px", fontWeight: "700" }}>
              LOGO
            </a>
          </NavbarBrand>
          <NavbarContent>
            <NavItem>
              <a href="/">Home</a>
            </NavItem>
            <NavItem>
              <a href="/">About</a>
            </NavItem>
            <DropDown style={{ width: "150px" }} label="Services">
              <NavItem>
                <a href="/">Service 1</a>
              </NavItem>
              <NavItem>
                <a href="/">Service 2</a>
              </NavItem>
              <NavItem>
                <a href="/">Service 3</a>
              </NavItem>
            </DropDown>
            <NavItem>
              <a href="/">Contact</a>
            </NavItem>
          </NavbarContent>
          <SideItems>Sign In</SideItems>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarLive;
