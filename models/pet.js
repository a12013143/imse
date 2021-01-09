// This should be changed and adapted with database implementation 
var connection = require('../config/connection.js');

const db = connection.db;

const pet = {
  selectone: function(param, callback) {
    let queryString = 'SELECT * FROM pet WHERE ID = ' + param +';';
    console.log(queryString);
    db.all(queryString, [], (err, rows) => {
      if(err) {
        throw err;
      }
      console.log(queryString);
      console.log("DB select one query.");
      callback(rows);
    });
  }
}
/*
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
};*/

module.exports = pet;