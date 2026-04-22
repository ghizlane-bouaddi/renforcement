<?php

class Pairs{
   private array $P =[];

   public function __construct($P)
   {
    $this->P = $P;
  }

  public function test(){
    for($i =0;$i<count($this->P);$i++){
        if($this->P[$i] %2 ==0){
            echo 'la valeur Paire'.$this->P[$i].'<br>';
        }else {
            echo "la valeur impair".$this->P[$i].'<br>';
        }
    }
  }


}

$impair = new Pairs([1,2,3,4,5]);
$impair->test();