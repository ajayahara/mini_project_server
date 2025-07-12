const { BookModel } = require("../models/book.model");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ books });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books", error: err.message });
  }
};
