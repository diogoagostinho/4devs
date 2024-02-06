import { useEffect, useState } from "react";
import "../styles/postform.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PostForm() {
  const navigate = useNavigate();
  const [tag, setTag] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [pass, setPass] = useState();
  const [file, setFile] = useState();
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

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleImageChange = (e) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));

    const target = e.target;
    setFile(target.files[0]);
  };

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (pass == "P@$$w0rd") {
      if (post.postImage != null) {
        const formData = new FormData();

        if (typeof file === "undefined") return null;

        formData.append("file", file);
        formData.append("upload_preset", "ml_default");
        formData.append("api_key", import.meta.env.CLOUDINARY_API);

        const results = await fetch(
          "https://api.cloudinary.com/v1_1/duoh8s24o/image/upload",
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());

        post.postImage = results.url;
      }
      try {
        await axios.post("http://localhost:6969/posts", post);
        toast.success("Post submitted successfully!", {
          position: "bottom-right",
        });
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Wrong Password!", {
        position: "bottom-right",
      });
      console.log("Wrong Pass");
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

  const handleTest = (e) => {
    console.log("Tag N.: ", e.target.id);
    console.log("Tag State: ", e.target.value);
    setSelectedTags(e.target.value);
    console.log(selectedTags.toString());
  };

  return (
    <>
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
                  name="postTitle"
                  maxLength={80}
                  placeholder="Type a title (max. 80 characters)"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-section">
                <p>Post description:</p>
                <input
                  type="text"
                  name="postDescription"
                  maxLength={200}
                  placeholder="Write a quick description (max. 200 characters)"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-section">
                <p>Submit an image (not required)</p>
                <input
                  type="file"
                  accept="image/gif, image/jpeg, image/png, image/jpg"
                  name="postImage"
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
                        id={tag.tagId}
                      />
                      <label htmlFor={tag.tagId}>#{tag.tagName}</label>
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
                  name="postContent"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-section">
                <p>🔑 Secret password for posting:</p>
                <input
                  required
                  maxLength={50}
                  type="password"
                  placeholder="Secret Password"
                  name="userPassword"
                  onChange={handlePassword}
                />
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
    </>
  );
}

export default PostForm;
