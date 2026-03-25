<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "db.php";

$data = json_decode(file_get_contents("php://input"));

$title = $data->title;
$author = $data->author;
$description = $data->description;

$sql = "INSERT INTO books (title, author, description)
VALUES ('$title', '$author', '$description')";

$conn->query($sql);

echo json_encode(["status"=>"success"]);

?>