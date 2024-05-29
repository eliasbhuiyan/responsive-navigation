import Contact from "./Contact";
import Header from "./Header";
import MainMenu from "./MainMenu";
import MenuBar from "./MenuBar";
import NavItem from "./NavItem";
import NavbarBrand from "./NavbarBrand";
import SearchBar from "./SearchBar";
import SideItems from "./SideItems";
import Sidebar from "./Sidebar";

const MegaMenu = ({ children }) => {
  return (
    <div>
      <Header>
        <NavbarBrand>
          <img src="/logo.png" alt="logo" />
        </NavbarBrand>
        <SearchBar>
          <input type="text" placeholder="Search Product" />
        </SearchBar>
        <SideItems>side</SideItems>
        <SideItems>side</SideItems>
      </Header>
      <MainMenu>
        <Sidebar>sidebar</Sidebar>
        <MenuBar>
          <NavItem path="/">Home</NavItem>
        </MenuBar>
        <Contact>contact</Contact>
      </MainMenu>
    </div>
  );
};

export default MegaMenu;
