import BrowsItem from "./BrowsItem";
import Contact from "./Contact";
import DropDown from "./DropDown";
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
import { IoShirtOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const MegaMenu = ({ children }) => {
  return (
    <header className="header">
      <Header
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <NavbarBrand>
          <a href="/" style={{ width: "50%" }}>
            {<img src="/logo.png" width="100%" alt="logo" />}
          </a>
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
        <SideItems>
          <a href="/">
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
          </a>
        </SideItems>
        <SideItems>
          <a href="/">
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
          </a>
        </SideItems>
        <SideItems>
          <a href="/">
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
          </a>
        </SideItems>
      </Header>
      <MainMenu
        style={{
          height: "80px",
        }}
      >
        <Sidebar
          title="Browse All Categories"
          style={{ backgroundColor: "#0d6efd", color: "white" }}
        >
          <BrowsItem>
            <a>
              <IoShirtOutline />
              <span>Mens Fashion</span>
            </a>
          </BrowsItem>
          <BrowsItem>
            <a>
              <IoShirtOutline />
              <span>Womens Fashion</span>
            </a>
          </BrowsItem>
        </Sidebar>
        <MenuBar>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a href="/">About</a>
          </NavItem>
          <DropDown label="Services">
            <ul style={{ width: "200px" }}>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </DropDown>
          <NavItem>
            <a href="/">Blog</a>
          </NavItem>
        </MenuBar>
        <Contact>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IoCallOutline style={{ fontSize: "38px" }} />
            <p style={{ display: "flex", flexDirection: "column" }}>
              <span>Call Us: 1900 - 888</span>
              <span>24/7 Support Center</span>
            </p>
          </div>
        </Contact>
      </MainMenu>
    </header>
  );
};

export default MegaMenu;
