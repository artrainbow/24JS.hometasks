const util = require('util');

var obj = {
    a: 5,
    b: 6,
    c: function() {
        console.log(this.b);
    }

};

obj.self = obj;
console.log(util.inspect(obj));

var str = util.format("My %s %d %j", null, 1233412, {test: "3443"});

console.log(str);