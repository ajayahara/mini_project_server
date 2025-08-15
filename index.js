// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/config");
const { connection } = require("./config/db");
const { authRouter } = require("./routes/auth.route");
const { bookRouter } = require("./routes/book.route");
const { myBookRouter } = require("./routes/myBook.route");

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://mini-project-client-ajayaharas-projects.vercel.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/books", bookRouter);
app.use("/api/my_books", myBookRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Connected to DB \nServer is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
