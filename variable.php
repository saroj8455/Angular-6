<?php
//variabe declaration
$message="Hello World";
echo "$message <br>"; //correct
echo $message;

echo "<br>";

//define constant new style
const city="HYD <br>";
echo city;
const PI="3.17";

echo PI;
echo "<br>";

//declare conatant using define keyword
define("user","root");
echo user;



echo "<br>";
//predefined constant
echo __FILE__; //show the current file with path eg.C:\xampp\htdocs\sandbox\variable.php
echo "<br>";
echo __DIR__; //show the current director eg.C:\xampp\htdocs\sandbox

echo "<br>";
echo __LINE__; //show the line number eg.26

echo "<br>";

echo true+"op"."<br>"; //output 1
echo 1+1-false;
//dt- 11-08-018
$x=200;
$y=300;
print $x;

//Print Statements /Output Statements

$a=150;
$b=75;
$name="scoty";
echo "<br><br>";
//print() and echo() method
print $a."<br>"; //output 150
print print $a."<br>"; //outpu 1150
                    //print method will always return 'true' after print output so that output will be  1150

echo $a."<br>"; // output 150

$var_one=(print_r($b));
echo $var_one;
echo "<br><br>";
echo var_dump($b); //output int(75) //to know the type of variable




























?>
