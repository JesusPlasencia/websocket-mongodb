const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CHAT_TABLE = "Chat";

const MySchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: "User",
    },
  ],
});

const model = mongoose.model(CHAT_TABLE, MySchema);
module.exports = model;
