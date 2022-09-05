const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const USER_TABLE = "User";

const MySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const model = mongoose.model(USER_TABLE, MySchema);
module.exports = model;
