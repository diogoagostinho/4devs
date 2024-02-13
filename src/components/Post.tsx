import { Link } from "react-router-dom";
import "../styles/post.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";

function Post(props: {
  postTitle: string;
  postDescription: string;
  postImage: string;
  postId: string;
  postUser: string;
  postDate: Date;
  postUserId: number;
  postUserImage: string;
}) {
  const dateStr = moment(props.postDate).format("MMM D, YYYY");

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchPostTags = async () => {
      try {
        const res = await axios.get(
          `https://webapi.4devs.work4thenoob.pt/posttag/${props.postId}`
        );
        setTags(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPostTags();
  }, [props.postId]);

  return (
    <>
      <div className="post">
        <div className="post__content">
          <div className="post__content-top">
            {props.postImage && <img src={props.postImage} />}
          </div>

          <div className="post__content-bottom">
            <div className="post__author">
              <div className="post__author-image">
                <img src={"/userimages/" + props.postUserImage} alt="" />
              </div>
              <div className="post__author-info">
                <p className="user-text">
                  <Link to={"/user/" + props.postUserId}>{props.postUser}</Link>
                </p>

                <p className="date-text">{dateStr}</p>
              </div>
            </div>

            <div className="post__title-desc">
              <h1>
                <Link to={`/post/${props.postId}`}>{props.postTitle}</Link>
              </h1>
              <p>{props.postDescription}</p>
            </div>

            <div className="post__tags">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
              {tags.map((tag: any) => (
                <p key={tag.tagId} className="tag-text">
                  {" "}
                  <Link to={"/tag/" + tag.tagId}>#{tag.tagName}</Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
