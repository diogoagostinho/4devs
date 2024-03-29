import { useLocation } from "react-router-dom";
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

function Search() {
  const location = useLocation();
  const search = location.pathname.split("/")[2].toString();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(
          `https://webapi.4devs.work4thenoob.pt/search/${search}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, [search]);

  useEffect(() => {
    document.title = "4DEVS";
  });
  return (
    <>
      <Fade>
        <div className="home">
          <div className="home__content">
            <h2>Results for your search</h2>
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
      </Fade>
    </>
  );
}

export default Search;
