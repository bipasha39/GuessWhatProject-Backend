
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

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));