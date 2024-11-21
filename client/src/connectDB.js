var sql = require('mssql');

// config DB
var config = {
    sever: 'localhost',
    user: 'sa',
    password: 'az221988762',
    database: 'FILMSTATION',
    options: {
        enableArithAbort: true,
        encrypt: true
    }

};

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    conn: conn,
    sql: sql
}