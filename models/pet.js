// This should be changed and adapted with database implementation 
var orm = require('../config/orm.js');

var table = 'pets';
var pets = {
  selectAll: function(cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne(table, cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete(table, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = pet;