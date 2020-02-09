;
let datosBase = require('./baseDatos/conexion')

module.exports = {
    development: {
        migrations: { directory: __dirname + '/db/migraciones'},
        seeds: { directory: __dirname + '/db/seeds' },
        client: 'pg',
        connection: datosBase.connection   
    },
    production: {
        migrations: { directory: __dirname + '/db/migraciones'},
        seeds: { directory: __dirname + '/db/seeds' },
        client: 'pg',
        connection: datosBase.connection   
    }

    
}
