<?php
    $username = $_POST['username_log'];
    $password = $_POST['password_log'];
    
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "discite";


    // CONNECTION PROCESS
    $conn = new mysqli($servername, $dbusername, $dbpassword,$dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $query = "SELECT * FROM user
            WHERE handle='$username' 
            AND password='$password'";  

    $results = mysqli_query($conn, $query);
    if(mysqli_num_rows($results) >= 1){
        echo "LOGIN SUCCESS";
    }else{
        echo "NO USER";
    }
?>