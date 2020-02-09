exports.up = function(knex, Promise) {
    return knex.schema.createTable('imagen', function(img) {
        img.increments('id').notNullable();
        img.string('nombreImagen').notNullable();
        img.string('tipoImagen').notNullable();
        img.text('contenidoImagen').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('imagen');
};