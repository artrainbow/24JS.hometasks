var http = require('http');

var server = http.createServer(function(req, res) {
    res.end('ok');
});
server.listen(3000)
    .once('connection', function() {
        console.log('Connect...');
    })
    .once('listening', function() {
        console.log('Listen port', server.address().port);
    })
    .on('request', function(req, res) {
        if(req.url == '/about' ){
            console.log('Method: ', http.request().method);
            console.log('URL: ', http.request()._headers.host);
            console.log('Status code: ', res.statusCode);
        };
        if(req.url == '/stop' ){
            server.close(function() {});
            console.log ('Server stopped!');
        };
})