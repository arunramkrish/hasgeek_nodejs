var mysql     =    require('mysql');
var dbconfig = require("../db/config");

module.exports = mysql.createPool(dbconfig);
