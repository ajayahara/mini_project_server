const { MyBookModel } = require("../models/myBook.model");

exports.getMyBooks = async (req, res) => {
  try {
    const books = await MyBookModel.find({ userId: req.user._id }).populate("bookId");
    res.json({ books });
  } catch (err) {
    res.status(500).json({ message: "Failed to get books", error: err.message });
  }
};

exports.addToMyBooks = async (req, res) => {
  const { bookId } = req.params;

  try {
    const exists = await MyBookModel.findOne({ userId: req.user._id, bookId });
    if (exists) return res.status(400).json({ message: "Book already added" });

    const newEntry = await MyBookModel.create({
      userId: req.user._id,
      bookId,
      status: "Want to Read",
    });

    res.status(201).json({ message: "Book added", entry: newEntry });
  } catch (err) {
    res.status(500).json({ message: "Add failed", error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;

  try {
    const updated = await MyBookModel.findOneAndUpdate(
      { userId: req.user._id, bookId },
      { status },
      { new: true }
    );
    res.json({ message: "Status updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

exports.updateRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;

  try {
    const updated = await MyBookModel.findOneAndUpdate(
      { userId: req.user._id, bookId },
      { rating },
      { new: true }
    );
    res.json({ message: "Rating updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Rating update failed", error: err.message });
  }
};
