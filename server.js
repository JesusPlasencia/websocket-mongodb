//Calling the Modules
const express = require("express");
const bodyParser = require("body-parser");

// Creating the Router
const router = require("./network/routes");

//Creating the App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);
router(app);

app.use("/app", express.static("public"));

app.listen(3000, () => {
  console.log("Listening on 3000...");
});
