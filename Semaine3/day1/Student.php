<?php

class Student{
    public array $Etudiant =[
        ['matières' => 'mathe' ,'notes' => '13'],
        ['matières' => 'arbic' ,'notes' => '13'],
        ['matières' => 'franche' ,'notes' => '13'],
        ['matières' => 'svt' ,'notes' => '13'],
        ['matières' => 'phisicke' ,'notes' => '13']
       
    ];

    public function Calcule_moyenne(){
        for($i =0;$i<count($this->Etudiant);$i++){
            echo "matières :".$this->Etudiant[$i]['matières']. " notes :".$this->Etudiant[$i]['notes']."\n";
        }
    } 

    public function niveus(){
        for($i=0;$i<count($this->Etudiant);$i++){
            $soume += $this->Etudiant[$i]['notes'];
        }

        $moynae = $soume /count($this->Etudiant);

        if($moynae <10){
            echo "Insuffisant";
        }else if($moynae >=10){
            echo "Passable : ".$moynae;
        }else if($moynae >=12){
            echo "Assez bien";
        }else if($moynae >=14){
            echo "Bien";
        }else if($moynae >=16){
            echo "Très bien";
        }
    }
}

$test = new Student();
$test->Calcule_moyenne();
$test->niveus();