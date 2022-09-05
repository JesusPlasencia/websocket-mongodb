const Model = require("./model");

const addUser = (user) => {
  const myUser = new Model(user);
  myUser.save();
};

const getUsers = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const users = await Model.find(filter);
  return users;
};

const getUser = async (id) => {
  const message = await Model.findOne({
    _id: id,
  });
  return message;
};

const updateUser = async (id, name) => {
  const foundUser = await getUser(id);
  foundUser.name = name;
  const updatedUser = await foundUser.save();
  return updatedUser;
};

const removeUser = async (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addUser,
  list: getUsers,
  get: getUser,
  update: updateUser,
  remove: removeUser,
};
