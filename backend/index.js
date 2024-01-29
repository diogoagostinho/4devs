import express from "express";
import mysql from "mysql";

const app = express();
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@$$w0rd",
  database: "4devs",
});

app.listen(6969, () => {
  console.log("Connected");
});

app.use(express.json());

//Get USERS
app.get("/users", (req, res) => {
  const userQuery = "SELECT * FROM user";
  database.query(userQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get TAGS
app.get("/tags", (req, res) => {
  const tagQuery = "SELECT * FROM tag";
  database.query(tagQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//Get POSTS
app.get("/posts", (req, res) => {
  const postQuery = "SELECT * FROM post";
  database.query(postQuery, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/posts", (req, res) => {
  const postQuery =
    "INSERT INTO post (`Title`,`Description`,`Content`,`Date`,`PostUser`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.content,
    req.body.date,
    req.body.postuser,
  ];
  database.query(postQuery, [values], (err) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Post Submitted Sucessfully!");
    }
  });
});
