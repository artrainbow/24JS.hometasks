<div><h1>Курсы валют. (PHP).</h1></div><hr /><br />
<?

for($j = 1; $j < 7; $j++) {

	$url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=';

	$contents = file_get_contents($url . $j); 
	$contents = utf8_encode($contents); 
	$results = json_decode($contents); 
	$count = count($results);

	echo "<table border = '1' cellpadding='7' cellspacing='0'>";

	for ($i = 0; $i < $count; $i++) {
		$obj = $results[$i];
		echo "<tr>";
		echo "<td>" . $obj->ccy . "</td>";
		echo "<td>" . $obj->base_ccy . "</td>";
		echo "<td>" . $obj->buy . "</td>";
		echo "<td>" . $obj->sale . "</td>";
		echo "</tr>";
	}
	echo "</table>" . "<br />";

}

?> 
