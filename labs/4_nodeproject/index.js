var fs = require("fs");

fs.readFile('package.json', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log("I am at the end");

var timerClass = require("./timer");
var timer = new timerClass(10);
var timer2 = new timerClass(5);

timer.once("complete", function() {
    console.log("Timer complete event is fired");
});

timer2.once("complete", function() {
    console.log("Timer complete event is fired");
});

//timer.emit("complete");
//timer.emit("complete");
timer.start();
timer2.start();