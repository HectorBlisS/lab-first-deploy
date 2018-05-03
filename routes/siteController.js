const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyBhtwlTC-UPHbpBpgnlZ9RtGHnYZbrsIc0" });
});

module.exports = siteController;
