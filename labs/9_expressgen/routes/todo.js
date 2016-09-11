var express = require("express");
var app = express.Router();

var todoService = require("../service/todoService");

app.get("/", function(req, res) {
    //console.log(req.query.name);
    
    //or https://nodejs.org/api/http.html#http_message_url
    //var url = require('url');
    //var url_parts = url.parse(req.url, true);
    //var query = url_parts.query;
    //console.log(`Query ${query}`);
    
    todoService.getTodos(function (todos) {
        res.json(todos);
    });    
});
app.post("/", function(req, res) {
    var todo = req.body;
    console.log("Todo received " + JSON.stringify(todo));
    
    todoService.addTodo(todo);
    todoService.getTodos(function (todos) {
        res.json(todos);
    });    
});

module.exports = app;