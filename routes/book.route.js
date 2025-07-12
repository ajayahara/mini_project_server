const express = require("express");
const bookRouter = express.Router();
const { getAllBooks } = require("../controllers/book.controller");

bookRouter.get("/", getAllBooks);

module.exports = { bookRouter };
