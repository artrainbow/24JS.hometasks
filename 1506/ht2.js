var http = require('http');

var server = http.createServer(function(req, res) {
    res.end('ok');
});
server.listen(8080)
    .once('connection', function() {
        console.log('Connect...');
})
    .once('listening', function() {
        console.log('Listen port', server.address().port);
    })
    .once('request', function(req, res) {
        console.log('Method: ', http.request().method);
        console.log('URL: ', http.request()._headers.host);
        console.log('Status code: ', res.statusCode);
    });