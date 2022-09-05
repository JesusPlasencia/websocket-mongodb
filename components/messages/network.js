const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  const filterMessages = req.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((error) => {
      response.error(req, res, "Unexpected Error", 500, error);
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((error) => {
      response.error(req, res, "An unhandled method.", 403, error);
    });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body.message;
  controller
    .updateMessage(id, body)
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
    .deleteMessage(id)
    .then(() => {
      response.success(req, res, `Message ${id} deleted.`, 200);
    })
    .catch((error) => {
      response.error(req, res, "Internal Error.", 500, error);
    });
});

module.exports = router;
