
exports.up = function(knex, Promise) {
    return knex.schema.createTable('personas', function(ul){
        ul.increments('id').notNullable();
        ul.string('nombre').notNullable();
        ul.string('apellido').notNullable();
        ul.string('correo').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('personas');
};
