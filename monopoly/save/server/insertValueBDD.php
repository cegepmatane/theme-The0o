<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://theolaidin.fr");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    for ($i=0; $i < $request->size; $i++) { 
        $nom = $request->$i;
        $chaine = "SELECT Id_util FROM UTILISATEUR WHERE Id_Util='".$nom."';";
        $sql = mysqli_query($db, $chaine);
        if ($sql->num_rows == 0) {
            $chaine = "INSERT INTO UTILISATEUR VALUES('".$nom."', 0, 0)";
            $sql = mysqli_query($db, $chaine);
        }
        if ($request->$nom == true) {
            $chaine = "SELECT partie_gagne_util FROM UTILISATEUR WHERE Id_Util='".$nom."';";
            $sql = mysqli_query($db, $chaine);
            $nb_partie_gagne = $sql->fetch_row()[0] + 1;
            $chaine = "UPDATE UTILISATEUR SET partie_gagne_util=".$nb_partie_gagne." WHERE Id_util='".$nom."'";
            echo $chaine;
            $sql = mysqli_query($db, $chaine);
        }
        else {
            $chaine = "SELECT partie_perdu_util FROM UTILISATEUR WHERE Id_Util='".$nom."';";
            $sql = mysqli_query($db, $chaine);
            $nb_partie_gagne = $sql->fetch_row()[0] + 1;
            $chaine = "UPDATE UTILISATEUR SET partie_perdu_util=".$nb_partie_gagne." WHERE Id_util='".$nom."'";
            echo $chaine;
            $sql = mysqli_query($db, $chaine);
        }
    }         
}
?> 