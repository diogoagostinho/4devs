function App() {
  return (
    <>
      <button className="unfilled">Create Post</button>
      <button className="filled">See all Posts</button>
      <p className="side-text">How to start your Web Dev journey</p>
      <p className="content-text">
        This is a content text, it's where content will be written.
      </p>

      <p className="date-text">
        <a href="#">January 25, 2023</a>
      </p>

      <p className="user-text">Diogo Agostinho</p>
      <p className="tag-text">
        <a href="#">#webdev</a>
      </p>

      <h1>How to start your Web Dev journey</h1>

      <h2>
        {" "}
        <a href="#">This is a smaller title w/ a Link</a>
      </h2>

      <h3 className="active">Latest Posts</h3>
      <h3>Top Posts</h3>

      <a href="#">
        <div className="side-option">
          <div>🏠</div>
          <div>
            <p>Home</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default App;
