//Решение 2: bind для привязки контекста

/*
function bind(func, context) {
    return function() { // (*)
        return func.apply(context, arguments);
    };
}

function f() {
    console.log( this );;
}

var g = bind(f, "Context");
g(); */

function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

setTimeout(bind(user.sayHi, user), 1000);