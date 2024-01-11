const book = require("../model/booksModel");
const author = require("../model/authorModel");

// adding book
exports.addBook = async (req, res) => {
  try {
    // add book details title,likes,author details
    const { title } = req.body;
    const authorId = req.author._id;
    //   console.log(authorId);
    //   console.log(bookDetails);
    const createdBook = await book.create({ title, author: authorId });
    const publishArray = await author.findByIdAndUpdate(authorId, {
      $push: { Publishment: createdBook._id },
    });
    // console.log(createdBook);
    console.log(publishArray);
    res.status(200).send(createdBook);
  } catch (error) {
    console.log(new Error());
    res.status(500).send("Error in creating book in database", error);
  }
};

// list of books
exports.listBooks = async (req, res) => {
  try {
    // list all , likes (increase - decrease),
    const fetchBooks = await book.find()
    // console.log(fetchBooks)
    res.send(fetchBooks)
  } catch (error) {
    console.log(new Error());
    res.status(500).send("Error in creating book in database", error);
  }
};
