var fs = require("fs");
var counter = 0;
var todosJsonFile = fs.open("todos.json","a","",function(err, fd) {
});

module.exports.addTodo = function(todo) {
    console.log(util.inspect(todo));
    counter++;
    return counter;
} 