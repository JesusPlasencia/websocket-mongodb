const express = require("express");
const messages = require("../components/messages/network");
const users = require("../components/user/network");
const chats = require("../components/chat/network");

const routes = (server) => {
  server.use("/messages", messages);
  server.use("/users", users);
  server.use("/chats", chats);
};

module.exports = routes;
