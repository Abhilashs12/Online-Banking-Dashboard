const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "online_banking"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

module.exports = db;
