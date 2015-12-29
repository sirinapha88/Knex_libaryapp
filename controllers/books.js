var express = require("express");
var router = express.Router();
var knex = require('../db/knex');
var locus = require("locus");

router.get('/',function(req,res){
	var id = req.params.author_id;
	knex('books').then(function(books){
		res.render('books/index',{books:books,id:id});
	});
});

router.get('/new',function(req,res){
	var id = req.params.author_id;
  	res.render('books/new', {id:id});
});

router.post('/',function(req,res){
	
	var name = req.body.name;
	var author_id = req.params.author_id;
	
	knex('books').insert({book_name:name, author_id:author_id}).then(function(book){
		res.redirect('/authors/' + author_id + '/books', {author_id:author_id});
	});
});

router.get('/:id/edit',function(req,res){
	var id = req.params.id;
	knex('books').where({id:id}).first().then(function(book){
		res.render("books/edit", {book:book});
	});
});

module.exports = router;
