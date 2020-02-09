
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personas').del()
    .then(function () {
      // Inserts seed entries
      return knex('personas').insert([
        { nombre: 'Oscar',
          apellido: 'Salvador',
          correo: 'oem.salvador@hotmail.com'
        },
        { nombre: 'David',
          apellido: 'Quinaluisa',
          correo: 'defq.quinaluisa@yavirac.edu.ec',
        }
      ]);
    });
};
