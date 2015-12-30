exports.up = function(knex, Promise) {
 	return knex.schema.createTable('books', function(table){
 		table.increments();// id serial primary key
 		table.string('book_name');
 		table.integer('author_id').references('id').inTable('authors');
 	});
};
// this is for drop a table
exports.down = function(knex, Promise) {
	return knex.schema.dropTable('books');  
};
