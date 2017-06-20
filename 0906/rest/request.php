<?
//print_r($_SERVER['REQUEST_METHOD']);


$ch = curl_init();
echo $ch;


//$putdata = file_get_contents("php://input");

$db = mysqli_connect("localhost", "artrainbow", "Mob0667709099!SNT%", "snt");
if (!$db) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
}
if ($_GET) {
	header($_SERVER['REQUEST_METHOD']); 
	$result = mysqli_query($db, "SELECT * FROM users WHERE id=" . $_GET["id"]);
	while($users = mysqli_fetch_array($result, MYSQLI_ASSOC))
	  {
		print_r($users['id'].PHP_EOL);
		print_r($users['firstName'].PHP_EOL);
		print_r($users['lastName'].PHP_EOL);
		echo "<br />";
	  }

} elseif ($_POST['_method'] == 'PUT') {
	$_SERVER['REQUEST_METHOD'] = 'PUT';
	//header('Content-Type: image/png');
	echo $_SERVER['REQUEST_METHOD'];
	header($_SERVER['REQUEST_METHOD']); 
	
	
} elseif ($_POST['_method'] == 'DELETE') {
	$_SERVER['REQUEST_METHOD'] = 'DELETE';
	
}elseif ($_POST && $_POST['_method'] != 'PUT') {
	$sql = "INSERT INTO users (`id`, `firstName`, `lastName`) VALUES " . "(" . "'" . $_POST["id"] . "'" . "," . "'" . $_POST["firstName"] . "'" . "," . "'" . $_POST["lastName"] . "'" . ")";
	$result = mysqli_query($db, $sql);
	
		while($users = mysqli_fetch_array($result, MYSQLI_ASSOC))
	  {
		print_r($users['id'].PHP_EOL);
		print_r($users['firstName'].PHP_EOL);
		print_r($users['lastName'].PHP_EOL);
		echo "<br />";

		//echo $sql;
	  }
} else {
	echo 'Something wrong!';
}



//mysqli_free_result($result);
mysqli_close($db);

// unset global VARs
  unset($_GET); 
  unset($_SERVER['REQUEST_METHOD']); 
  unset($_POST); 
?>
<br />
<a href="/ht/rest/"> << back</a>