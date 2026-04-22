<?php

class Distributeur{
   private array $produits =[
    ['nom' => 'caffe', 'prix' => '100','stock' => '20'],
    ['nom' => 'lite', 'prix' => '130','stock' => '30'],
    ['nom' => 'caffe lite', 'prix' => '190','stock' => '25'],
    ['nom' => 'orange', 'prix' => '200','stock' => '29'],
   ];

   private float $caisse =0;


   public function afficherProduits(){
    for($i=0;$i<count($this->produits);$i++){
        echo ' nom : '. $this->produits[$i]['nom'] .' prix : '.$this->produits[$i]['prix'] .' stock : '.$this->produits[$i]['stock']. "\n";
    }
   }

   public function acheter(string $nomProduit, float $montantInsere){
    for($i=0;$i<count($this->produits);$i++){
        
        if($this->produits[$i]['nom'] === $nomProduit ){
           
           echo 'kin'.$this->produits[$i]['nom'];

        }else{
           echo 'kin'.$this->produits[$i]['nom'];
        }

        if($montantInsere >0){
             echo $this->caisse += $this->produits[$i]['prix'] - $montantInsere;

        }
    }
   }

   
}

$test = new Distributeur();
$test->afficherProduits();
$test->acheter('caffe', 100);