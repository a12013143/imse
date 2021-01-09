// Connect to SQLite


const sqlite3 = require("sqlite3").verbose();

// const db = new sq...

// db.serialiye db.something
/**  const connection = {
  db: db,
  sqlcreat1:...,
}*/
const db = new sqlite3.Database('./data/db.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to database..");

});

//queries to create the tables if they do not exist yet: PET, ARTICLE, PET_CATEGORY, USER, FAVOURITE, ARTICLE_CATEGORY, ADOPTION, PET_GALERY, ANALYTICS

sql_create1 = 'CREATE TABLE IF NOT EXISTS pet ( ID INT, name TEXT, categoryID INT, gender TEXT, neutered INT, description TEXT, status TEXT );';
sql_create2 = 'CREATE TABLE IF NOT EXISTS article ( ID INT, name TEXT, author TEXT, categoryID INT, description TEXT );';
sql_create3 = 'CREATE TABLE IF NOT EXISTS pet_category ( ID INT, name TEXT, description TEXT );';
sql_create4 = 'CREATE TABLE IF NOT EXISTS user ( ID INT, name TEXT, email TEXT, phone TEXT, address TEXT, role TEXT );';
sql_create5 = 'CREATE TABLE IF NOT EXISTS favourite ( userID INT, petID INT );';
sql_create6 = 'CREATE TABLE IF NOT EXISTS article_cat ( ID INT, name TEXT, description TEXT );';
sql_create7 = 'CREATE TABLE IF NOT EXISTS adoption ( ID INT, userID INT, petID INT, description TEXT, status TEXT );';
//const sql_create8 = 'CREATE TABLE IF NOT EXISTS pet_galery ( ID INT, title TEXT, url TEXT );';
sql_create9 = 'CREATE TABLE IF NOT EXISTS analytics ( ID INT, url TEXT, userID INT, time INT, created_on TEXT );';

//run them to create the tables on first use.
db.serialize(function() {
db.run(sql_create1, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Pet table: check.");
});

db.run(sql_create2, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Article table: check.");
});

db.run(sql_create3, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Pet_category table: check.");
});

db.run(sql_create4, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("User table: check.");
});

db.run(sql_create5, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Favourite table: check.");
});

db.run(sql_create6, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Article_category table: check.");
});

db.run(sql_create7, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Adoption table: check.");
});

/*db.run(sql_create8, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Pet_galery table: check.");
});*/

db.run(sql_create9, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Analytics table: check.");
});

})

const connection = {
  db: db
}
module.exports = connection;

