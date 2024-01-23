import "../styles/navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__left">
            <div className="navbar-image">
              <img src="/4devs-icon-blue.png" />
            </div>
            <div className="navbar-search">
              <input type="text" placeholder="🔍 Search..." />
            </div>
          </div>
          <div className="navbar__right">
            <button className="unfilled">Create Post</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
