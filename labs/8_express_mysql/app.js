var express   =    require("express");
var app       =    express();

function handle_database(req,res) {
}

app.get("/",function(req,res){-
        handle_database(req,res);
});

app.listen(3000);