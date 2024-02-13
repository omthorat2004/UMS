import mysql2 from 'mysql2'

const pool = mysql2.createPool({
    connectionLimit:1000,
    host:'localhost',
    user:'root',
    password:'new_password',
    database:'UMS'
})

export default pool