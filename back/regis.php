<?php
    $name = $_POST['name'];
    $handle = $_POST['handle'];
    $mail = $_POST['mail'];
    $numb = $_POST['numb'];
	$teadent = $_POST['teadent'];        
	$password = $_POST['password'];
	// echo $username.' '.$password;

    $servername = "localhost";
	$dbusername = "root";
	$dbpassword = "";
	$dbname = "discite";


// CONNECTION PROCESS
	$conn = new mysqli($servername, $dbusername, $dbpassword,$dbname);

	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
    }
    
    echo $mail. ' '. $numb;
    $query = "SELECT * FROM user WHERE number='$numb'";
    $results = mysqli_query($conn, $query);
    if (mysqli_num_rows($results) == 0)
    {
        $sql = "  INSERT INTO user
                (name, handle, mail, number,teadent, password) 
                VALUES('$name','$handle','$mail','$numb','$teadent','$password')";

        
        if ($conn->query($sql) === TRUE) {
            echo "1";
        } else {
            echo "Error";
        }
    }
    else
    {
        echo "User is already added";
    }

    mysqli_close($conn);

?>