// Например, мы можем проверить, что объект – массив, не вызывая Array.isArray, а просто уточнив наличие важного для нас метода, например splice:
var something = [1, 2, 3];

if (something.splice) {
    console.log( 'Это утка! То есть, массив!' );
}

var x = new Date();

if (x.getTime) {
    console.log( 'Дата!' );
}