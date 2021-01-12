var express = require('express');
var router = express.Router();
var sqlitebasics = require('../config/sqlitebasics.js');
var _adoption = require('../models/adoption.js');

// //hardcoded data
// analytics =[{
//   id: 1,
//   url:'/articles/1',
//   user_id:2,
//   time:30,
//   created_on: "5 Jan 2021"
// },{
//     id: 1,
//     url:'/analytics/1',
//     time:60,
//     user_id:2,
//     created_on: "5 Jan 2021"
// }];

// //hardcoded data
// analyticsAggregated =[{
//   id: 1,
//   url:'/articles/1',// groupby page
//   page_id:1, // this is extracted from url
//   article:{title:"Article Title"},
//   type: 'article', // this is extracted from url
//   visits:3 ,  // count ids 
//   visitors:2, // count user_ids for page
//   time:30, //sum for page
//   created_on: "5 Jan 2021"
// },{
//   id: 1,
//   url:'/articles/1',
//   page_id:1, // this is extracted from url
//   article:{title:"Article Title"},
//   type: 'article', // this is extracted from url
//   visits:3 ,  // count ids 
//   visitors:2, // count user_ids for page
//   time:30,
//   created_on: "5 Jan 2021"
// }];



/*# GET */
router.get('/', function(req, res) {

  console.log('req.query analytics get');
  console.log(req.query);

  // Get analytics by query data
  var userID = req.query.userId;
  if(!userID){
    userID=1;
  }
  var user = {ID:userID}
  sqlitebasics.selectone("user",userID, function(data) {
    user = data[0];
    console.log('user');
    console.log(user);
    condition={userID};    
    _adoption.selectall("adoption",condition, function(data) {
      user.adoptions = data;
      user.show_adoptions = user.adoptions.slice(0,3);
      console.log('show_adoptions');
      console.log(user.show_adoptions);      
      
      renderHtmlAfterLoad();
    });
  });

  function renderHtmlAfterLoad(){
    console.log('renderHtmlAfterLoad');
    sqlitebasics.selectall("analytics" , function(data) {
      analytics = data;
      console.log('Analytics page articles');
      console.log(data);
      var header_image = "/images/repo/petcare-large.jpg";
      res.render('analytics', { title: 'Analytics' ,analytics,header_image,user});
    }, condition);
  }
  
  
});

/*# GET One*/
// Redirect to all
router.get('/:analyticId', function(req, res) {
  res.redirect('/analytics');
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