const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MESSAGE_TABLE = "Message";

const MySchema = new Schema({
  //
  user: {
    type: String,
    required: true,
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
