import Navbar from "../components/Navbar";
import NavbarBrand from "../components/NavbarBrand";
import NavbarContent from "../components/NavbarContent";
import NavItem from "../components/NavItem";
import SideContent from "../components/SideContent";
import SideItems from "../components/SideItems";
import DropDown from "../components/DropDown";

import CopyButton from "./CopyButton";
import markdownit from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { useState } from "react";
const NavbarLive = () => {
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
        }}
      >
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

export default NavbarLive;
