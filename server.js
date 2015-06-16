var express = require('express');
var app = express();

var mongo = require('mongoose');

app.get('/', function(req, res) {
    res.send('hello world');
});

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
});
