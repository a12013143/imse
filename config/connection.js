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
//enable foreign keys
db.get("PRAGMA foreign_keys = ON");

//queries to create the tables if they do not exist yet: PET, ARTICLE, PET_CATEGORY, USER, FAVOURITE, ARTICLE_CATEGORY, ADOPTION, PET_GALERY, ANALYTICS

sql_create1 = 'CREATE TABLE IF NOT EXISTS pet ( ID INT UNIQUE PRIMARY KEY, ownerID INT, name TEXT, address TEXT, categoryID INT, neutered INT, age_year INT, age_month INT, short_desc TEXT, description TEXT, profile_img_url TEXT, FOREIGN KEY(ownerID) REFERENCES user(ID), FOREIGN KEY(categoryID) REFERENCES pet_category(ID));';
sql_create2 = 'CREATE TABLE IF NOT EXISTS article (ID INT UNIQUE PRIMARY KEY, name TEXT, author TEXT, short_desc TEXT, description TEXT, userID INT, create_date TEXT, edit_date TEXT, article_catID INT, FOREIGN KEY(userID) REFERENCES user(ID), FOREIGN KEY(article_catID) REFERENCES article_cat(ID));';
sql_create3 = 'CREATE TABLE IF NOT EXISTS pet_category ( ID INT UNIQUE PRIMARY KEY, name TEXT, description TEXT );';
sql_create4 = 'CREATE TABLE IF NOT EXISTS user ( ID INT UNIQUE PRIMARY KEY, name TEXT, email TEXT UNIQUE, phone TEXT, address TEXT, role TEXT, profile_img_url TEXT);';
sql_create5 = 'CREATE TABLE IF NOT EXISTS favourite ( ID INT UNIQUE PRIMARY KEY, userID INT, petID INT, FOREIGN KEY(userID) REFERENCES user(ID), FOREIGN KEY(petID) REFERENCES pet(ID));';
sql_create6 = 'CREATE TABLE IF NOT EXISTS article_cat ( ID INT UNIQUE PRIMARY KEY, name TEXT, description TEXT );';
sql_create7 = 'CREATE TABLE IF NOT EXISTS adoption ( ID INT UNIQUE PRIMARY KEY, userID INT, petID INT, description TEXT, status TEXT, FOREIGN KEY(userID) REFERENCES user(ID), FOREIGN KEY(petID) REFERENCES pet(ID) );';
//const sql_create8 = 'CREATE TABLE IF NOT EXISTS pet_galery ( ID INT, title TEXT, url TEXT );';
sql_create9 = 'CREATE TABLE IF NOT EXISTS analytics ( ID INT UNIQUE PRIMARY KEY, url TEXT, userID INT, time INT, created_on TEXT );';

//run them to create the tables on first use.
db.serialize(function() {

  db.run(sql_create4, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("User table: check.");
  });

  db.run(sql_create3, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Pet_category table: check.");
  });

db.run(sql_create1, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Pet table: check.");
});

db.run(sql_create6, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Article_category table: check.");
});

db.run(sql_create2, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Article table: check.");
});

db.run(sql_create5, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Favourite table: check.");
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

