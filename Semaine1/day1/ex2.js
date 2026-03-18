let Note =[12, 8, 15, 6, 18, 9, 14];
let trouve =0;
let max =Note[0];
let min =Note[0];
let somme =0;
for(let i=0;i<Note.length;i++){
    somme = somme+Note[i];

    if(Note[i]>max){
        max = Note[i];
    }

    if(Note[i]<min){
        min = Note[i];
    }

    if(Note[i]>=10){
        trouve++;
    }
}




console.log(somme);
console.log(max);
console.log(min);
console.log(trouve)