<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
</head>
<body>
<div><h1>Курсы валют. (JS).</h1></div><hr /><br />
<div>
	<div id="ccy" style="display: inline-block;"></div>
	<div id="base_ccy" style="display: inline-block;"></div>
	<div id="buy" style="display: inline-block;"></div>
	<div id="sale" style="display: inline-block;"></div>
</div>
<script>
	var uri = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
	var jqxhr = $.getJSON( uri );

	jqxhr.complete(function() {
		for( var i = 0; i < jqxhr.responseJSON.length; i++ ) {
			$('#ccy').append('<div>' + jqxhr.responseJSON[i]['ccy'] + '</div>');
			$('#base_ccy').append('<div>' + jqxhr.responseJSON[i]['base_ccy'] + '</div>');
			$('#buy').append('<div>' + jqxhr.responseJSON[i]['buy'] + '</div>');
			$('#sale').append('<div>' + jqxhr.responseJSON[i]['sale'] + '</div>');

		}
	});
</script>

	
</body>
</html>

