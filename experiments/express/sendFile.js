var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('public/img.html', {root: __dirname});
});

app.use('/', express.static(__dirname + '/public'));

app.listen(3000);


