//Calling the Modules
const express = require("express");
const bodyParser = require("body-parser");
const response = require("./network/response");

// Creating the Router
const router = express.Router();

//Creating the App
const app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/", (req, res) => {
  res.json({
    message: "Hello from V8",
  });
});

router.get("/messages", (req, res) => {
  res.header({
    "Custom-Header": "This is my Header",
  });
  response.success(req, res, "First Response from Parameter", 200);
});

router.post("/messages", (req, res) => {
  let { message } = req.body;
  let checkError = req.query.error;
  if (checkError === "ok") {
    response.error(req, res, "An unhandled method.", 403, "It's just a demo.");
    return;
  }
  response.success(req, res, `Created successfully: ${message}`, 201);
});

app.use("/app", express.static("public"));

app.listen(3000, () => {
  console.log("Listening on 3000...");
});
