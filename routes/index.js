var express = require('express');

var router = express.Router();
//var pets = require('../models/pet.js');

// js objects, to be replaced with dynamic content



pets =[{
  id: 1,
  pet_name: "Harry",
  category_id: 2,
  age_years:1,
  age_months:0,
  neutered:true,
  address:"Vienna, Austria",
  short_content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content. \n Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." ,
  profile_img_url: "/images/repo/harry.jpg",
  likes:22,
  applications:1
},{
  id: 2,
  pet_name: "Ron",
  category_id: 2,
  age_years:1,
  age_months:0,
  neutered:true,
  address:"Vienna, Austria",
  owner:"Grese Hyseni",
  owner_id:2,
  short_content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content. \n Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." ,
  profile_img_url: "/images/repo/ronald.jpg",
  likes:22,
  applications:1
},{
  id: 3,
  pet_name: "Hermione",
  category_id: 2,
  age_years:1,
  age_months:0,
  neutered:true,
  address:"Vienna, Austria",
  short_content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content. \n Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." ,
  profile_img_url: "/images/repo/hermione.jpg",
  likes:22,
  applications:1
},{
  id: 4,
  pet_name: "Dobby",
  category_id: 2,
  age_years:1,
  age_months:0,
  neutered:true,
  address:"Vienna, Austria",
  short_content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content. \n Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." ,
  profile_img_url: "/images/repo/dobby2.jpg",
  likes:22,
  applications:1
},{
  id: 5,
  pet_name: "Roko",
  category_id: 2,
  age_years:1,
  age_months:0,
  neutered:true,
  address:"Vienna, Austria",
  short_content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content. \n Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." ,
  profile_img_url: "/images/repo/roko.jpg",
  likes:22,
  applications:1
}];



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
  var pets3 = pets.slice(0,3);
  res.render('index', { title: 'FosterPet' , pets3});
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
  // pet.selectAll(function(data) {
  //   var hbsObj = { pets: data };
  //   console.log('Pets page');
  //   res.render('pets', { title: 'FosterPet - Pets' ,hbsObj});
  // });
  
  res.render('pets', { title: 'FosterPet - Pets' ,pets});
});

/* GET pets page */
router.get('/pets/:petId', function(req, res) {
  // pet.selectAll(function(data) {
  //   var hbsObj = { pets: data };
  //   console.log('Pets page');
  //   res.render('pets', { title: 'FosterPet - Pets' ,hbsObj});
  // });
  var petId = req.params.petId;
  pet = pets[petId-1];
  console.log(pet);
  res.render('pet', { title: 'FosterPet - Pets' ,pet});
});



// /* GET articles page */
// router.get('/articles', function(req, res, next) {
//   console.log('Articles page');
//   res.render('articles', { title: 'FosterPet - Pets' });
// });

module.exports = router;
