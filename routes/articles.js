var express = require('express');
var router = express.Router();
//var article = require('../models/article.js');


/*# GET */
router.get('/', function(req, res) {
  // article.selectAll(function(data) {
  //   var hbsObj = { articles: data };
  //   console.log('Articles page');
  //   res.render('articles', { title: 'Articles' ,hbsObj});
  // });
  
  res.render('articles', { title: 'Articles' ,articles});
});

router.get('/:articleId', function(req, res) {
  // article.selectAll(function(data) {
  //   var hbsObj = { articles: data };
  //   console.log('Articles page');
  //   res.render('articles', { title: 'Articles' ,hbsObj});
  // });

  var articleId = req.params.articleId;
  if(articleId == "new"){
    article = {id : 0,article_name :"New article",profile_img_url:"/images/pawprint-blue.png"};
  }else{
    article = articles[articleId-1];
    console.log(article);
  }
  res.render('article', { title: 'Articles - '+article.article_name ,article});
});

/** POST */
router.post('/', function(req, res) {

  console.log('req.body');
  console.log(req.body);

  // article.insertOne(
  //   ['article_name', 'category_id'],
  //   [req.body.article_name, false],
  //   function() {
  //     console.log('in callback');
  //     res.redirect('/articles');
  //   }
  // );
  console.log('after insert');
  insertedArticleId = 100; //Change this by reading from database
  res.redirect('/articles/'+insertedArticleId); // send a message for success/error
});

/** PUT */
router.put('/updateOne/:id', function(req, res) {

  console.log('req.body');
  console.log(req.body);

  var articleId = req.params.id;
  var condition = 'id = ' + articleId;

  article.updateOne(req.body, condition, function() {
    res.redirect('/articles/'+articleId); // send a message for success/error
  });

});

/** DELETE */
router.delete('/delete/:id', function(req, res) {
  var articleId = req.params.id;
  var condition = 'id = ' + articleId;
  
  article.delete(condition, function() {
    res.redirect('/articles'); // send a message for success/error
  });

});

module.exports = router;