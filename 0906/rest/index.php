<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<div>GET id</div>
 <form action= "request.php" method="GET">
	<input type="text" name= "id" />	
 	<input type="submit" />
 </form>


<div>POST id, firstName, lastName </div>
 <form action= "request.php" method="POST">
	<input type="text" name= "id" />
	<input type="text" name= "firstName" />
	<input type="text" name= "lastName" />
 	<input type="submit" />
 </form>
 
 
 <div>PUT id, firstName, lastName </div>
 <form action= "request.php" method="POST">
	<input type="text" name= "id" />
	<input type="text" name= "firstName" />
	<input type="text" name= "lastName" />
 	<input type="submit" name= "_method" value = "PUT" />
 </form>
 
  <div>DELETE id </div>
 <form action= "request.php" method="POST">
	<input type="text" name= "id" />
 	<input type="submit" name= "_method" value = "DELETE" />
 </form>
	
	
</body>
</html>


