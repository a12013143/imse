var express = require('express');
var router = express.Router();
//var analytic = require('../models/analytic.js');


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
analytics =[{
  id: 1,
  url:'/articles/1',
  type: 'article',
  page_id:2,
  pet_id:null,
  user_id:2,
  time:30,
  created_on: "5 Jan 2021"
},{
    id: 1,
    type: 'pet',
    url:'/pets/1',
    page_id:2,
    user_id:2,
    time:60,
    created_on: "5 Jan 2021"
}];



//hardcoded adoption data
//hardcoded data
user.adoptions =[{
  id: 1,
  pet_id: 3,
  pet: {
    id: 3,
    pet_name: "Roko",
    profile_img_url: "/images/repo/roko.png"},
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
    profile_img_url:"/images/repo/user.jpg"},
  status: "In progress",
  message: "Hi, I am interested to adopt this pet."
}];


/*# GET */
router.get('/', function(req, res) {

  console.log('req.query analytics get');
  console.log(req.query);

  // Get pets by query data

  // analytic.selectAll(function(data) {
  //   var hbsObj = { analytics: data };
  //   console.log('Analytics page');
  //   res.render('analytics', { title: 'Analytics' ,hbsObj});
  // });
  
  var header_image = "/images/repo/petcare-large.jpg";
  res.render('analytics', { title: 'Analytics' ,analytics,header_image,user});
});

/*# GET One*/
//Not used
router.get('/:analyticId', function(req, res) {
  // analytic.selectAll(function(data) {
  //   var hbsObj = { analytics: data };
  //   console.log('Analytics page');
  //   res.render('analytics', { title: 'Analytics' ,hbsObj});
  // });

  var analyticId = req.params.analyticId;
  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(analyticId);
  }
});

/** POST */
router.post('/', function(req, res) {

  console.log('req.body analytics post');
  console.log(req.body);

  // analytic.insertOne(
  //   ['analytic_name', 'category_id'],
  //   [req.body.analytic_name, false],
  //   function() {
  //     console.log('in callback');
  //     res.redirect('/analytics');
  //   }
  // );
  console.log('after insert');
  insertedAnalyticId = 100; //Change this by reading from database
  //res.redirect('/analytics/'+insertedAnalyticId); // send a message for success/error

  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(insertedAnalyticId);
  }
});

/** PUT */ 
// Not used
router.put('/:id', function(req, res) {

  console.log('req.body analytics put');
  console.log(req.body);
  console.log('req.params.id');
  console.log(req.params.id);

  var analyticId = req.params.id;
  var condition = 'id = ' + analyticId;

  // analytic.updateOne(req.body, condition, function() {
  //   res.redirect('/analytics/'+analyticId); // send a message for success/error
  // });

  err = false;
  if (err){
    res.status(500).json({
      'message': 'Internal Error.'
    });
  } else {
    res.status(200).json(analyticId);
  }

});

/** DELETE */
// Nou used currently
router.delete('/delete/:id', function(req, res) {
  var analyticId = req.params.id;
  var condition = 'id = ' + analyticId;
  
  analytic.delete(condition, function() {
    res.redirect('/analytics'); // send a message for success/error
  });

});

module.exports = router;