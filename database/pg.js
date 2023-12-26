const pg = require('pg');
require('dotenv').config()

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: process.env.DB_PASSWORD ,
    port: 5432
    
})
db.connect((err)=>{
    console.log('connected to database')

});






module.exports = db