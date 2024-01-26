import { Link } from "react-router-dom";
import "../styles/badurl.scss";

function BadUrl() {
  return (
    <>
      <div className="badurl">
        <h1>404</h1>
        <h2>Bad URL</h2>
        <p>
          This page doesn't exist, <Link to="/">return home?</Link>
        </p>
      </div>
    </>
  );
}
export default BadUrl;
