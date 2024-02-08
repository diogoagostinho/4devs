import express from "express";
import mysql from "mysql";
import cors from "cors";

//Database Connection
const app = express();
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@$$w0rd",
  database: "database_4devs",
});

app.listen(6969, () => {
  console.log("Connected");
});

app.use(express.json());
app.use(cors());

//Get USERS
app.get("/users", (req, res) => {
  const userQuery = "SELECT * FROM users";
  database.query(userQuery, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get TAGS
app.get("/tags", (req, res) => {
  const tagQuery = "SELECT * FROM tags";
  database.query(tagQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get POSTS ASC
app.get("/posts", (req, res) => {
  const postQuery =
    "SELECT * FROM posts INNER JOIN users ON posts.postUser = users.userId ORDER BY postId ASC";
  database.query(postQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get POSTS DESC
app.get("/posts/oldest", (req, res) => {
  const postQuery =
    "SELECT * FROM posts INNER JOIN users ON posts.postUser = users.userId ORDER BY postId DESC";
  database.query(postQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get POSTS A-Z
app.get("/posts/az", (req, res) => {
  const postQuery =
    "SELECT * FROM posts INNER JOIN users ON posts.postUser = users.userId ORDER BY postTitle ASC";
  database.query(postQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Create POSTS
app.post("/posts", (req, res) => {
  const postQuery =
    "INSERT INTO posts (`postId`,`postTitle`,`postDescription`,`postContent`, `postImage` ,`postUser`) VALUES (?)";
  const values = [
    req.body.postId,
    req.body.postTitle,
    req.body.postDescription,
    req.body.postContent,
    req.body.postImage,
    req.body.postUser,
  ];

  database.query(postQuery, [values], (err) => {
    if (err) {
      return res.json(err);
    }
  });

  const tagQuery =
    "INSERT INTO posts_tags (`post`, `tag`) VALUES " +
    req.body.tagsIds.map((x) => `(${req.body.postId}, ${x})`);

  database.query(tagQuery, (err) => {
    if (err) {
      // return res.json(err);
      console.log(err);
    }
  });
  return res.send();
});

//Get LAST POST
app.get("/lastpost", (req, res) => {
  const q = "SELECT postId from posts ORDER BY postId DESC";
  database.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data[0]);
    }
  });
});

//Get POST from :id
app.get("/post/:id", (req, res) => {
  const postId = req.params.id;
  const q =
    "SELECT * FROM posts, users WHERE posts.postId = ? AND posts.postUser = users.userId;";

  database.query(q, [postId], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get TAGS from POST:id
app.get("/posttag/:id", (req, res) => {
  const postId = req.params.id;
  const q =
    "SELECT * FROM tags INNER JOIN posts_tags ON tags.tagId = posts_tags.tag WHERE posts_tags.post = ?";

  database.query(q, [postId], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get POSTS of TAG:id
app.get("/tag/:id", (req, res) => {
  const tagId = req.params.id;
  const q =
    "SELECT * FROM posts INNER JOIN users ON posts.postUser = users.userId INNER JOIN posts_tags ON posts.postId = posts_tags.post WHERE posts_tags.tag = ?";

  database.query(q, [tagId], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get POSTS from USER:id
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const q =
    "SELECT * FROM posts, users WHERE users.userId = ? AND posts.postUser = users.userId";

  database.query(q, [userId], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//SEARCH
app.get("/search/:s", (req, res) => {
  const search = req.params.s;

  database.query(
    "SELECT * FROM posts INNER JOIN users ON posts.postUser = users.userId WHERE posts.postTitle LIKE '%" +
      [search] +
      "%'",
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    }
  );
});

//POST INTO POSTS_TAGS
app.post("/poststags", (req, res) => {
  const postQuery = "INSERT INTO posts_tags (`post`, `tag`) VALUES (?)";
  const values = [req.body.postId, req.body.tagId];
  database.query(postQuery, [values], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Post Submitted Sucessfully!");
    }
  });
});
