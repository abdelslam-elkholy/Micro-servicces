const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get("/events", (req, res) => {});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type == "postCreated") {
    const { title, id } = data;

    posts[id] = { title, id, comments: [] };
  } else if (type == "commentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content });
  }
});

app.listen(4002, () => {
  console.log("listening on port 4002");
});
