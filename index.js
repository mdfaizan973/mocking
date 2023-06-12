const express = require("express");
const { connection } = require("./db");
const { PostRouter } = require("./router/Post.Router");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/posts", PostRouter);

app.listen(9876, async () => {
  try {
    await connection;
    console.log("Server is running at port 9876");
  } catch (error) {
    console.log(error);
  }
});
