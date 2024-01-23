function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar-image">
            <img src="/public/4devs-black.png" />
          </div>
          <div className="navbar-search">
            <input type="text" />
          </div>
        </div>
        <div className="navbar__right">
          <button className="unfilled">Create Post</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
