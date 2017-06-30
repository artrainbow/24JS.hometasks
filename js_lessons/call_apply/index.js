// exmpl 1


function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}
var user = {
    firstName: "Vasiliy",
    lastName: "Petrov"
};



showFullName.call(user);


// exml2

/*var user = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
    console.log( this[firstPart] + " " + this[lastPart] );
}

showFullName.call(user, 'firstName', 'surname');
showFullName.call(user, 'firstName', 'patronym'); */

// Одалживание метода

function printArgs() {
    var join = [].join; // скопируем ссылку на функцию в переменную

    // вызовем join с this=arguments,
    // этот вызов эквивалентен arguments.join(':')
    var argStr = join.call(arguments, ':');

    console.log( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);

// Метод apply
var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5