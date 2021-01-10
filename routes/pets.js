var express = require('express');
const sqlitebasics = require('../config/sqlitebasics');
var router = express.Router();
var _pet = require('../models/pet.js');


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
pets =[{
  id: 1,
  user_id :1, pet_name: "Harry",
  category_id: 2,
  age_years:1,
  age_months:0,
  neutered:true,
  address:"Vienna, Austria",
  short_content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content. \n Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content." ,
  profile_img_url: "/images/repo/harry.jpg",
  favourites:22,  // This is extraacted joined with favourites table!!
  applications:1
},{
  id: 2,
  user_id :1, pet_name: "Ron",
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
  user_id :1, pet_name: "Hermione",
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
  user_id :1, pet_name: "Dobby",
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
  user_id :1, pet_name: "Roko",
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
    profile_img_url:"/images/repo/user.png"},
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
    profile_img_url:"/images/repo/user.png"},
  status: "In progress",
  message: "Hi, I am interested to adopt this pet."
}];



/*# GET */
router.get('/', function(req, res) {

  console.log('req.query pets get');
  console.log(req.query);

  // Get pets by query data

  sqlitebasics.selectall("pet", function(data) {
    pets = data;
    console.log('Pets page');
    var header_image = "/images/repo/ronald.jpg";
    res.render('pets', { title: 'Pets' ,pets,header_image,user});
  });

  //var header_image = "/images/repo/ronald.jpg";
  //res.render('pets', { title: 'Pets' ,pets, header_image,user});
});

router.get('/:petId', function(req, res) {

  console.log('req.session pets get by petid');
  console.log(req.session);
  
  var petId = req.params.petId;
  let temp = petId;
  if(petId == "new"){
    pet = {id : 0,pet_name :"New pet",profile_img_url:"/images/pawprint-blue.png"};
    var header_image = pet.profile_img_url;
    res.render('pet', { title: 'Pets'+pet.name,pet,header_image,user});
  }else{
    //pet = pets[petId-1];
    _pet.selectone(petId, function(data) {
      pet = data[0];
       console.log('pet---');
       console.log(pet);
       var header_image = pet.profile_img_url;
       res.render('pet', { title: 'Pets'+pet.name,pet,header_image,user});
     });
  }
 
});

/** POST */
router.post('/', function(req, res) {

  console.log('req.body pets post');
  console.log(req.body);

  // pet.insertOne(
  //   ['pet_name', 'category_id'],
  //   [req.body.pet_name, false],
  //   function() {
  //     console.log('in callback');
  //     res.redirect('/pets');
  //   }
  // );
  console.log('after insert');
  insertedPetId = 100; //Change this by reading from database
  // res.redirect('/pets/'+insertedPetId); // send a message for success/error

  
  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(insertedPetId);
  }
});

/** PUT */
router.put('/:id', function(req, res) {

  console.log('req.body pets put');
  console.log(req.body);
  console.log('req.params.id');
  console.log(req.params.id)

  var petId = req.params.id;
  var condition = 'id = ' + petId;

  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(petId);
  }

});

/** DELETE */
router.delete('/delete/:id', function(req, res) {
  var petId = req.params.id;
  var condition = 'id = ' + petId;
  
  pet.delete(condition, function() {
    res.redirect('/pets'); // send a message for success/error
  });

});



module.exports = router;