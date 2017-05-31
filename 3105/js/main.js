//---- TASK 1
//-- var 1

var i = 0;
function func (i) {
	if (i <= Infinity) {

		window.i += i;
		return window.i;
	} else {
		return 0;
	}
};

//-- var 2

var a = 0;
function func (b) {
	if (a <= Infinity) {
		a += b;
		return a;
	} else {
		return 0;
	}
};


//-- var 3

 function funcClosure() {
	var y = 0;
	return function (x){
		if(x <= Infinity) {

			return y +=x; 
		} else {
			return y = 0;
		}
	}
}

var closure = funcClosure();


//---- TASK 2

!function z (f){
	var obj = {
		name : 'Вася'
	}
	function f(obj) {
		obj.age = 5;
		return obj;
	};
	f(obj);
	console.log(obj);
}()


