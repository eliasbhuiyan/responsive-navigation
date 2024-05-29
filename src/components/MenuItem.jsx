import { Link } from "react-router-dom";

const MenuItem = ({ children, path }) => {
  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
};

export default MenuItem;
