var express = require('express');
var router = express.Router();
const sqlitebasics = require('../config/sqlitebasics');

//TABLE STRUCTURE: ID (int), NAME (text), EMAIL (text), PHONE (text), ADDRESS (text), ROLE (text)

function processData(data) {
  console.log('this is the data:', {});
}

// sqlitebasics.selectall("user", processData);

// let tempinsert = '1, "nothing", "justanemail", "067239232", "nowhere street 23", "megaultimatethanos"';
// sqlitebasics.insertone("user", tempinsert);

// let tempcolumn = [ "ID", "email"];
// let tempvalue = [ "1", "2"];
// let tempcondition = '"name" = "User 3"';
// sqlitebasics.updateone("user", tempcolumn, tempvalue, tempcondition);


// let tempcondition2 = 'ID = 30';
// sqlitebasics.delete("user", tempcondition2);


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
