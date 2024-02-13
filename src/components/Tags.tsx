import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Tags() {
  useEffect(() => {
    document.title = "4DEVS - Tags";
  });

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const res = await axios.get(
          "https://webapi.4devs.work4thenoob.pt/tags"
        );
        setTags(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTags();
  });

  return (
    <>
      <Fade>
        <div className="about">
          <div className="about__content">
            <h1>Tags</h1>
            <div className="tag__section">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
              {tags.map((tags: any) => (
                <Link key={tags.tagId} to={"/tag/" + tags.tagId}>
                  <div className="tag-option">
                    <p>#{tags.tagName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
export default Tags;
