<?php 

echo "r";
printf("r");
require 'connect.php';
header("Access-Control-Allow-Origin: http://theolaidin.fr");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

echo "aaaaaaaaaaaaaaaaa";
//echo "c".$_GET['nom']."c";

if ($_GET['nom'] != "") {
	echo "bbbbbbbbbb";
	$sql = "SELECT * FROM UTILISATEUR WHERE Id_util LIKE '".$_GET['nom']."';";
	$reponse = $db->query($sql);
	$liste_reponse = $reponse->fetchAll();
	if (count($liste_reponse) == 0) {
		echo "Aucune personne avec cette id n'a réalisé de partie";
	}
	else {
		echo "Partie(s) gagné(s) : ".$liste_reponse[0][1]."<br>Partie(s) perdu(s) : ".$liste_reponse[0][2];
    }
}
?>