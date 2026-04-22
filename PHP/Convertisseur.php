<?php

//Convertisseur Celsius ↔ Fahrenheit ↔ Kelvin (version function)
//تحويل درجة الحرارة (C → F → K)

class Convertisseur{
    private $C;

    public function __construct($C)
    {
        $this->C =$C;
    }

    public function Fahrenheit(){
        return ($this->C * 9/5) +32;
    }

    public function Kelvin(){
        return $this->C +273.15;
    }

    public function Affiche(){
        echo $this->C." ".$this->Fahrenheit()." ".$this->Kelvin()." ";
    }
}

$t = new Convertisseur(2);
echo $t->Affiche();

