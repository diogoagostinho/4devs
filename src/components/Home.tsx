import Post from "./Post";
import "../styles/home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__orderby">
          <div className="home__orderby-item" id="orderByLatest">
            <h3 className="active">
              <a href="#">Latest</a>
            </h3>
          </div>
          <div className="home__orderby-item" id="orderByOldest">
            <h3>
              <a href="#">Oldest</a>
            </h3>
          </div>
          <div className="home__orderby-item" id="orderByAZ">
            <h3>
              <a href="#">Alphabetically (A-Z)</a>
            </h3>
          </div>
        </div>
        <div className="home__content">
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

export default Home;
