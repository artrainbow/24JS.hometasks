//Решение 3: встроенный метод bind

var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};


setTimeout(user.sayHi.bind(user), 1000); // аналог через встроенный метод



