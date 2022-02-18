const mysql = require('mysql');
module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    connectionLimit: 100,
    database: 'stationery_on_door'
});