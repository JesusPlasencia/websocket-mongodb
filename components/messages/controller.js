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

function getMessages(filterUser) {
  return new Promise((res, rej) => {
    res(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (res, rej) => {
    if (!id || !message) {
      rej("Message or Id not Found");
      return false;
    }
    const response = await store.update(id, message);
    res(response);
  });
}

function deleteMessage(id) {
  return new Promise(async (res, rej) => {
    if (!id) {
      rej("Id Not Found");
      return false;
    }
    await store
      .remove(id)
      .then(res())
      .catch((error) => {
        rej(error);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
