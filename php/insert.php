<?php
include_once 'databaseinfo.php';

if (isset($_POST['winner'])) {
  $winner = $_POST['winner'];
}
if (isset($_POST['playerName'])) {
  $player = $_POST['playerName'];
}

$sql = "INSERT INTO score (player_id, win, playdate) VALUES (" . rand() . "," . $winner . ", now())";

if (isset($_POST['save-score'])) {
  if ($conn->query($sql) === TRUE) {
    
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$sql = "INSERT INTO player (name, register_date) VALUES ('$player', now())";

if (isset($_POST['save-score'])) {
  if ($conn->query($sql) === TRUE) {
    header('Location: ../index.php');
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
