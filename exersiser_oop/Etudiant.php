<?php

class Etudiant{
    public array $student =[
        ['nom' => 'ghizlane', 'note' => '20'],
        ['nom' => 'ikram', 'note' => '18'],
        ['nom' => 'isamil', 'note' => '17'],
        ['nom' => 'latifa', 'note' => '18'],
        ['nom' => 'mohamed', 'note' => '12']

    ];
 

    // public function __construct($student)
    // {
    //     $this->student = $student;
    // }

    public function calculerMoyenne(){
        for($i=0;$i<count($this->student);$i++){
           $total += $this->student[$i]["note"];
        }

        $M = $total /count($this->student);
        echo "la  moyane de note :".$M;
    }


}

$test = new Etudiant();
$test->calculerMoyenne();