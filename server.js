const express = require("express");
const cors = require("cors");
const test = require("./Modules/test");

const app = express();

app.use(cors());
app.use(express.json());
app.use("", test);


// Start the server
app.listen(3000,function () {
  console.log("Server listening on port 3000");
});