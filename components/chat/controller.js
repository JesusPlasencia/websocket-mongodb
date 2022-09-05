const store = require("./store");

function addChat(users) {
  return new Promise((res, rej) => {
    if (!users || !Array.isArray(users)) {
      rej("No Data Found");
      return false;
    }
    const chat = {
      users,
    };
    store.add(chat);
    res(chat);
  });
}

function listChats(userId) {
  return new Promise((res, rej) => {
    if (!userId) {
      rej("No Found Id");
    }
    res(store.list(userId));
  });
}

module.exports = {
  addChat,
  listChats,
};
