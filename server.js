var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(morgan('dev'));
app.use(express.static(__dirname + '/'+process.argv[2]));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/images', express.static(__dirname + '/images'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(9999);
console.log(process.argv[2] + ' is running on 9999');