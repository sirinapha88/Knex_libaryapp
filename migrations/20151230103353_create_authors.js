exports.up = function(knex, Promise) {
 	return knex.schema.createTable('authors', function(table){
 		table.increments();// id serial primary key
 		table.string('name');
 	});
};
// this is for drop a table
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('authors');  
};
