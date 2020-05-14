var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var http = require("http").createServer(app).listen(process.env.PORT || 3000); // http://192.168.0.88:3000
var io = require("socket.io")(http);
var fs = require("fs");

io.sockets.on("connection", function(){
    console.log("connected");
});

app.get("/", function(req, res){
    res.render("home");
});