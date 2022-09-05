const Model = require("./model");

const addMessage = (message) => {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
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
