import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Tags() {
  useEffect(() => {
    document.title = "4DEVS - Tags";
  });

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const res = await axios.get("http://localhost:6969/tags");
        setTags(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTags();
  });

  return (
    <>
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
    </>
  );
}
export default Tags;
