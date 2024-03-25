<?php

// Database connection
$conn = mysqli_connect("localhost", "root", "", "db_jalanin_aja");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the raw POST data
$inputJSON = file_get_contents('php://input');

// Decode the JSON data
$input = json_decode($inputJSON, true);

// Check if the JSON decoding was successful
if ($input === null) {
    // JSON decoding failed
    echo json_encode(array("success" => false, "message" => "Invalid JSON data"));
} else {
    // JSON decoding successful, you can access the data like this:
    $username = $input['username'];
    $password = $input['password'];
    $email = $input['email'];

    // Prepare and execute SQL statement to check if user already exists
    $checkStmt = $conn->prepare("SELECT * FROM tabel_user WHERE user_username = ? OR user_email = ?");
    $checkStmt->bind_param("ss", $username, $email);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        // User already exists
        echo json_encode(["success" => false, "message" => "User already exists"]);
    } else {
        // User does not exist, proceed with registration

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Get current timestamp
        $timestamp = date("Y-m-d H:i:s");

        // Prepare and execute SQL statement to insert user into database
        $stmt = $conn->prepare("INSERT INTO tabel_user (user_username, user_password, user_email, create_at, update_at) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $username, $hashedPassword, $email, $timestamp, $timestamp);

        if ($stmt->execute()) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Registration failed"]);
        }

        $stmt->close();
    }

    $checkStmt->close();
    $conn->close();
}
?>
