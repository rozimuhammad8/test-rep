const express = require("express");
const multer = require("multer");

const test = express.Router();

const upload = multer().none();

test.get("/test/", upload, (req, res) => {
  return res.status(200).json([req.ip,req.clientIp,req.connection.remoteAddress]);
});

module.exports = test;
