
exports.up = function(knex) {
    return knex.schema.createTable('user_books', table => {
        table.increments('id');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id').onDelete('cascade');
        table.integer('book_id').unsigned();
        table.foreign('book_id').references('books.id').onDelete('cascade');
        table.timestamps(true,true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_books');
};
