const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.USER,//"postgres",
    password: process.env.PASSWORD,//"root",
    host: process.env.HOST,//"localhost",
    port: process.env.PORT_DB,//5432,
    database: process.env.DATABASE,//"node_postgres"
})

module.exports = pool