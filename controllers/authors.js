var express = require("express");
var router = express.Router();
var knex = require('../db/knex');

router.get('/',function(req,res){
	knex('authors').then(function(authors){
		res.render('authors/index',{authors:authors});
	});
});

router.get('/new',function(req,res){
	res.render("authors/new");
});

router.post('/',function(req,res){
	knex('authors').insert(req.body).then(function(){
		res.redirect('./authors');
	});
});

router.get('/:id/edit',function(req,res){
	var id = req.params.id;
	knex('authors').where({id:id}).first().then(function(author){
		res.render("authors/edit", {author:author});
	});
});

router.put('/:id',function(req,res){
	var id = req.params.id;
	knex('authors').where({id:id}).first().update(req.body).then(function(){
		res.redirect('/authors');
	});
});

router.delete('/:id',function(req,res){
	var id = req.params.id;
	knex('authors').where({id:id}).del().then(function(){
		res.redirect('/authors');
	});
});

module.exports = router;

