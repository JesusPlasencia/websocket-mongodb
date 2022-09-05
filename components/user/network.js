const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  const filterUser = req.query.name || null;
  controller
    .getUsers(filterUser)
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((error) => {
      response.error(req, res, "Unexpected Error", 500, error);
    });
});

router.post("/", (req, res) => {
  controller
    .addUser(req.body.name)
    .then((fullUser) => {
      response.success(req, res, fullUser, 201);
    })
    .catch((error) => {
      response.error(req, res, "An unhandled method.", 403, error);
    });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body.name;
  controller
    .updateUser(id, body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Internal Error", 200, error);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  controller
    .deleteUser(id)
    .then(() => {
      response.success(req, res, `User ${id} deleted.`, 200);
    })
    .catch((error) => {
      response.error(req, res, "Internal Error.", 500, error);
    });
});

module.exports = router;
