// Пример потери контекста
var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};
var f = user.sayHi;
console.log(f); // [Function: sayHi]
setTimeout(user.sayHi.call(user), 1000); // undefined (не Вася!), потому что this.firstName и контекст потерян
