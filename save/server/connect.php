<?php
$servername = "theolaytheoldn.mysql.db";
$username = "theolaytheoldn";
$password = "ChercheStage17avril";
$database= "theolaytheoldn";
$port = 21;
 
// Create connection

try
{
  $db = new PDO('mysql:host=theolaytheoldn.mysql.db;dbname=theolaytheoldn', 'theolaytheoldn', 'ChercheStage17avril'); 
}
catch (Exception $e)
{
  echo 'Erreur : ';
}

// Check connection
if (true) {
  echo "test";
}
else {
  echo "test2";
}
?>