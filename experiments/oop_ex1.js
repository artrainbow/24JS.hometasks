function Animal(weight) {
    // публичное свойство
    this.weight = weight;

    // приватное свойство
    var maxKCalories = weight * 70;

    // геттер получает приватное свойство
    this.getMaxKCalories = function () {
        return maxKCalories;
    };

    //сеттер, перезаписывает приватное свойство
    this.setMaxKCalories = function (newMaxKCal) {
        maxKCalories = newMaxKCal;
    };

    // публичный метод класса Animal
    this.say = function () {
        console.log('AAAAAA');
        breeze();
    };

    function breeze() {
        console.log('hhhhh');
    }

    this.eat = function (edible, meal) {
        if(edible){
            digestion(meal);
        }
    };
    function digestion(meal) {
        console.log(meal + ' было очень вкусно. Спс, двуногий.');
    }
}

function extend(child, parent) {
    var Foo = function () {
        //...
    };
    Foo.prototype = parent.prototype;
    child.prototype = new Foo();
    child.prototype.constructor = child;
    child.superclass = parent.prototype;
}

function Cat(weight) {
    Cat.superclass.constructor.apply(this, arguments);
    this.say = function () {
        console.log('Maaaaw');
    };
    this.feed = function (meal) {
        if(meal != 'мясо') {
            this.unpleased();
        } else {
            this.eat(true, meal)
        }
    };
    this.unpleased = function () {
        console.log('шкряб-шкряб-шкряб');
    };
    function digestion(meal) {
        console.log(meal + 'бабочки пошли!');
    }
}

/*
function Dog(weight) {
    Dog.superclass.constructor.apply(this, arguments);
    this.say = function () {
        console.log('Wowh, wowh');
    }

}
*/

extend(Cat, Animal);
//extend(Dog, Animal);
var cat = new Cat(5);
console.log(cat.getMaxKCalories());





