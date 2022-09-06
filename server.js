//Calling the Modules
const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");

const bodyParser = require("body-parser");
const socket = require("./socket");
const db = require("./config/db");
const config = require("./config/config");

// Connecting DB
db(config.URI);

// Creating the Router
const router = require("./network/routes");

//Creating the App
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connectSocketIO(server);

//app.use(router);
router(app);

app.use("/app", express.static("public"));

server.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
