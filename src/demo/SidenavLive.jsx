import Contact from "../components/Contact";
import DropDown from "../components/DropDown";
import MenuBar from "../components/MenuBar";
import NavItem from "../components/NavItem";
import NavbarBrand from "../components/NavbarBrand";
import SideNavbar from "../components/SideNavbar";
import CopyButton from "./CopyButton";
import markdownit from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { useState } from "react";
const SidenavLive = () => {
  const [showCode, setShowCode] = useState(false);
  const md = markdownit({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {
          console.log(__);
        }
      }

      return "";
    },
  });

  const markdownContainer = md.render(` 
    \`\`\`javascript
    import {
      Navbar,
      NavbarBrand,
      NavbarContent,
      NavItem,
      SideContent,
      SideItems,
      DropDown
    } from "responsive-navigation";
    
    <Navbar
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
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
      <SideContent>
        <SideItems>Sign In</SideItems>
        <SideItems>Sign Up</SideItems>
      </SideContent>
    </Navbar>
    \`\`\`
      `);
  const description = {
    __html: markdownContainer,
  };
  return (
    <div className="preview-example">
      <div
        style={{
          background: "#f1f1f1",
          padding: "18px",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
        //   position: "relative",
        }}
      >
        <SideNavbar style={{ width: "250px", background: "white" }}>
          <NavbarBrand>
            <a href="/" style={{ fontSize: "30px", fontWeight: "700" }}>
              LOGO
            </a>
          </NavbarBrand>
          <MenuBar>
            <NavItem>
              <a href="/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="m18.36 9 .6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"></path>
                </svg>
                <p>Dashbord</p>
              </a>
            </NavItem>
            <NavItem>
              <a href="/">Notification</a>
            </NavItem>
            <DropDown label="Servies">
              <NavItem>
                <a href="/">Service 1</a>
              </NavItem>
              <DropDown label="Servies">
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
                <a href="/">Service 3</a>
              </NavItem>
            </DropDown>
            <NavItem>
              <a href="/">New Order</a>
            </NavItem>
          </MenuBar>
          <Contact>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                ></path>
              </svg>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
              >
                <span> 1900 - 888</span>
                <span>24/7 Support</span>
              </p>
            </div>
          </Contact>
        </SideNavbar>

        <div className={`markdowncode ${showCode ? "showFull" : "lessCode"}`}>
          <div className="copy-area">
            <p className="style-basic">
              To use the navbar component, you can import it in your React
              project like this:
            </p>
            <CopyButton containerId="jsx-codes" />
          </div>
          <div id="jsx-codes" dangerouslySetInnerHTML={description}></div>
          <button onClick={() => setShowCode(!showCode)} className="showCode">
            {showCode ? "Hide Code" : "Show Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidenavLive;
