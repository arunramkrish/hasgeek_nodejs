//var todos = [{name:"t1"},{name:"t2"},{name:"t3"}];
var todoDao = require("../dao/todoDao");
var TodoModel = require("../dao/todoMongoDao");

module.exports.getTodos = function(callback) {
/*    todoDao.getTodos(function(todos) {
        callback(todos);
    });*/

    // do the following to filter list of todos based on category   
    //TodoModel.find({category:"hands-on"},
    TodoModel.find(function(err, documents) {
            callback(documents);
        } );
};
module.exports.addTodo = function(todo) {
    var todoDao = new TodoModel(todo);
    todoDao.save(function(err) {
        if (!err) {
            console.log("Todo saved successfully ");
        }
    });
}