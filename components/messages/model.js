const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MESSAGE_TABLE = "Message";

const MySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const model = mongoose.model(MESSAGE_TABLE, MySchema);
module.exports = model;
