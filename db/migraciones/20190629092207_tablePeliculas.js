exports.up = function(knex, Promise) {
    return knex.schema.createTable('peliculas', function(prod) {
        prod.increments('id').notNullable();
        prod.string('titulo').notNullable();
        prod.string('sinopsis').notNullable();
        prod.float('precio').notNullable();
        prod.string('genero').notNullable();
        prod.string('sala').notNullable();
        prod.string('horario').notNullable();
        prod.integer('imagen').notNullable().references('id').inTable('imagen').onDelete('cascade');;
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('peliculas');
};