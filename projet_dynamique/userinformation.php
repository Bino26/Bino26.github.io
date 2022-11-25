<?php
require "bd.php";
if (isset($_POST['sends'])) {
    $user= isset($_POST["user"])? $_POST['user']:"";
    $email= isset($_POST["email"])? $_POST['email']:"";
    $message= isset($_POST["message"])? $_POST['message']:"";
    if (!empty($user) and !empty($email) and !empty($message)) {
        $req = $bdd->prepare("INSERT INTO userinfodata (user,email,message) VALUES (?,?,?)");
        $req->execute([$user,$email,$message]);
        if ($req->rowCount()==1) {
            echo "VOTRE MESSAGE A ETE PRIS EN COMPTE.VOUS SEREZ CONTACTER DANS LES PLUS BREF DELAIS";
        } else {
            echo "AUCUN MESSAGE N'A ETE ENVOYE";
        }
        
    } else {
        echo " VEUILLEZ REMPLIR TOUS LES CHAMPS";
    }
    
}
else {
    echo "ERREUR DE CONNEXION";
}
?>