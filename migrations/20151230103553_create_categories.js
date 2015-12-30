exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
    	table.increments();// id serial primary key
 		table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};