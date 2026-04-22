<?php

class Température{
    public float $Celsius;

    public function __construct($Celsius)
    {
        $this->Celsius =$Celsius;
    }

    public function Fahrenheit(){
        $N =($this->Celsius * 9/5) + 32;
        echo "Fahrenheit : ".$N;
    }

    public function Kelvin(){
        $K = $this->Celsius + 273.15;
        echo "Kelvin : ".$K;
    }
}

$test = new Température(10);
$test->Fahrenheit();
$test->Kelvin();