const express = require('express') // importing express
const mysql   = require('mysql');
const connection = mysql.createConnection({
    user     : 'root',
    password : 'root',
    database : 'mern_crash_cousre_db'
});

connection.connect( err => {
    if(err) {
        console.log('There is a problem in connecting')
        console.log(err)
    }

    else 
        console.log('Connected Successfuly')
});



const app = express() // initilizing express

app.get('/abc', (req, res) => { // accepting request on path /
    const obj = { msg : 'hello' } // creating result object
    res.json(obj) // returning a response to client
    // JSON : JavaScript Object Notation
}) //http//:localhost:3000/abc

app.listen(3000, function() { // http//:localhost:3000
    console.log(`Listening on port 3000`)
})

// REST - REpresentational State Transfer
// RMM - 