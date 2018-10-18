var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = bodyParser.urlencoded({ extended: false });
const cors = require('cors');
const port = 3388;
const mysql = require('mysql');

app.use(url);
app.use(bodyParser.json()); //untuk translate json ke body
app.use(cors());
app.set('view engine');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'morofuji',
    password: 'japan',
    database: 'prospace',
    port: 3306 //port mysql
})

//render companies
app.get('/company', (req, res) => {
    var sql = `select id, name, address,
                revenue, countryCode, telephone
                from company`;
    conn.query(sql, (err, result) => {
        if (err) {throw err};
        res.send(result);
    })
})

//RENDER OFFICE companies
app.get('/office', (req, res) => {
    var sql = `select id, officeName, latitude,
                longitude, startDate, company
                from office`;
    conn.query(sql, (err, result) => {
        if (err) { throw err };
        res.send(result);
    })
})


//REGISTER COMPANY
app.post('/registerCompany', (req, res) => {
    const { name, address, revenue, countryCode, telephone } = req.body;
    var data = {
        //database table:frontend
        name: name,
        address: address,
        revenue: revenue,
        countryCode: countryCode,
        telephone: telephone
    };
    console.log(data);
    var sql = 'insert into company set ?';
    conn.query(sql, data, (err, results) => {
        if (err) { throw err };

        var sql1 = 'select * from company;'
        conn.query(sql1, data, (err, results1) => {
            if (err) { throw err };

            res.send(results1);
        })
       
    })
})

//DELETE COMPANY & OFFICES
app.delete('/deleteCompany/:id', (req, res) => {
    var sql = `DELETE FROM company Where id = ${req.params.id}`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        var sql1 = `delete from office where company = ${req.params.id}`;
        conn.query(sql1, (err1, results1) => {
            if (err1) throw err1;
            var sql2 = `select * from company`;
            conn.query(sql2, (err2, results2) => {
                if (err2) throw err2;
                res.send(results2);
                console.log(results2);
            })
        })
    })
});

//Register Office
app.post('/registerOffice', (req, res) => {
    const { name, startDate, longitude, latitude, company  } = req.body;
    var data = {
        //database table:frontend
        officeName: name,
        startDate: startDate,
        longitude: longitude,
        latitude: latitude, 
        company: company
    };
    console.log(data)
    var sql = 'insert into office set ?';
    conn.query(sql, data, (err, result) => {
        if (err) { throw err };
        res.send(result);
    })
})

//DELETE OFFICE
app.delete('/deleteOffice/:id', (req, res) => {
    console.log(req.params.id)
    var sql = `DELETE FROM office WHERE id = ${req.params.id};`;
    conn.query(sql, (err, results) => {
        if (err) throw err;

        var sql2 = `select c.*, o.* from company c join office o where c.id = o.company;`;
        conn.query(sql2, (err, results) => {
            if(err) {throw err};

            res.send(results);
        })
    })
    
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`) 
); 