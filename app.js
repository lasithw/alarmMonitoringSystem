
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./api/routes/index');
var alarm = require('./api/routes/alarm');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);
app.use('/alarm', alarm);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message 
        }
    }); 
});

module.exports = app;