const io = require("socket.io");

const socket = {};

function connectSocketIO(server) {
  socket.io = io(server);
}

module.exports = {
  connectSocketIO,
  socket,
};
