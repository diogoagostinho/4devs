import Post from "./Post";
import "../styles/home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    document.title = "4DEVS";
  });

  const [posts, setPosts] = useState([]);
  const [latestActive, setLatestActive] = useState(false);
  const [oldestActive, setOldestActive] = useState(false);
  const [azActive, setAzActive] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:6969/posts");
        setPosts(res.data);
        setLatestActive(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  const handleLatest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:6969/posts");
      setPosts(res.data);
      setLatestActive(true);
      setOldestActive(false);
      setAzActive(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOldest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:6969/posts/oldest");
      setPosts(res.data);
      setLatestActive(false);
      setOldestActive(true);
      setAzActive(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAZ = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:6969/posts/az");
      setPosts(res.data);
      setLatestActive(false);
      setOldestActive(false);
      setAzActive(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="home">
        <div className="home__orderby">
          <div className="home__orderby-item" id="orderByLatest">
            <h3>
              <a
                className={latestActive ? "active" : ""}
                onClick={handleLatest}
                href=""
              >
                Latest
              </a>
            </h3>
          </div>
          <div className="home__orderby-item" id="orderByOldest">
            <h3>
              <a
                className={oldestActive ? "active" : ""}
                onClick={handleOldest}
                href=""
              >
                Oldest
              </a>
            </h3>
          </div>
          <div className="home__orderby-item" id="orderByAZ">
            <h3>
              <a
                className={azActive ? "active" : ""}
                onClick={handleAZ}
                href=""
              >
                Alphabetically (A-Z)
              </a>
            </h3>
          </div>
        </div>
        <div className="home__content">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          {posts.map((post: any) => (
            <Post
              key={post.postId}
              postId={post.postId}
              postTitle={post.postTitle}
              postDescription={post.postDescription}
              postImage={post.postImage}
              postUser={post.userName}
              postDate={post.postDate}
              postUserId={post.postUser}
              postUserImage={post.userImage}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
