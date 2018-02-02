const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
})

connection.connect((error) => {
    if(!!error) {
        console.log('error in mysql connection');
    } else {
        console.log('Connected');
    }
})

app.listen(3030, ()=> {
    console.log('running server on localhost:3030')
})

app.get('/', (req, res)=> {
    res.send('Hello World...!');
    connection.query('SELECT * FROM users', (error, rows, fields)=> {
        if(!!error) {
            console.log('error while fetching the data');
        } else {
            console.log('SUCCESS\n');
            console.log(rows);
        }
    })
})