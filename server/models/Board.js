const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new mongoose.Schema({
  boardTitle: {
    type: String,
    required: true,
  },
  boardId: {
    type: String,
  },
  columns: { type: Schema.Types.Array, ref: "column" },
});

const Board = mongoose.model("board", boardSchema);
module.exports = Board;
