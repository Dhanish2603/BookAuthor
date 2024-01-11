const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authorRoutes = require('./routes/authorRotues');
const bookRoutes = require('./routes/bookRoutes')

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//news
app.use(cors());

// routes
app.use('/', authorRoutes);
app.use('/books', bookRoutes);



// dotnev
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// Connect Mongodb
mongoose
  .connect(
    "mongodb+srv://madhvesh:madhvesh@devtemp.lz30rdg.mongodb.net/book_Api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected MONGODB");
    app.listen(5000, () => {
      console.log(`Listening on Port 5000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
