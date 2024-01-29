import "../styles/postform.scss";

function PostForm() {
  return (
    <div className="post-form">
      <div className="post-form__content">
        <div className="post-form__header">
          <h1>Create a Post</h1>
        </div>
        <div className="post-form__body">
          <form className="postform-form" action="" method="post">
            <div className="form-section">
              <p>Post title:</p>
              <input
                type="text"
                name="title"
                id="PostTitle"
                maxLength={80}
                placeholder="Type a title"
                required
              />
            </div>
            <div className="form-section">
              <p>Post description:</p>
              <input
                type="text"
                name="title"
                id="PostTitle"
                maxLength={160}
                placeholder="Write a quick description"
                required
              />
            </div>
            <div className="form-section">
              <p>Submit an image (not required)</p>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png, image/jpg"
              />
            </div>
            <div className="form-section">
              <p>Tags:</p>
              <div id="CheckTags" className="checktags"></div>
            </div>
            <div className="form-section">
              <p>Write your post:</p>
              <textarea
                required
                rows={4}
                placeholder="Write the post..."
              ></textarea>
            </div>
            <div className="form-section form-centered">
              <input className="form-submit" type="submit" value={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
