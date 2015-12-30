var express = require("express");
var router = express.Router();
var knex = require('../db/knex');
var locus = require("locus");

router.get('/',function(req,res){
	knex('categories').then(function(categories){
		res.render('categories/index',{categories:categories});
	});
});

router.get('/new',function(req,res){
	 res.render("categories/new");
});

router.post('/',function(req,res){
	knex('categories').insert(req.body).then(function(){
    	res.redirect('/categories');
	});
});

// Edit
router.get('/:id/edit',function(req,res){
	var id = req.params.id;
	knex('categories').where({id:id}).first().then(function(category){
		res.render("categories/edit", {category:category});
	});
});
// Update
router.put('/:id',function(req,res){
	var id = req.params.id;
	knex('categories').where({id:id}).first().update(req.body).then(function(){
		res.redirect('/categories');
	});
});
// Delete
router.delete('/:id',function(req,res){
	var id = req.params.id;
	knex('categories').where({id:id}).del().then(function(){
		res.redirect('/categories');
	});
});

module.exports = router;