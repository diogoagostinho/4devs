import { useEffect, useState } from "react";
import "../styles/postpage.scss";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

function PostPage() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2].toString();

  const [post, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:6969/post/${postId}`);
        setPosts(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPostTags = async () => {
      try {
        const res = await axios.get(`http://localhost:6969/posttag/${postId}`);
        setTags(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
    fetchPostTags();
  }, [postId]);

  console.log(post);
  console.log(tags);

  useEffect(() => {
    document.title = post.postTitle;
  });

  const dateStr = moment(post.postDate).format("MMM D, YYYY");

  return (
    <>
      <div className="postpage">
        <div className="postpage__content">
          <div className="postpage__content-top">
            {post.postImage && <img src={post.postImage} />}
          </div>
          <div className="postpage__content-bottom">
            <div className="post__author">
              <div className="post__author-image">
                <img src={"/userimages/" + post.userImage} alt="" />
              </div>
              <div className="post__author-info">
                <p className="user-text">
                  <Link to={"/user/" + post.userId}>{post.userName}</Link>
                </p>
                <p className="date-text">{dateStr}</p>
              </div>
            </div>

            <div className="post__tags onposttag">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
              {tags.map((tag: any) => (
                <p className="tag-text">
                  {" "}
                  <Link to={"/tag/" + tag.tagId}>#{tag.tagName}</Link>
                </p>
              ))}
            </div>

            <div className="post__title-desc onposttitle">
              <div className="postpage__header">
                {" "}
                <h1>{post.postTitle}</h1>
                <p>{post.postDescription}</p>
              </div>
              <hr />
              <div className="postpage__body">
                <p>{post.postContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
