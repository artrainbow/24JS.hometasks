const http = require('http');
const https = require('https');
var counter, ccy, base_ccy, buy, sale, result;

https.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (res) {
     res.on('data', function(data){
         counter = JSON.parse(data);
    })
});


var server = http.createServer(function(req, res) {})
    .listen(3000)
    .on('request', function(req, res) {
        if(req.url == '/currency' ){
            for( var i = 0; i < counter.length; i++ ) {
                ccy= counter[i]['ccy'];
                base_ccy = counter[i]['base_ccy'];
                buy = counter[i]['buy'];
                sale = counter[i]['sale'];
                result = ccy + ' ' + base_ccy + ' ' + buy + ' ' + sale;
                res.write( '<br />' + result.toString());
                res.write( '<br />');
                //res.write(JSON.stringify(counter));
            }
        }

        res.end();
    })