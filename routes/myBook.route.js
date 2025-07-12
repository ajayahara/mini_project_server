const express = require("express");
const myBookRouter = express.Router();
const { authentication } = require("../middleware/auth.middleware");
const {
  getMyBooks,
  addToMyBooks,
  updateStatus,
  updateRating,
} = require("../controllers/myBook.controller");

myBookRouter.use(authentication);

myBookRouter.get("/", getMyBooks);
myBookRouter.post("/:bookId", addToMyBooks);
myBookRouter.patch("/:bookId/status", updateStatus);
myBookRouter.patch("/:bookId/rating", updateRating);

module.exports = { myBookRouter };
