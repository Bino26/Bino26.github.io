<?php 
try {
    $bdd= new PDO("mysql:host=localhost;dbname=binosite","root","");
} catch (Exeception $e) {
    echo("la base de donnee n'est pas connecte");
}
?>