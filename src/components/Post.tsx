import "../styles/post.scss";

function Post() {
  return (
    <>
      <div className="post">
        <div className="post__content">
          <div className="post__content-top">
            <img src="/postimages/post1.gif" alt="" />
          </div>

          <div className="post__content-bottom">
            <div className="post__author">
              <div className="post__author-image">
                <img src="/userimages/diogoagostinho.jpg" alt="" />
              </div>
              <div className="post__author-info">
                <p className="user-text">Diogo Agostinho</p>
                <p className="date-text">Jan 22, 2024</p>
              </div>
            </div>

            <div className="post__title-desc">
              <h1>
                <a href="">Top 10 Front-End Tools of 2024</a>
              </h1>
              <p>
                Who doesn't love a good front-end tool? In this roundup, you'll
                find useful front-end tools that were popular last year and will
                help you speed up your development workflow. Let's dive in! "
              </p>
            </div>

            <div className="post__tags">
              <p className="tag-text">
                <a href="#">#webdev</a>
              </p>
              <p className="tag-text">
                <a href="#">#tools</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
