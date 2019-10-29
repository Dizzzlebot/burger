var mysql = require('mysql');


if (process.envJAWSDB_URL) {
    connection = mysql.createConnection(process.env.envJAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8080,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;