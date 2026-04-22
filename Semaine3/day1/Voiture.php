<?php

class Voiture{
    public string $marque;
    public string $modele;
    public int $kilometrage =0;

    public $capacite_reservoir;
    public int $carburant_actuel;

    public function __construct($marque,$modele,$kilometrage,$carburant_actuel)
    {
        $this->marque =$marque;
        $this->modele =$modele;
        $this->kilometrage =$kilometrage;
        $this->capacite_reservoir =1000;
        $this->carburant_actuel =$carburant_actuel;
    }

    public function drive($km){
        $consomation = $this->kilometrage *7 /100;

        $capacite= $this->carburant_actuel - $this->capacite_reservoir;
        if($consomation < $km){
           echo 'erreur et indique combien de km sont possibles'.$capacite;
           
        }else{
            echo $capacite;
        }
    }

    public function displayDashboard(){
        echo "marque : ".$this->modele. "marque :".$this->marque. "kilometrage : ".$this->kilometrage."  drive : ".$this->drive(500);
    }
}

$test = new Voiture('catcate','2020',300,200);

$test->drive(500);
$test->displayDashboard();