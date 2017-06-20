//***** Картофелеметатель

// 3 картошки, 3 картофелеметателя и 3 соседа.
// Картошки метаем в соседей, а соседи сообщают на об этом. :)
var neighbors = ['Дядя Ваня', 'Мария Петровна', 'Серега'];

var potatoOne = {id:1, weight: 50, color: 'yellow'};
var PotatoTwo = {id:2, weight: 65, color: 'red'};
var potatoThree = {id:3, weight: 100, color: 'white'};
var potatoes = [potatoOne, PotatoTwo, potatoThree];

// генератор рандомных чисел от min до maх
function getRandomIntFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// механизм стерльбы из картофелеметателя
var potatoBoom = function(potatoid, callback) {
    var neighbor = neighbors[getRandomIntFromTo(0,2)]; // выберем случайного соседа
    var timeout = getRandomIntFromTo(500, 4000);

    console.log('Картошка под номером ' + potatoid + ' сейчас летит к соседу по имени ' + neighbor);

    setTimeout(function(){
        callback(neighbor, potatoid);
    }, timeout);
};

var trophies = [];
var indexArray = [];



for (var i = 0; i<potatoes.length; i++){
    var potatoIndex = potatoes.indexOf(potatoes[i]);
    indexArray.push(potatoes[i].id);
    // запустим функцию c колбэком для каждой картошки
    potatoBoom(potatoes[i].id, function(neighbor, potatoid){
        var trophy = {};
        trophy.neighbor = neighbor;
        var potatoIndex = indexArray.indexOf(potatoid);
        trophies.push(trophy);
        console.log("Журнал трофеев: " + JSON.stringify(trophies));
    });

}