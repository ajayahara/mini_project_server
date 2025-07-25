const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    coverImage: String,
    availability: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("Book", bookSchema);
module.exports = {
  BookModel,
};
