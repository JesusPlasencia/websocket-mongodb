const Model = require("./model");

const addChat = (users) => {
  const myChat = new Model(users);
  myChat.save();
};

const getChat = async (userId) => {
  return new Promise((res, rej) => {
    let filter = {};
    if (userId) {
      filter = {
        user: userId,
      };
    }
    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          rej(error);
          return false;
        }
        res(populated);
      });
  });
};

module.exports = {
  add: addChat,
  list: getChat,
};
