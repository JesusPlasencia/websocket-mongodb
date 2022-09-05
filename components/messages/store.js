const Model = require("./model");

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  return new Promise((res, rej) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          rej(error);
          return false;
        }
        res(populated);
      });
  });
};

const getMessage = async (id) => {
  const message = await Model.findOne({
    _id: id,
  });
  return message;
};

const updateText = async (id, message) => {
  const foundMessage = await getMessage(id);
  foundMessage.message = message;
  const updatedMessage = await foundMessage.save();
  return updatedMessage;
};

const removeMessage = async (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  get: getMessage,
  update: updateText,
  remove: removeMessage,
};
