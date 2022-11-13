const router = require("express").Router();
const { genres, books, reviews, users } = require("./mock.js");
const { reply, getById } = require("./utils");

router.get("/genres", (req, res, next) => {
  reply(res, genres);
});

router.get("/book/:id", (req, res, next) => {
  let bookId = req.params.id

  let result = books
  let book = {}
  if (bookId) {
    book = getById(books)(bookId)
  }
  if (book) {
    result = book
  }
  reply(res, result)
})

router.get("/books/:id", (req, res, next) => {
  let genreId = req.params.id
  // const { genreId, bookId } = req.query;
  let result = books;

  if (genreId) {
    const genre = getById(genres)(genreId);

    if (genre) {
      result = genre.books.map(getById(result));
    }
  }

  // if (!genreId && bookId) {
  //   result = getById(result)(bookId);
  // }
  reply(res, result);
});

router.get("/reviews/:id", (req, res, next) => {
  let reviewId = req.params.id

  let result = reviews;
  if (reviewId) {
    const review = getById(reviews)(reviewId);

    if (review) {
      result = review
    }

  }
  reply(res, result);
});

router.get("/users", (req, res, next) => {
  reply(res, users);
});

module.exports = router;
