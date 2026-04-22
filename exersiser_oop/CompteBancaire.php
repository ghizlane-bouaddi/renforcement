<?php

class CompteBancaire{
    public $titulaire;
    public $solde;

    public function __construct($titulaire,$solde)
    {
       $this->titulaire =$titulaire;
       $this->solde =$solde;
    }

    public function deposer($prix){
       return $prix += $this->solde;
    }

    public function retirer($R){
        return $R -= $this->solde;
    }

    // public function afficherSolde(){
    //    echo 'solde : '.$this->solde .'deposer : '.$this->deposer(). "retirer :". $this->retirer();

    // }
}

$Test = new CompteBancaire('ghizlane',200);


echo $Test->deposer(10);
echo $Test->retirer(100);
