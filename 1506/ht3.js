var http = require('http');
var server = http.createServer().listen(8080);
var users = [];
server.on('request', function(req, res){

    /*if( res._header != a ) {
        //console.log('hey');
        users.push(res._header);
    }

    console.log(users);
    var a = res._header;*/

    res.end('ok');
    console.log(res._header);
});





