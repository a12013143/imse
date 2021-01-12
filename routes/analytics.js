var express = require('express');
var router = express.Router();
var sqlitebasics = require('../config/sqlitebasics.js');
var _adoption = require('../models/adoption.js');
var _analytics = require('../models/analytics.js');


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
      if(user && data){
        user.adoptions = data;
        user.show_adoptions = user.adoptions.slice(0,3);
        console.log('show_adoptions');
        console.log(user.show_adoptions);
      }          
      renderHtmlAfterLoad();
    });
  });

  function renderHtmlAfterLoad(){
    console.log('renderHtmlAfterLoad');
    // sqlitebasics.selectall("analytics" , function(data) {
    //   analytics = data;
    //   console.log('Analytics page analytics');
    //   console.log(data);
    //   var header_image = "/images/repo/petcare-large.jpg";
    //   res.render('analytics', { title: 'Analytics' ,analytics,header_image,user});
    // }, condition);

    _analytics.selectGrouped("analytics" ,condition, function(data) {
      analytics = data;
      console.log('Analytics page analytics');
      console.log(data);
      var header_image = "/images/repo/petcare-large.jpg";
      res.render('analytics', { title: 'Analytics' ,analytics,header_image,user});
    });

  }
  
  
});

/** GET One*/
// Redirect to all
router.get('/:analyticId', function(req, res) {
  res.redirect('/analytics');
});

/** POST */
router.post('/', function(req, res) {

  console.log('req.body analytics post');
  console.log(req.body);

  let maxrowID = 0;
  sqlitebasics.getmaxid('analytics',function(data) {
    maxrowID = data[0].ID + 1;

    var vals = req.body;
    var keys = Object.keys(req.body);
    var i =0;
    keys.forEach(function(key){;
      var str = ['url'];
        if(!vals[key] && !str.includes(key) ){
          vals[key] = 'null';
        }
    }) 

    //ID, url TEXT, userID INT, pageID INT, time INT, created_on 
    let querytemp = '(' + maxrowID + ', "' + vals.url +'", ' + vals.userID + ', ' + vals.pageID + ', '+ vals.time +  ', "' + vals.created_at + '"';
    console.log('querytemp')
    console.log(querytemp)
    sqlitebasics.insertone("analytics" , querytemp, function(data) {
      categories = data;
      console.log('sqlitebasics.insertone');
      console.log(data);
  
      if (data){
        res.status(200).json(data);
      } else {      
        res.status(500).json({
          'message': 'Internal Error.'
        });
      }
    });
  });
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