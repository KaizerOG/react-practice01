import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {

  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <h3>Blog Application</h3>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Blogs">Blogs</Link>
      </nav>
    </>
  );
}
