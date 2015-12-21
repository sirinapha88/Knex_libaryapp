var express = require("express");
var router = express.Router();
var knex = require('../db/knex');
var locus = require("locus");

router.get('/',function(req,res){
	knex('books').then(function(books){
		res.render('index',{books:books});
	});
});

router.get('/new',function(req,res){
	res.render("new");
});

router.post('/',function(req,res){
	var name = req.body.name;
	var author_id = req.body.author;
	
	knex('books').insert(req.body).then(function(){
		res.redirect('./books');
	});
});

module.exports = router;