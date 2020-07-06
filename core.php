<?php



define('DB_USER','root');
define('DB_PASS','tiger');
define('DB_HOST','database');
define('DB_BASE','docker');

$connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_BASE);

if($connect){
      echo "Connect Success";
}

var_dump($_POST);

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $age = $_POST['age'];
    $expirionce = $_POST['experionce'];
    $position = $_POST['position'];
    $query = "INSERT INTO `data_table`( `name`, `age`, `experience`, `position`)
     VALUES ('{$name}','{$age}','{$expirionce}','{$position}')";
    $data_insert = mysqli_query($connect,$query);
    if(!$data_insert){
          die("Failad request".mysqli_error($connect));
      }
}


mysqli_close($connect);