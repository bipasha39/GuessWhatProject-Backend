
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

//Import routes
const wordsRouter = require("./routes/words.js");
app.use(express.json());
app.use("/", wordsRouter);

app.get("/", (req, res) => {
  res.send("I'm here");
});

app.listen(5000, () => {
  console.log(`Server wait you no http://localhost:5000`);
});