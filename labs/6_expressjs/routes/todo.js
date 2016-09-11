var express = require("express");
var app = express.Router();

var todoService = require("../service/todoService");

app.get("/", function(req, res) {
    console.log(req.query.name);
    
    //or https://nodejs.org/api/http.html#http_message_url
    var url = require('url');
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    console.log(`Query ${query}`);
    
    res.json(todoService.getTodos());    
});
app.post("/", function(req, res) {
    var todo = req.body;
    console.log("Todo received " + JSON.stringify(todo));
    
    todoService.addTodo(todo);
    res.send("todo posted" + JSON.stringify(todoService.getTodos()));    
});

module.exports = app;