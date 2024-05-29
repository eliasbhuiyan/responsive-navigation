import Contact from "./Contact";
import Header from "./Header";
import MainMenu from "./MainMenu";
import MenuBar from "./MenuBar";
import NavItem from "./NavItem";
import NavbarBrand from "./NavbarBrand";
import SearchBar from "./SearchBar";
import SideItems from "./SideItems";
import Sidebar from "./Sidebar";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const MegaMenu = ({ children }) => {
  return (
    <header>
      <Header
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <NavbarBrand>
          <img src="/logo.png" width="50%" alt="logo" />
        </NavbarBrand>
        <SearchBar>
          <input
            type="text"
            placeholder="Search Product"
            style={{
              width: "100%",
              padding: "12px 10px",
              borderRadius: "10px",
            }}
          />
        </SearchBar>
        <div className="sideitem_main">
          <SideItems path="/">
            <span className="icon">
              <FaRegHeart />
              <span
                className="badge"
                style={{ backgroundColor: "#0d6efd", color: "#fff" }}
              >
                2
              </span>
            </span>
            <span>Wishlist</span>
          </SideItems>
          <SideItems path="/">
            <span className="icon">
              <IoCartOutline />
              <span
                className="badge"
                style={{ backgroundColor: "#0d6efd", color: "#fff" }}
              >
                2
              </span>
            </span>
            <span>Cart</span>
          </SideItems>
          <SideItems path="/">
            <span className="icon">
              <IoCartOutline />
              <span
                className="badge"
                style={{ backgroundColor: "#0d6efd", color: "#fff" }}
              >
                2
              </span>
            </span>
            <span>Cart</span>
          </SideItems>
        </div>
      </Header>
      <MainMenu>
        <Sidebar>sidebar</Sidebar>
        <MenuBar>
          <NavItem path="/">Home</NavItem>
        </MenuBar>
        <Contact>contact</Contact>
      </MainMenu>
    </header>
  );
};

export default MegaMenu;
