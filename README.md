# Responsive Navigation

Responsive Navigation is a React component library that provides a set of flexible and customizable navigation components. These components are designed to work seamlessly together to create a responsive and user-friendly navigation experience.

## Demo

## <a href="https://eb-responsive-navigation.vercel.app/">Live Demo &#128072;</a>

## Installation

To install the package, use npm:

```bash
npm i responsive-navigation
```

## Responsive Navbar

<a href="https://eb-responsive-navigation.vercel.app"><img src="https://i.ibb.co/cC4N80x/navbar.png" alt="navbar" /></a>

## Usage Code

```javascript
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
  SideContent,
  SideItems,
  DropDown,
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
</Navbar>;
```

## Responsive Side Navbar

<a href="https://eb-responsive-navigation.vercel.app"><img src="https://i.ibb.co/T4vPf3K/sidenav.png" alt="navbar" /></a>

## Usage Code

```javascript
import {
  SideNavbar,
  NavbarBrand,
  MenuBar,
  DropDown,
  NavItem,
  Contact,
} from "responsive-navigation";

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
</SideNavbar>;
```

## Responsive Mega Menu

<a href="https://eb-responsive-navigation.vercel.app"><img src="https://i.ibb.co/QKdcyjR/mega-menu.png" alt="navbar" /></a>

## Usage Code

```javascript
import {
  BrowsItem,
  Contact,
  DropDown,
  Header,
  MainMenu,
  MegaMenu,
  MenuBar,
  NavItem,
  NavbarBrand,
  SearchBar,
  SideItems,
  Sidebar,
} from "responsive-navigation";

<MegaMenu
  style={{
    backgroundColor: "white",
    borderBottom: "1px solid #dee2e6",
    padding: "20px 0",
  }}
>
  <Header>
    <NavbarBrand>
      <a href="/" style={{ fontSize: "30px", fontWeight: "700" }}>
        LOGO
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
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
          </svg>
          <span
            className="badge"
            style={{ backgroundColor: "#0d6efd", color: "#fff" }}
          >
            2
          </span>
        </span>
        <span className="icon_base">Wishlist</span>
      </a>
    </SideItems>
    <SideItems>
      <a href="/">
        <span className="icon">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="176"
              cy="416"
              r="16"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></circle>
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></circle>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M48 80h64l48 272h256"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
            ></path>
          </svg>
          <span
            className="badge"
            style={{ backgroundColor: "#0d6efd", color: "#fff" }}
          >
            2
          </span>
        </span>
        <span className="icon_base">Cart</span>
      </a>
    </SideItems>
  </Header>
  <MainMenu
    style={{
      padding: "20px 0",
    }}
  >
    <Sidebar
      title="Browse All Categories"
      style={{ backgroundColor: "#0d6efd", color: "white" }}
    >
      <BrowsItem>
        <a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 0 0-10.57-1.8zm18.75 4.66a80 80 0 0 1-154.62 0"
            ></path>
          </svg>
          <span>Mens Fashion</span>
        </a>
      </BrowsItem>
      <BrowsItem>
        <a>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 0 0-10.57-1.8zm18.75 4.66a80 80 0 0 1-154.62 0"
            ></path>
          </svg>
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
      <DropDown
        label="Services"
        style={{ width: "200px", backgroundColor: "white" }}
      >
        <NavItem>
          <a href="/">Service 1</a>
        </NavItem>
        <NavItem>
          <a href="/">Service 2</a>
        </NavItem>
        <NavItem>
          <a href="/">Service 3</a>
        </NavItem>
        <DropDown
          label="Service 4"
          style={{ width: "100px", backgroundColor: "white" }}
        >
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
      </DropDown>
      <NavItem>
        <a href="/">Blog</a>
      </NavItem>
      <NavItem>
        <a href="/">Blog</a>
      </NavItem>
      <NavItem>
        <a href="/">Blog</a>
      </NavItem>
      <NavItem>
        <a href="/">Blog</a>
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
        <p style={{ display: "flex", flexDirection: "column" }}>
          <span>Call Us: 1900 - 888</span>
          <span>24/7 Support Center</span>
        </p>
      </div>
    </Contact>
  </MainMenu>
</MegaMenu>;
```
