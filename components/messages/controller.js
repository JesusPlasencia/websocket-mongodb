const store = require("./store");

function addMessage(user, message) {
  return new Promise((res, rej) => {
    if (!user || !message) {
      console.error("[messageController] There is no message or user");
      rej("No Data Found");
      return false;
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    store.add(fullMessage);
    res(fullMessage);
  });
}

function getMessages() {
  return new Promise((res, rej) => {
    res(store.list());
  });
}

module.exports = { addMessage, getMessages };
