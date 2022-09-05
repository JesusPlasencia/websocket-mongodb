const store = require("./store");

function addUser(name) {
  return new Promise((res, rej) => {
    if (!name) {
      rej("No User to Add");
      return false;
    }
    const fullUser = {
      name,
      createdAt: new Date(),
    };
    store.add(fullUser);
    res(fullUser);
  });
}

function getUsers(filterUser) {
  return new Promise((res, rej) => {
    res(store.list(filterUser));
  });
}

function updateUser(id, name) {
  return new Promise(async (res, rej) => {
    if (!id || !name) {
      rej("Name or Id not Found");
      return false;
    }
    const response = await store.update(id, name);
    res(response);
  });
}

function deleteUser(id) {
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
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
