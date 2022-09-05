const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/:userId", (req, res) => {
  const id = req.params.userId;
  controller
    .listChats(id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Internal Error", 500, error);
    });
});

router.post("/", (req, res) => {
  controller
    .addChat(req.body.users)
    .then((fullChat) => {
      response.success(req, res, fullChat, 201);
    })
    .catch((error) => {
      response.error(req, res, "Internal Error.", 500, error);
    });
});

// router.patch("/:userId", (req, res) => {
//   const id = req.params.userId;
//   const body = req.body.message;
//   controller
//     .updateMessage(id, body)
//     .then((data) => {
//       response.success(req, res, data, 200);
//     })
//     .catch((error) => {
//       response.error(req, res, "Internal Error", 200, error);
//     });
// });

// router.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   controller
//     .deleteMessage(id)
//     .then(() => {
//       response.success(req, res, `Message ${id} deleted.`, 200);
//     })
//     .catch((error) => {
//       response.error(req, res, "Internal Error.", 500, error);
//     });
// });

module.exports = router;
