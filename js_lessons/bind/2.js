// Решение 1: сделать обёртку

var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

setTimeout(function() {
    user.sayHi(); // Вася
}, 1000);