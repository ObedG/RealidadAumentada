<?php

define('USER', 'ub9y3sjdehq1dkw5');
define('PASSWORD', 'ztTPz5fUGn33DV31G5Vk');
define('HOST', 'bqjqidercnagmzki3r5n-mysql.services.clever-cloud.com');
define('DATABASE', 'bqjqidercnagmzki3r5n');
    
    
 
try {
    $connection = new PDO("mysql:host=".HOST.";dbname=".DATABASE, USER, PASSWORD);
} catch (PDOException $e) {
    exit("Error: " . $e->getMessage());
}
?>