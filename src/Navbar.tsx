import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/view-user/1">View User 1</Link>
        </li>
        <li>
          <Link to="/view-user/2">View User 2</Link>
        </li>
      </ul>
    </nav>
  );
}
