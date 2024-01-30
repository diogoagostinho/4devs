import { Link } from "react-router-dom";
import "../styles/post.scss";

function Post(props: {
  postTitle: string;
  postDescription: string;
  postImage: string;
  postId: string;
  postUser: number;
  postData: Date;
}) {
  return (
    <>
      <div className="post">
        <div className="post__content">
          <div className="post__content-top">
            {props.postImage && <img src={"/postimages/" + props.postImage} />}
          </div>

          <div className="post__content-bottom">
            <div className="post__author">
              <div className="post__author-image">
                <img src="/userimages/diogoagostinho.jpg" alt="" />
              </div>
              <div className="post__author-info">
                <p className="user-text">
                  <a href="#">{props.postUser}</a>
                </p>

                <p className="date-text">{props.postData.toString()}</p>
              </div>
            </div>

            <div className="post__title-desc">
              <h1>
                <Link to={"/post/" + props.postId}>{props.postTitle}</Link>
              </h1>
              <p>{props.postDescription}</p>
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
