const http = require('http');
const app = require('./app');

var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
//var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
var index = require('./api/routes/index');
app.use('/index', index);
app.listen(port, function () {
    console.log("Server is running on port: " + port);
});