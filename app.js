var express         = require("express");
var mongoose        = require("mongoose");

var app = express();


app.set("port", process.env.PORT || 5000);

app.get('/', function (req, res){
    res.json({hi: "world"});
});

app.listen(app.get("port"), function () {
    console.log("server started on port " + app.get("port"));
});