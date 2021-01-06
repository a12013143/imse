var express = require('express');
var router = express.Router();
//var pet = require('../models/pet.js');


/*# GET */
router.get('/', function(req, res) {
  // pet.selectAll(function(data) {
  //   var hbsObj = { pets: data };
  //   console.log('Pets page');
  //   res.render('pets', { title: 'Pets' ,hbsObj});
  // });
  
  res.render('pets', { title: 'Pets' ,pets});
});

router.get('/:petId', function(req, res) {
  // pet.selectAll(function(data) {
  //   var hbsObj = { pets: data };
  //   console.log('Pets page');
  //   res.render('pets', { title: 'Pets' ,hbsObj});
  // });

  var petId = req.params.petId;
  if(petId == "new"){
    pet = {id : 0,pet_name :"New pet",profile_img_url:"/images/pawprint-blue.png"};
  }else{
    pet = pets[petId-1];
    console.log(pet);
  }
  res.render('pet', { title: 'Pets - '+pet.pet_name ,pet});
});

/** POST */
router.post('/', function(req, res) {

  console.log('req.body');
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
  res.redirect('/pets/'+insertedPetId); // send a message for success/error
});

/** PUT */
router.put('/updateOne/:id', function(req, res) {

  console.log('req.body');
  console.log(req.body);

  var petId = req.params.id;
  var condition = 'id = ' + petId;

  pet.updateOne(req.body, condition, function() {
    res.redirect('/pets/'+petId); // send a message for success/error
  });

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