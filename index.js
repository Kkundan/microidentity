//Declarativies
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
// var neo4j = require('neo4j-driver').v1;
var fs = require('fs');
var i18n=require("i18n-express");


//Intialize app via exress
var app = express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


// other middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'path')));
// var driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

app.get('/',function(req,res){
    res.send('Hello World!')
});

app.listen(3000);

console.log("Server Started on Port 3000");


module.exports = app;