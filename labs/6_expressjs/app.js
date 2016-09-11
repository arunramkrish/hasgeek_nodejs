var express = require("express");
var app = express();

var todoRouter = require("./routes/todo");
var contactRouter = require("./routes/contact");

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("Response from express js home page");
});

app.use("/todos", todoRouter);
app.use("/contacts", contactRouter);

app.listen(3000, function() {
    console.log("server listening on 3000");
});