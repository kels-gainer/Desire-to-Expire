<?php
$servername= "localhost";
$username="root";
$password="null";
$dbname="Fridge_db";

$connect = mysql_connect($servername,$username,$password,$dbname); 
if (!connect) { 
    die('Connection Failed: ' . mysql_error()); { mysql_select_db("Fridge_db", $connect);
    }
};
$sql = "INSERT INTO user_items (user_email, food_name, category, ex_date) 
VALUES ('user_email', 'food_name', 'category', 'ex_date')"; 

if ($connect->query($sql) === TRUE){

    echo “Your information was added to the database.”;

}

else{
    echo "Error: "$sql . "<br>" . $connect->error;
} 

$connect->close(); 
?>


