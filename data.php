<?php

$dsn = 'mysql:host=localhost;dbname=testing;';
$login = 'root';
$password = '';
$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES UTF8");
$dbh = new PDO($dsn, $login, $password, $options);

$sql = "SELECT * FROM saker";

$stmt = $dbh->prepare($sql);
$stmt->execute();

$testing["testing"] = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($testing);
