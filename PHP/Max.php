<?php

class Max{
    private array $T =[];
    private int $max;
    private int $min;

    public function __construct($T){
        $this->T =$T;
        $this->max =$T[0];
        $this->min =$T[0];
    }
    
    public function maxMin(){
        for($i=0;$i<count($this->T);$i++){
            if($this->T[$i]> $this->max){
             return $this->max = $this->T[$i];
            }

            if($this->T[$i] < $this->min){
             return $this->min = $this->T[$i];
            }
        }

    }

    public function Affiche(){
        echo $this->maxMin();
    }
}

$tedt = new Max([1,2,3,4,6,8,9,0]);
$tedt->Affiche();