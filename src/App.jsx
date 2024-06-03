import CopyButton from "./demo/CopyButton";
import MegamenuLive from "./demo/MegamenuLive";
import NavbarLive from "./demo/NavbarLive";
import SidenavLive from "./demo/SidenavLive";
import "./demo/demo.css";

function App() {
  return (
    <div className="respinsive-wraper" style={{ width: "" }}>
      <div className="container">
        <h1 className="all-headings">Responsive Navigation</h1>
        <p className="style-basic">
          Responsive Navigation is a React component library that provides a set
          of flexible and customizable navigation components. These components
          are designed to work seamlessly together to create a responsive and
          user-friendly navigation experience.
        </p>
        <h1 className="all-headings">Installation</h1>
        <p className="style-basic">To install the package, use npm:</p>
        <pre className="precode">
          <p id="npmicode">npm i responsive-navigation</p>
          <CopyButton containerId="npmicode" />
        </pre>
      </div>
      <NavbarLive />
      <MegamenuLive />
      <SidenavLive />
    </div>
  );
}

export default App;
