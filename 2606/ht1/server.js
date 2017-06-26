var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var parser = require('./parser.js');


http.createServer(function(request, response) {

    var body = '';
    request.on('data', function (data) {
        body += data;
        var post = qs.parse(body);
        var bbcode = post['bbcode'];
        var result = parser.string(bbcode);
        fs.writeFile('result.json', result, function () {
        });
        fs.readFile('result.json', function (err, data) {
            
        });
        console.log(result);
    });
    if(request.url === "/"){
        sendFileContent(response, "index.html", "text/html");
    }
    else{
        response.end();
    }
}).listen(3000);

function sendFileContent(response, fileName, contentType){
    fs.readFile(fileName, function(err, data){
        if(err){
            response.writeHead(404);
            response.write("Not Found!");
        }
        else{
            response.writeHead(200, {'Content-Type': contentType});
            response.write(data);
        }
        response.end();
    });
}
