const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authorsRouter = require('./routes/authors.js');

dotenv.config();
// Establish a connection with the Mongo Database
// Get the username, password, host, and databse from the .env file
const mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // set the view engine
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views/");

// // Load routes
// const movieRouter = require("./routes/movie");
// const indexRouter = require("./routes/index");

// app.use("/", indexRouter);
// app.use("/movie", movieRouter);
app.use('/api/author', authorsRouter);

app.use(function(req, res) {
  res.status(404).json({"error":"Invalid API Request"});
})


// listen for requests :)
const listener = app.listen(process.env.PORT || 5000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});