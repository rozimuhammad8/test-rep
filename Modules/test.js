const express = require("express");
const multer = require("multer");

const test = express.Router();

const upload = multer().none();

test.get("/test/", upload, (req, res) => {
  return res.send([req.ip,req.clientIp,req.socket.remoteAddress],req.headers['cf-connectng-ip'],req.headers['cf-real-ip'],req.headers['cf-forwarded-for'],req.socket.remoteAddress);
});

module.exports = test;
