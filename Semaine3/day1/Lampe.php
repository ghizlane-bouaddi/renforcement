<?php

class Lampe{
    public string $marque;
    public int $puissance;
    public bool $allumée;

    public function __construct($marque,$puissance){
        $this->marque =$marque;
        $this->puissance =$puissance;
        $this->allumée = false;
    }

    public function turnOn(){
        if($this->puissance >0){
            return true;
        }
    }

    public function turnOff(){
         if($this->puissance <0){
            return false;
        }
    }

    public function state(){
        echo "marque : ".$this->marque . 'puissance :'.$this->puissance ."allumée" .$this->turnOn();
    }
}

$test = new Lampe('daw',200);

$test->state();