const express = require("express");
const multer = require("multer");

const test = express.Router();

const upload = multer().none();

test.get("/test/", upload, (req, res) => {
  return res.status(200).json({"Your ip adrres is":req.ip});
});

module.exports = test;