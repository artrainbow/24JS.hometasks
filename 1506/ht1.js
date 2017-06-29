var User = {
	getName: function(arg1) {
		console.log (arg1);
		return this;
	},
	getCode: function(arg2) {
		console.log (arg2);
		return this;
	}
}


User.getName('Hello').getCode('World');