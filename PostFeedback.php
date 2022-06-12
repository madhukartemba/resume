<?php
$sname = "localhost";
$uname = "id18948204_madhukartemba";
$pass = "xH<S@92Qk+Nu>[7G";
$dbname = "id18948204_sitecomments";

$rating = $_POST["rating"];
$email = $_POST["email"];
$name = $_POST["name"];
$comment = $_POST["comment"];


$conn = mysqli_connect($sname, $uname, $pass, $dbname);

if(!$conn)
{
echo "Database connection error! Please wait while this error is fixed from my side.";
return;
}


$query = "insert into feedback (rating, email, name, comment) values ('$rating', '$email', '$name', '$comment')";

if(mysqli_query($conn, $query))
{
echo "Feedback recieved, thanks!";
}
else
{
echo "Failed to send the feedback. Please wait while this error is fixed from my side.";
}

mysqli_close($conn);

?>
