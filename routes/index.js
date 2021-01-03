var express = require('express');
var router = express.Router();
//var pet = require('../models/pet.js');



// -- TEST MYSQL --------------------------------
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: 'password',
//   database: 'database name'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });


// -- END TEST MYSQL, delete after --------------------------------

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FosterPet' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  console.log('Login page');
  res.render('login', {});
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  console.log('Register page');
  res.render('register', {});
});


/* GET pets page */
router.get('/pets', function(req, res) {
  pet.selectAll(function(data) {
    // var hbsObj = { pets: data };
    console.log('Pets page');
    // res.render('pets', { title: 'FosterPet - Pets' ,hbsObj});
    res.render('pets', { title: 'FosterPet - Pets' });
  });
});



// /* GET articles page */
// router.get('/articles', function(req, res, next) {
//   console.log('Articles page');
//   res.render('articles', { title: 'FosterPet - Pets' });
// });

module.exports = router;
