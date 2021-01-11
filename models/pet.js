// This should be changed and adapted with database implementation 
var connection = require('../config/connection.js');

const db = connection.db;

const pet = {

  selectall: function(table, callback, condition) {
    // console.log('condition');
    // console.log(condition);

    let queryString = 'SELECT * FROM ' + table + ' WHERE 0=0';    
    var whereClause = '';
    
    if(condition){
      if(condition.keyword){
        console.log('keyword')
        var keyword = '%'+condition.keyword+'%';
        whereClause+= ' AND (name LIKE "'+keyword+'" OR short_desc LIKE "' + keyword +'" OR description LIKE "' + keyword+'")';
      }
      if(condition.category){
        whereClause+= ' AND categoryID = '+condition.category;
      }
    }

    queryString+=whereClause+';'
    console.log(queryString);
    db.all(queryString, [], (err, rows) => {
      if(err) {
        console.log(err);
        return err;
      }
      console.log("DB select all query.");
      callback(rows);
    });
  },

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
    let queryString = 'SELECT * FROM(SELECT * FROM(SELECT * FROM(SELECT COUNT(*) AS favourites from(SELECT * from favourite WHERE petID =' + param +' ))INNER JOIN(SELECT * from pet WHERE ID = '+ param +' ))INNER JOIN(SELECT COUNT(*) as applications FROM(SELECT * from adoption WHERE petID = ' + param + ')))INNER JOIN(SELECT address from user WHERE ID = (SELECT userID FROM pet WHERE ID = ' +param +'));';

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