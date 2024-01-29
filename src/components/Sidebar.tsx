import "../styles/sidebar.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__item">
          <Link to="/">
            <div className="sidebar__item-content">
              <div>🏠</div>
              <div>
                <p>Home</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/tags">
            <div className="sidebar__item-content">
              <div>🏷️</div>
              <div>
                <p>Tags</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/faq">
            <div className="sidebar__item-content">
              <div>💡</div>
              <div>
                <p>FAQ</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/about">
            <div className="sidebar__item-content">
              <div>✨</div>
              <div>
                <p>About Me</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar__bottom">
          <p className="user-text">Socials</p>
          <div className="navbar__socials">
            <a target="_blank" href="https://github.com/diogoagostinho">
              <div className="navbar__socials-icon">
                <img src="/socials/github.svg" />
                <p>@diogoagostinho</p>
              </div>
            </a>
            <a target="_blank" href="https://twitter.com/agostinho_dev">
              <div className="navbar__socials-icon">
                <img src="/socials/x.svg" />
                <p>@agostinho_dev</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
            >
              <div className="navbar__socials-icon">
                <img src="/socials/linkedin.svg" />
                <p>Diogo Agostinho</p>
              </div>
            </a>
            <a target="_blank" href="https://dev.to/diogoagostinho">
              <div className="navbar__socials-icon">
                <img src="/socials/devdotto.svg" />
                <p>@diogoagostinho</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
