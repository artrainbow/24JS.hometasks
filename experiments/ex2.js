var a = (function () {
    var z = 1;
    function b() {
        return z++;
    }

    return {
        c: {
            get: function() {
                return this.z;
            }
        },
        d: {}
    }

}());
var m = a.c;

