import "../styles/sidebar.scss";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__item">
          <a href="#">
            <div className="sidebar__item-content">
              <div>🏠</div>
              <div>
                <p>Home</p>
              </div>
            </div>
          </a>
        </div>
        <div className="sidebar__item">
          <a href="#">
            <div className="sidebar__item-content">
              <div>🏷️</div>
              <div>
                <p>Tags</p>
              </div>
            </div>
          </a>
        </div>
        <div className="sidebar__item">
          <a href="#">
            <div className="sidebar__item-content">
              <div>💡</div>
              <div>
                <p>FAQ</p>
              </div>
            </div>
          </a>
        </div>
        <div className="sidebar__item">
          <a href="#">
            <div className="sidebar__item-content">
              <div>✨</div>
              <div>
                <p>About Me</p>
              </div>
            </div>
          </a>
        </div>
        <div className="navbar__bottom">
          <p className="user-text">Socials</p>
          <div className="navbar__socials">
            <div className="navbar__socials-icon">Github</div>
            <div className="navbar__socials-icon">Twitter</div>
            <div className="navbar__socials-icon">LinkedIn</div>
            <div className="navbar__socials-icon">DEV.to</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
