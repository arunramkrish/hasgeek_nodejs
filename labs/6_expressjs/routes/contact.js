var express = require("express");
var app = express.Router();

app.get("/", function(req, res) {
    console.log(req.params["name"]);
    res.send("Response from express js contact page");    
});
app.post("/", function(req, res) {
    res.send("contact posted");    
});


module.exports = app;