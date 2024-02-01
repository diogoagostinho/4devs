import Post from "./Post";
import "../styles/home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    document.title = "4DEVS";
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:6969/posts");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

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
