import { useState } from "react";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState();

  // @ts-expect-error event below is ok
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // @ts-expect-error event below is ok
  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.key === "Enter") {
      navigate("/search/" + search);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__left">
            <div className="navbar-image">
              <img src="/4devs-letters-blue.png" />
            </div>
            <div className="navbar-search">
              <input
                onKeyDown={handleSearch}
                onChange={handleChange}
                type="text"
                placeholder="🔍 Search..."
              />
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
