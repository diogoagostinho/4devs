import "../styles/postpage.scss";

function PostPage() {
  return (
    <>
      <div className="postpage">
        <div className="postpage__content">
          <div className="postpage__content-top">
            <img src="/postimages/post1.gif" alt="" />
          </div>
          <div className="postpage__content-bottom">
            <div className="post__author">
              <div className="post__author-image">
                <img src="/userimages/diogoagostinho.jpg" alt="" />
              </div>
              <div className="post__author-info">
                <p className="user-text">
                  <a href="#">Diogo Agostinho</a>
                </p>

                <p className="date-text">Jan 22, 2024</p>
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
                <h1>Top 10 Front-End Tools of 2024</h1>
                <p>
                  Who doesn't love a good front-end tool? In this roundup,
                  you'll find useful front-end tools that were popular last year
                  and will help you speed up your development workflow. Let's
                  dive in! "
                </p>
              </div>
              <hr />
              <div className="postpage__body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae optio nihil mollitia, commodi minus, fuga
                  blanditiis aperiam quas iusto cupiditate, cum vel explicabo
                  obcaecati? Blanditiis quisquam vero iure doloremque non! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                  optio nihil mollitia, commodi minus, fuga blanditiis aperiam
                  quas iusto cupiditate, cum vel explicabo obcaecati? Blanditiis
                  quisquam vero iure doloremque non!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  commodi est illo itaque rerum? Quas nihil voluptas, sint sit
                  at itaque, numquam modi similique vel optio ipsam tempore
                  dolorem alias?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
