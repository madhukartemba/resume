<?php

$sname = "localhost";
$uname = "id18948204_madhukartemba";
$pass = "xH<S@92Qk+Nu>[7G";
$dbname = "id18948204_sitecomments";


$conn = mysqli_connect($sname, $uname, $pass, $dbname);

if(!$conn)
{
echo "Database connection error! Please wait while this error is fixed from my side.";
return;
}

$query = "select name, rating, comment from feedback";

$res = mysqli_query($conn, $query);


if(!$res)
{
    echo "Failed to get the feedback. Please wait while this error is fixed from my side.";
    return;
}



if(mysqli_num_rows($res)==0)
{
    echo "-1";
    return;
}


echo json_encode(mysqli_fetch_all($res));

mysqli_close($conn);
 
?>
