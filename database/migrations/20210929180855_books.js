
exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id');
        table.string('name_book',255).notNullable();
        table.timestamps(true,true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('books');
};
