var express = require('express');
var router = express.Router();
var pet = require('../models/pet.js');

router.post('/pets/insertOne', function(req, res) {
  pet.insertOne(
    ['pet_name', 'category_id'],
    [req.body.pet_name, false],
    function() {
      console.log('in callback');
      res.redirect('/pets');
    }
  );
  console.log('after insert');
});

router.put('/pets/updateOne/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  pet.updateOne({ category_id: req.body.category_id }, condition, function() {
    res.redirect('/pets');
  });
});

router.delete('/pets/delete/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  pet.delete(condition, function() {
    res.redirect('/pets');
  });
});

module.exports = router;