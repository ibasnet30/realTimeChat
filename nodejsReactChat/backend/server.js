const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

// cors suggested only for developement, not for production
app.use(cors({ origin: true }));

app.get("/", async (req, res) => {
  res.send("Testing");
});

app.listen(30011, () => {
  console.log("Connected to the port 3001");
});
