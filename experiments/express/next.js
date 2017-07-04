var express = require('express');
var app = express();

app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    console.log('hey you');
    //next();
});


app.listen(3000);