import "../styles/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__left">
            <div className="navbar-image">
              <img src="/4devs-letters-blue.png" />
            </div>
            <div className="navbar-search">
              <input type="text" placeholder="🔍 Search..." />
            </div>
          </div>
          <div className="navbar__right">
            <Link to="submit-posts">
              <button className="unfilled">Create Post</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
