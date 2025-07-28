import { createPool } from "mysql2/promise";

//Configuracion con valores por defecto
const poolConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD  || '',
    database: process.env.DB_NAME || 'tiendaRider',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    timezone: 'local',
    charset: 'utf8mb4',
    decimalNumbers: true,
    connectionLimit: 20,            //(num_CPU * 2) + 1
    queueLimit: 100,                //Evitar sobrecarga de memoria
    idleTimeout: 30000,             //30 segundos
    enableKeepAlive: true,          //evitar timeouts
    keepAliveInitialDelay: 10000    //10 segundos
};

console.log('Configuración de MySQL:', poolConfig);

export const pool = createPool(poolConfig);

pool.getConnection()
.then(connection => {
    console.log('✅Conectado a MySQL. La Base de datos actual es: ', connection.config.database);
    connection.release();
})
.catch(err => {
    console.error('❌Error de conexion a MySQL:', err.message);
    process.exit(1);
});

pool.query('SELECT DATABASE() AS db')
.then(([rows]) => {
    console.log('✅Conectado a la base de datos:', rows[0].db);
})
.catch(err => {
    console.error('❌Error al conectar a la base de datos:', err.message);
    process.exit(1);
});