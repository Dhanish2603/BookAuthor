const express = require("express");
const bookRoutes = express.Router();
const controller = require("../controller/bookController");
const authentication = require("../middleware/auth");

bookRoutes.post("/addbook", authentication, controller.addBook);
// id,name,

bookRoutes.get("/", authentication, controller.listBooks);
// all list books
//.put(/book/likes/:id)likes for book

module.exports = bookRoutes;
