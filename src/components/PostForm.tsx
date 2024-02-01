import { useEffect, useState } from "react";
import "../styles/postform.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const navigate = useNavigate();
  const [tag, setTag] = useState([]);
  const [post, setPost] = useState({
    postTitle: "",
    postDescription: "",
    postContent: "",
    postImage: null,
    postUser: 1,
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0].name,
    }));
  };

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:6969/posts", post);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const res = await axios.get("http://localhost:6969/tags");
        setTag(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTags();
  });

  return (
    <div className="post-form">
      <div className="post-form__content">
        <div className="post-form__header">
          <h1>Create a Post</h1>
        </div>
        <div className="post-form__body">
          <form className="postform-form" id="form" method="post">
            <div className="form-section">
              <p>Post title:</p>
              <input
                type="text"
                name="title"
                maxLength={80}
                placeholder="Type a title"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <p>Post description:</p>
              <input
                type="text"
                name="description"
                maxLength={160}
                placeholder="Write a quick description"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <p>Submit an image (not required)</p>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png, image/jpg"
                name="postimage"
                onChange={handleImageChange}
              />
            </div>
            <div className="form-section">
              <p>Tags:</p>
              <div id="CheckTags" className="checktags">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                {tag.map((tag: any) => (
                  <div key={tag.tagId} className="tag-box">
                    <input
                      className={"tag-check"}
                      type="checkbox"
                      name={tag.tagName}
                      id={tag.tagName}
                    />
                    <label htmlFor={tag.tagName}>#{tag.tagName}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-section">
              <p>Write your post:</p>
              <textarea
                required
                rows={4}
                placeholder="Write the post..."
                name="content"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-section form-centered">
              <input
                type="submit"
                onClick={handleClick}
                className="form-submit"
                value={"Submit"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
