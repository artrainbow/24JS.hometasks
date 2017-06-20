<?
//$name = $_['name'];
/*echo file_get_contents("php://input");
echo file_get_contents("php://output"); 
echo file_get_contents("php://memory"); 
echo file_get_contents("php://temp"); */

$putdata = fopen("php://input", "r");

$backurl="/ht/index.php";
print_r($_GET['_method']) ;

$_SERVER['REQUEST_METHOD'] = PUT;

?>
