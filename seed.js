const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { BookModel } = require("./models/book.model");
dotenv.config();

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    coverImage: "https://placehold.co/300x300/3498DB/FFFFFF?text=Clean+Code",
    availability: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    coverImage:
      "https://placehold.co/300x300/FF5733/FFFFFF?text=The+Pragmatic+Programmer",
    availability: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://placehold.co/300x300/2ecc71/FFFFFF?text=Atomic+Habits",
    availability: true,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    coverImage: "https://placehold.co/300x300/9b59b6/FFFFFF?text=Deep+Work",
    availability: true,
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    coverImage: "https://placehold.co/300x300/f1c40f/000000?text=Lean+Startup",
    availability: true,
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    coverImage: "https://placehold.co/300x300/34495e/FFFFFF?text=Zero+to+One",
    availability: true,
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    coverImage: "https://placehold.co/300x300/e74c3c/FFFFFF?text=Can't+Hurt+Me",
    availability: true,
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    coverImage: "https://placehold.co/300x300/d35400/FFFFFF?text=Subtle+Art",
    availability: true,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    coverImage:
      "https://placehold.co/300x300/2980b9/FFFFFF?text=Thinking+Fast+Slow",
    availability: true,
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    coverImage: "https://placehold.co/300x300/27ae60/FFFFFF?text=7+Habits",
    availability: true,
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    coverImage:
      "https://placehold.co/300x300/8e44ad/FFFFFF?text=Start+With+Why",
    availability: true,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    coverImage: "https://placehold.co/300x300/c0392b/FFFFFF?text=Rich+Dad",
    availability: true,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: "https://placehold.co/300x300/1abc9c/FFFFFF?text=Alchemist",
    availability: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://placehold.co/300x300/34495e/FFFFFF?text=Mockingbird",
    availability: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    coverImage: "https://placehold.co/300x300/2c3e50/FFFFFF?text=1984",
    availability: true,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverImage: "https://placehold.co/300x300/f39c12/FFFFFF?text=Sapiens",
    availability: true,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    coverImage: "https://placehold.co/300x300/e67e22/FFFFFF?text=Educated",
    availability: true,
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    coverImage: "https://placehold.co/300x300/3498db/FFFFFF?text=Habit",
    availability: true,
  },
  {
    title: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    coverImage: "https://placehold.co/300x300/95a5a6/FFFFFF?text=Meaning",
    availability: true,
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    coverImage: "https://placehold.co/300x300/1abc9c/FFFFFF?text=Agreements",
    availability: true,
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    coverImage: "https://placehold.co/300x300/7f8c8d/FFFFFF?text=Grit",
    availability: true,
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    coverImage: "https://placehold.co/300x300/f39c12/FFFFFF?text=Hooked",
    availability: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await BookModel.deleteMany(); // clear old data
    await BookModel.insertMany(books);
    console.log("Books seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
