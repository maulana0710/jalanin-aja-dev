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

    // Prepare and execute SQL statement to fetch user data
    $stmt = $conn->prepare("SELECT * FROM tabel_user WHERE user_username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user["user_password"])) {
            echo json_encode(["success" => true, "message" => "Login successful", "user" => $user]);
        } else {
            echo json_encode(["success" => false, "message" => "Incorrect password"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "User not found"]);
    }

    $stmt->close();
    $conn->close();
}
?>
