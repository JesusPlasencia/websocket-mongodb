const store = require("./store");
const socket = require("../../socket").socket;

function addMessage(chat, user, message, file) {
  return new Promise((res, rej) => {
    if (!chat || !user || !message) {
      console.error("[messageController] There is no message or user");
      rej("No Data Found");
      return false;
    }

    let fileUrl = "";
    if (file) {
      fileUrl = "http://localhost:3000/app/files/" + file.filename;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit("message", fullMessage);
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
