import { useEffect } from "react";

function Tags() {
  useEffect(() => {
    document.title = "4DEVS - Tags";
  });
  return (
    <>
      <div className="about">
        <div className="about__content">
          <h1>Tags</h1>
          <div className="tag__section">
            <div className="tag-option">
              <p>#web-dev</p>
            </div>
            <div className="tag-option">
              <p>#web-dev</p>
            </div>
            <div className="tag-option">
              <p>#javascript</p>
            </div>
            <div className="tag-option">
              <p>#backend</p>
            </div>
            <div className="tag-option">
              <p>#database</p>
            </div>
            <div className="tag-option">
              <p>#AI</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tags;
