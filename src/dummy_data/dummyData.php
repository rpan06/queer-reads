<?php

$fileData = file_get_contents('nameoffile');

$data = "dan,math,32
rachel,art,94
john,science,50";

$lines = explode("\n", $data);
$query = "INSERT INTO students (name, course, grade) VALUES ('dan','math',50),('rachel','science',42)";
foreach($lines as $row){
    $rowData = explode(',',$row);
    $insertSection= "('$rowData[0]','$rowData[1]',$rowData[2]),";
    $query .= $insertSection;
}
$query = substr($query,0,-1);
print($query);

?>
