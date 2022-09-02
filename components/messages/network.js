const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.header({
    "Custom-Header": "This is my Header",
  });
  response.success(req, res, "First Response from Parameter", 200);
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, `Created successfully: ${fullMessage}`, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "An unhandled method.",
        403,
        "It's just a demo."
      );
    })
    .finally(() => {
      console.log("End of the Game");
    });
});

module.exports = router;
