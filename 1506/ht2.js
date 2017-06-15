var http = require('http');

var server = http.createServer(function(req, res) {
	res.end('ok');
});
server.once('connection', function() {
	console.log('Connect...');
});
server.listen(8080);
server.once('listening', function() {
	console.log('Listen port', server.address().port);
});
server.once('request', function(req, res) {
	console.log('Method: ', http.request().method);
	console.log('URL: ', http.request()._headers.host);
	console.log('Status code: ', res.statusCode);
});

