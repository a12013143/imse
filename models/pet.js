// This should be changed and adapted with database implementation 
var connection = require('../config/connection.js');

const db = connection.db;

const pet = {
  selectjustone: function(param, callback) {
    let queryString = 'SELECT * FROM pet WHERE ID = ' + param +';';
    console.log(queryString);
    db.all(queryString, [], (err, rows) => {
      if(err) {
        throw err;
      }
      console.log(queryString);
      console.log("DB select one query (pet).");
      callback(rows);
    });
  },


//this is a really bad sql query but it's 6 am and I want to sleep
  selectone: function(param, callback) {
    //let queryString = 'SELECT * FROM pet WHERE ID = ' + param +';';
    let queryString = 'SELECT * FROM(SELECT * FROM(SELECT * FROM(SELECT COUNT(*) AS favourites from(SELECT * from favourite WHERE petID =' + param +' ))INNER JOIN(SELECT * from pet WHERE ID = '+ param +' ))INNER JOIN(SELECT COUNT(*) as applications FROM(SELECT * from adoption WHERE petID = ' + param + ')))INNER JOIN(SELECT address from user WHERE ID = (SELECT ownerID FROM pet WHERE ID = ' +param +'));';

    console.log(queryString);
    db.all(queryString, [], (err, rows) => {
      if(err) {
        throw err;
      }
      console.log(queryString);
      console.log("DB select one query (pet).");
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