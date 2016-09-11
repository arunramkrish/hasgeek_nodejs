var datasource = require("./datasource.js");

module.exports.getTodos = function(resCallback) {
    datasource.getConnection(function(err,connection){
        if (err) {
            if (connection) {
                connection.release();
            }
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from todos",function(err,rows){
            connection.release();
            if(!err) {
                resCallback(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
    });
};

module.exports.addTodo = function(todo) {

};