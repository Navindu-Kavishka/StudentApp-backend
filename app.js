const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app=express();
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"stdDB"
});

db.connect(err => {
    if(err) throw err;
    console.log("stdDB connected ! ")
});