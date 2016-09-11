var http = require("http");
var util = require("util");

var options = {
    port : 3000,
    host : "localhost",
    protocol : "http:",
    method : "POST",
    path : "/todos",
	headers : { 
	'content-type': 'application/json'}
  /*'connection': 'keep-alive',*/
  //'accept': '*/*' }
};

var client = http.request(options, function(res) {
    console.log(`Received response ${res.statusCode}`);
    //console.log(util.inspect(res));
    res.on("data", function(data) {
        console.log(data.toString());
    })
});
client.write(JSON.stringify({name: "todo3", desc : "third todo"}));
client.end();