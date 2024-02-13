import pool from "./pool"

export const createUserTable = ()=>{
    pool.query('CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY AUTO_INCREMENT,email VARCHAR(255),password VARCHAR(255),photoUrl TEXT,name VARCHAR(255))')
}