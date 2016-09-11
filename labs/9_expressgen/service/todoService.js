var todos = [{name:"t1"},{name:"t2"},{name:"t3"}];

module.exports.getTodos = function() {
    return todos;
};
module.exports.addTodo = function(todo) {
    todos.push(todo);
}