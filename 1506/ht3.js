const EventEmitter = require('events');
const myEmitter = new EventEmitter();
var http = require('http');
var server = http.createServer().listen(8080);
var users = {};
var userCounter = 0;

server.on('request', function(req, res){

    // fixing chrome request favicon
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    var date = new Date();
    var currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var Id = ++userCounter;
    users['user_' + Id] = currentTime;
    res.end('ok');

    // logger
    console.log('connection log', users);

    myEmitter.addListener('logIn', function (){});
    myEmitter.emit('logIn', console.log('user_' + Id + ' connected...'));
});





