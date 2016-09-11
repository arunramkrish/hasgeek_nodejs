var http = require("http");
var util = require("util");
var process = require("process");

var httpServer = http.createServer();

httpServer.on("request", function(req, res) {
    console.log(req.url);
    
    req.on("data", function(data) {
        var todo = JSON.parse(data.toString());
        console.log(todo.name);
    });

    //req.pipe(process.stdout);

    res.write(`success ${req.url}`);
    //res.write(util.inspect(req));
    res.end();
});
httpServer.on("listening", function() {
    console.log("Server is listening on port 3000");
});

httpServer.listen(3000);