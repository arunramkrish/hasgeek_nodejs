console.log("loading hellomodule");
var msgConfig = require("./3_config");

exports.message = "hello module";
exports.getMessage = function() { 

    return "Welcome " + msgConfig.user + " " + msgConfig.topic;
};