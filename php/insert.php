<?php
include_once 'databaseinfo.php';

$sql = 'INSERT INTO score (player_id, win, playdate) VALUES (rand(), 2, now())';

if (isset($_POST['save-score'])) {
  if ($conn->query($sql) === TRUE) {
    header('Location: ../index.php');
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
