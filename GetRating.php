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

$query = "select round(avg(rating), 2) from feedback";

$res = mysqli_query($conn, $query);


if(!$res)
{
    echo "Failed to get the average rating. Please wait while this error is fixed from my side.";
    return;
}



if(mysqli_num_rows($res)==0)
{
    echo "-1";
    return;
}


while($row = mysqli_fetch_assoc($res))
{
    foreach($row as $val)
    {
        echo $val;
    }

}

mysqli_close($conn);
 
?>