exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('peliculas').del()
        .then(function() {
            // Inserts seed entries
            return knex('peliculas').insert([{
                    titulo: 'jack y jill',
                    sinopsis: 'gemelos',
                    precio: 20.80,
                    genero: 'comedia',
                    sala: '1',
                    horario: '10am - 12pm',
                    imagen: 1
                },
                {
                    titulo: 'resident evil',
                    sinopsis: 'zombies',
                    precio: 20.81,
                    genero: 'supervivencia',
                    sala: '3',
                    horario: '18pm - 20pm',
                    imagen: 2
                }
            ]);
        });
};