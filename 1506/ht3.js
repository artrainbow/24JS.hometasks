var http = require('http');
var server = http.createServer().listen(8080);
server.on('request', function(req, res){

    res.end('ok');
    console.log(res._header);
   /* if(res) {
        console.log('hey');
    }*/
    /*var users = [];
    users.push('1');
    console.log(users);*/
});



