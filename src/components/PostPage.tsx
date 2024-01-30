import { useEffect, useState } from "react";
import "../styles/postpage.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

function PostPage() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2].toString();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:6969/post/${postId}`);
        setPosts(res.data[0]);
        console.log(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  useEffect(() => {
    document.title = posts.Title;
  });

  return (
    <>
      <div className="postpage">
        <div className="postpage__content">
          <div className="postpage__content-top">
            {posts.PostImage && <img src={"/postimages/" + posts.PostImage} />}
          </div>
          <div className="postpage__content-bottom">
            <div className="post__author">
              <div className="post__author-image">
                <img src="/userimages/diogoagostinho.jpg" alt="" />
              </div>
              <div className="post__author-info">
                <p className="user-text">
                  <a href="#">{posts.PostUser}</a>
                </p>

                <p className="date-text">{posts.Date}</p>
              </div>
            </div>

            <div className="post__tags onposttag">
              <p className="tag-text">
                <a href="#">#webdev</a>
              </p>
              <p className="tag-text">
                <a href="#">#tools</a>
              </p>
            </div>

            <div className="post__title-desc onposttitle">
              <div className="postpage__header">
                {" "}
                <h1>{posts.Title}</h1>
                <p>{posts.Description}</p>
              </div>
              <hr />
              <div className="postpage__body">
                <p>{posts.Content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
