var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var methodOverride = require("method-override");
var authorRouter = require("./controllers/authors.js");
var bookRouter = require("./controllers/books.js");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use('/authors', authorRouter);
// app.use('/authors/:author_id/books', bookRouter);

app.listen(3000, function(){
	console.log("Server started on port 3000");
});