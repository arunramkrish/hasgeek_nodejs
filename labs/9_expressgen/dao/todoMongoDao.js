var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/todo_db');

//create a schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var Todo = new Schema({
    id    : ObjectId,
    name     : String,
    description      : String,
    category : String,
    dueDate      : Date
});

//create mongo model
var TodoModel = mongoose.model('Todo', Todo);

module.exports = TodoModel;
