<?php

class Cinema{
    private array $romme =[
        ['nom' => '1' ,'total' => 20,'réservations'=>[]],
        ['nom' => '2' ,'total' => 120,'réservations'=>[]],
        ['nom' => '3' ,'total' => 220,'réservations'=>[]],
        ['nom' => '4' ,'total' => 204,'réservations'=>[]]
    ];

    public function ajouterSalle($nom, $nbPlaces){
       $this->romme[] =[
        ['nom' => $nom,'total' => $nbPlaces]
       ];

       print_r($this->romme);

    }

    public function reserver($nomSalle, $nomClient, $nbPlaces) {
        for($i=0;$i<count($this->romme);$i++){
             if($this->romme[$i]['nom'] === $nomSalle && $this->romme[$i]['total'] >= $nbPlaces){
                print_r([$this->romme[$i]['nom'] ,$nomClient, $this->romme[$i]['total']--]); 
             } 


        }
      
    }

   public function disponibles($places_totales,$réservées){
    for($i=0;$i<count($this->romme);$i++){
        $places_totales+=$this->romme[$i]['total']- $réservées;
        
      

    }
    }
}

$test = new Cinema();
echo $test->ajouterSalle('5',299);
echo $test->reserver('3','ghizlane',2);
echo $test->disponibles(20,9);