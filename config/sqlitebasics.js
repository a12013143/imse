// This should be changed and adapted with database implementation (or removed)
// HERE ARE THE BASIC CRUD OPERATIONS QUERIES THAT ARE SAME FOR ALL TABLES
var connection = require('./connection.js');

const db = connection.db;

//creating generic basic sql queries

const sqlitebasics = {
  selectall: function(table, callback) {
    let queryString = 'SELECT * FROM ' + table + ';';
    console.log(queryString);
    db.all(queryString, [], (err, rows) => {
      if(err) {
        throw err;
      }
      console.log("DB select all query.");
      callback(rows);
    });
  },

  insertone: function(table, values, callback) {
    let queryString = 'INSERT INTO ' + table + ' VALUES ' + values +');';
    console.log(queryString);
    db.run(queryString, err => {
      if (err) {
        return console.error(err.message);
      }
      console.log("DB insertion.");
      callback(err);
    });
  },

  updateone: function(table, columns, values, condition, callback) {
    let queryString = 'UPDATE ' + table + ' SET ';
    let i;
    for (i=0; i < columns.length; i++) {
      queryString = queryString + columns[i] + ' = "' + values[i] + '"';
      if (i < columns.length-1) {
        queryString = queryString + ', ';
      }
    }
    queryString = queryString + ' WHERE ' + condition + ';'
    console.log(queryString);
    db.run(queryString, err => {
      if (err) {
        return console.error(err.message);
      }
      console.log("DB update.");
    });
  },

  delete: function(table, condition, callback) {
    let queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + ';';
    console.log(queryString);
    db.run(queryString, err => {
      if (err) {
        return console.error(err.message);
      }
      console.log("DB delete.");
      //callback(err);
   });

  }
};


var orm = {
  selectAll: function(table, callback) {
    var queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, function(err, result) {
      if (err) {throw err;}
      callback(result);
    });
  },

  insertOne: function(table, cols, vals, callback) {
    var queryString = 'INSERT INTO ' + table;

    queryString = queryString + ' (';
    queryString = queryString + cols.toString();
    queryString = queryString + ') ';
    queryString = queryString + 'VALUES (';
    queryString = queryString + printQuestionMarks(vals.length);
    queryString = queryString + ') ';

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: function(table, objColVals, condition, callback) {
    var queryString = 'UPDATE ' + table;

    queryString = queryString + ' SET ';
    queryString = queryString + objToSql(objColVals);
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  delete: function(table, condition, callback) {
    var queryString = 'DELETE FROM ' + table;
    queryString = queryString + ' WHERE ';
    queryString = queryString + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = sqlitebasics;