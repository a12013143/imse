var express = require('express');
var router = express.Router();
//var adoption = require('../models/adoption.js');

const connection = require('../config/connection');
const sqlitebasics = require('../config/sqlitebasics');

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
adoptions =[{
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
    profile_img_url:"/images/repo/user.jpg"},
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
    profile_img_url:"/images/repo/user.jpg"},
  status: "In progress",
  message: "Hi, I am interested to adopt this pet."
}];

user.adoptions=adoptions;


/*# GET */
router.get('/', function(req, res) {
  // adoption.selectAll(function(data) {
  //   var hbsObj = { adoptions: data };
  //   console.log('Adoptions page');
  //   res.render('adoptions', { title: 'Adoptions' ,hbsObj});
  // });
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(adoptions);
  }
  
});

router.get('/:adoptionId', function(req, res) {
  // adoption.selectOne(function(data) {
  //   var hbsObj = { adoptions: data };
  //   console.log('Adoptions page');
  //   res.render('adoptions', { title: 'Adoptions' ,hbsObj});
  // });

  var adoption = {id:adoptionId};
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(adoption);
  }
});


/** POST */
router.post('/', function(req, res) {

  console.log('req.body adoptions post');
  console.log(req.body);

  // adoption.insertOne(
  //   ['adoption_name', 'category_id'],
  //   [req.body.adoption_name, false],
  //   function() {
  //     console.log('in callback');
  //     res.redirect('/adoptions');
  //   }
  // );

  console.log('after insert');
  insertedAdoptionId = 100; //Change this by reading from database
  // res.redirect('/adoptions/'+insertedAdoptionId); // send a message for success/error
  
  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(insertedAdoptionId);
  }
});

/** PUT */
router.put('/:id', function(req, res) {

  console.log('req.body adoptions put');
  console.log(req.body);
  console.log('req.params.id');
  console.log(req.params.id)


  var adoptionId = req.params.id;
  var condition = 'id = ' + adoptionId;

  // adoption.updateOne(req.body, condition, function() {
  //   res.redirect('/adoptions/'+adoptionId); // send a message for success/error
  // });

  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(adoptionId);
  }

});

/** DELETE */
router.delete('/delete/:id', function(req, res) {
  var adoptionId = req.params.id;
  var condition = 'id = ' + adoptionId;
  
  adoption.delete(condition, function() {
    res.redirect('/adoptions'); // send a message for success/error
  });

});



module.exports = router;