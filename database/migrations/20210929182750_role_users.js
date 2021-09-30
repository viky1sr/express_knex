
exports.up = function(knex) {
    return knex.schema.createTable('role_users', table => {
        table.increments('id');
        table.integer('role_id').unsigned();
        table.foreign('role_id').references('roles.id').onDelete('cascade');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id').onDelete('cascade');
        table.timestamps(true,true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('role_users');
};
