// Простой callback
function f (callback) {
    console.log('Функция выполняется...');
    setTimeout(callback, 5000);
}

f(function(){
    console.log('Функция выполнилась, атвечаю111!');
});
