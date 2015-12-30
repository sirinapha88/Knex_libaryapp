exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_categories', function(table){
    table.increments();
    table.integer('book_id').references('id').inTable('books');
    table.integer('category_id').references('id').inTable('categories');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book_categories');
};