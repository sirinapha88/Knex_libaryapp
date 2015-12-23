var express = require("express");
var router = express.Router();
var knex = require('../db/knex');
var locus = require("locus");

router.get('/',function(req,res){
	knex('books').then(function(books){
		res.render('books/index',{books:books});
	});
});

router.get('/new',function(req,res){
	res.render("books/new");
});

router.post('/',function(req,res){
	var name = req.body.name;
	var author_id = req.body.author;
	
	knex('books').insert(req.body).then(function(book){
		res.redirect('/authors/' + author_id + '/books');
	});
});

router.get('/:id/edit',function(req,res){
	var id = req.params.id;
	knex('authors').where({id:id}).first().then(function(author){
		res.render("authors/edit", {author:author});
	});
});

module.exports = router;
