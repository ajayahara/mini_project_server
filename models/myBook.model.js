const mongoose = require("mongoose");

const myBookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    status: {
      type: String,
      enum: ["Want to Read", "Currently Reading", "Read"],
      default: "Want to Read",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const MyBookModel = mongoose.model("MyBook", myBookSchema);

module.exports = {
  MyBookModel,
};
