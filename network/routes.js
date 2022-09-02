const express = require("express");
const message = require("../components/messages/network");

const routes = (server) => {
  server.use("/messages", message);
};

module.exports = routes;
