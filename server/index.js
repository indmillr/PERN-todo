const express = require("express");
const app = express();
const cors = require("cors");

// ----- MIDDLEWARE ----- //
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
