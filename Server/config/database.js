const express = require("express");
const app = express();
const mySql = require("mysql");

const Conn = mySql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"zjinstitute_db"
});

// const Conn = mySql.createConnection({
//     host:"localhost",
//     user:"zjinstitute_user",
//     password:"uwqad]*w-ieP",
//     database:"zjinstitute_db"
// });

module.exports = Conn;