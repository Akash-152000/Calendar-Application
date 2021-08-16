const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "akash",
    database: "calendar",
});


app.post("/api/register", (req, res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    const tableName = fname + password;
    const sqlUsers = " CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(255), lname VARCHAR(255),email VARCHAR(255),password VARCHAR(255),tablename VARCHAR(255))";
    const sqlInsert = "INSERT INTO users (fname,lname,email,password,tablename) VALUES (?,?,?,?,?)";
    const sql = `CREATE TABLE ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, date VARCHAR(255),title VARCHAR(255),description VARCHAR(255),starttime VARCHAR(255),endtime VARCHAR(255))`;
    db.query(sqlUsers, (err, result) => {
        console.log(err);
    });

    db.query(sqlInsert, [fname, lname, email, password, tableName], (err, result) => {
        console.log(err);
    });
    db.query(sql, (err, result) => {
        console.log(err);
    });

});

app.post("/api/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const sqlInsert = "SELECT * from users WHERE email = ? AND password = ?";
    db.query(sqlInsert, [username, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "Incorrect username or password!!!!!!" });
        }
    });


    app.post("/api/addMeeting", (req, res) => {

        const date = req.body.date;
        const title = req.body.title;
        const description = req.body.description;
        const starttime = req.body.startTime;
        const endtime = req.body.endTime;
        const table = req.body.table;
        const sqlInsert = `INSERT INTO ${table} (date,title,description,starttime,endtime) VALUES (?,?,?,?,?)`;

        db.query(sqlInsert, [date, title, description, starttime, endtime], (err, result) => {
            console.log(err);
        });

    });

});


app.post("/api/today", (req, res) => {

    const current = req.body.current;
    const table = req.body.table;
    const sqlInsert = `SELECT * FROM ${table} WHERE date = (?) `;

    db.query(sqlInsert, [current], (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result) {
            res.send(result);
        } else {
            res.send({ message: "Something went wrong!"});
        }
    });

});

app.post("/api/details" , (req,res)=>{
    
    const table = req.body.table;
    const sqlInsert = `SELECT * FROM ${table}`;
    db.query(sqlInsert,(err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result){
            res.send(result);
        }
        else{
            res.send({message:"Something went wrong!"})
        }
    })

})

app.post("/api/delete",(req,res)=>{
    
    const table = req.body.table;
    const id = req.body.id
    const sqlInsert = `DELETE FROM ${table} WHERE id = ?`;
    db.query(sqlInsert,id,(err,result)=>{
        if(err){
            console.log(err)
        }
    })
})


app.listen(3001, () => {
    console.log("Server is running on port 3001")
})