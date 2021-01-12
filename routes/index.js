var express = require('express');
const sqlitebasics = require('../config/sqlitebasics');
var _pet = require('../models/pet.js');
var _adoption = require('../models/adoption.js');
var router = express.Router();
//var pets = require('../models/pet.js');


// hardcoded user data
var user = {
  id: 1,
  name: "Grese Hyseni",
  email:"hysenigrese@gmail.com",
  password: "hashvalue",
  phone:"06763949302",
  address:"Vienna, Austria",
  profile_img_url: "/images/repo/user.png"
};

//hardcoded data
user.adoptions =[{
  id: 1,
  pet_id: 3,
  pet: {
    id: 3,
    pet_name: "Roko",
    profile_img_url: "/images/repo/roko.jpg"},
  user_id: 2,
  user : {
    id: 2,
    name: "Hannah Poor",
    profile_img_url:"/images/repo/user.png",
    email:"test@gmail.com"},
  status: "Initiated",
  message: "I would like to adopt this lovely pet."
},{
  id: 2,
  pet_id: 2,
  pet: {
    id: 3,
    pet_name: "Ron",  
    profile_img_url: "/images/repo/ronald.jpg"},
  user_id: 3,
  user : {
    id: 3,
    name: "User User",
    profile_img_url:"/images/repo/user.png",
    email:"test@gmail.com"},
  status: "In progress",
  message: "Hi, I am interested to adopt this pet."
}];


// -- END TEST MYSQL, delete after --------------------------------

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log('req.query pets get');
  console.log(req.query);


  var userID = req.query.userId;
  if(!userID){
    userID=1;
  }
  user = {ID:userID}
  sqlitebasics.selectone("user",userID, function(data) {
    user = data[0];
    //console.log(pets);
    renderHtmlAfterStatsLoad();
  });

  //Get pet statistics
  // var stats = {};
  // _pet.stats("pet", function(data) {
  //   stats = data;
  //   console.log('Home page stats');
  //   console.log(data);
  //   renderHtmlAfterStatsLoad(res,stats);
  // }, condition);

  // Get pets by query data
  function renderHtmlAfterStatsLoad(r){
    sqlitebasics.selectall("pet", function(data) {
      pets = data;
      pets=pets.slice(0,3);
      console.log('Pets page');
      //console.log(pets);
      var header_image = "/images/repo/petcare-large.jpg";
      res.render('index', { title: 'FosterPet - Home ' ,pets,stats,header_image,user});
    });
}

});



/* GET login page. */
router.get('/login', function(req, res, next) {
  console.log('Login page');
  res.render('login', {title:'Login'});
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  console.log('Register page');
  res.render('register', {title:'Register'});
});

/* GET profile page. */
router.get('/profile/:userId', function(req, res, next) {
  console.log('Profile page');

  var userID = req.params.userId;
  if(!userID){
    userID=1;
  }
  user = {ID:userID}
  sqlitebasics.selectone("user",userID, function(data) {
    user = data[0];
    console.log(user);
    condition={userID};
    _adoption.selectall("adoption",condition, function(data) {
      adoptions = data;
      show_adoptions = adoptions.slice(0,3);
      console.log(show_adoptions);
      renderHtmlAfterUserLoad();
    });
  });


  function renderHtmlAfterUserLoad(){
    res.render('profile', {title:user.name,user,adoptions,show_adoptions});
  }
  
}); 



/* Insert initial data*/
router.post('/initialInsert', function(req, res, next) {
  console.log('Insert initial data');
  sqlitebasics.initialInsert("", function(data) {
    res.status(200).json(data);
  });
}); 




module.exports = router;
