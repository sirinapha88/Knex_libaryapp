var express = require("express");
var router = express.Router();
var knex = require('../db/knex');
var locus = require("locus");

// Show All Books
router.get('/',function(req,res){
	knex("authors").innerJoin("books", "books.author_id", "authors.id")
	.then(function(books){
		knex("authors").first().then(function(author) {
			res.render("displayAll", { author: author, books : books});
		});
	});	
});
// Show book from author id
router.get('/:author_id',function(req,res){
	var id = req.params.author_id;
	 knex("authors")
    .innerJoin("books", "books.author_id", "authors.id")
    .where("author_id", id)
    .then(function(books) {
      
      knex("authors").first().where("id", id).then(function(author) {
        res.render("books/index", {
          author: author,
          books : books
        });
      });
    });
});
// New
router.get('/:author_id/new',function(req,res){
	var id = req.params.author_id;
	knex("authors").where({id:id}).first().then(function(author){
		res.render('books/new', {author:author});
	});
});
// Post
router.post('/:author_id/new',function(req,res){
	
	var name = req.body.name;
	var author_id = req.params.author_id;
	
	knex('books').insert({"book_name":name, "author_id":author_id}).then(function(){
		res.redirect('/authors');
	});
});
// Edit
router.get('/:author_id/:id/edit',function(req,res){
	var id = req.params.id;
	var author_id = req.params.author_id;
	knex('books').where({id:id}).first().then(function(book){
		res.render("books/edit", {author_id:author_id,book:book});
	});
});
// Update
router.put('/:author_id/:id',function(req,res){
	var id = req.params.id;
	var author_id = req.params.author_id;
	knex('books').where({id:id}).first().update(req.body).then(function(){
		res.redirect('/authors/books/' + author_id);
	});
});




module.exports = router;
