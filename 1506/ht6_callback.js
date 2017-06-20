//***** Картофелеметатель

var loggingThrophies = function (callback) {

    var neighbors = ['Петр Алексеевич', 'Владимир Владимирович', 'Александр Григорьевич'];
    var potatoOne = {id:1, weight: 50, color: 'yellow'};
    var PotatoTwo = {id:2, weight: 65, color: 'red'};
    var potatoThree = {id:3, weight: 100, color: 'white'};
    var potatoes = [potatoOne, PotatoTwo, potatoThree];

    // генератор случайных чисел от min до maх
    function getRandomIntFromTo(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // механизм стерльбы из картофелеметателя
    var potatoBoom = function(potato, callback) {
        var neighbor = neighbors[getRandomIntFromTo(0,2)];
        var timeout = getRandomIntFromTo(500, 4000);

        potato.neighbor = neighbor;

        setTimeout(function(){
            callback(potato);
        }, timeout);
    };
    var trophies = [];
    var counter = 0;

    for (var i = 0; i<potatoes.length; i++){
        var potatoIndex = potatoes.indexOf(potatoes[i]);

        // запустим функцию c колбэком для каждой картошки и запишем результаты падения в журнал trophies
        potatoBoom(potatoes[i], function(potato){
            trophies.push(potato);
            counter ++;
            if(counter == potatoes.length){
                callback(trophies);
            }
        })
    }

} // end loggingThrophies func

loggingThrophies(function(trophies) {
    console.log("Журнал трофеев: " + JSON.stringify(trophies));
});










