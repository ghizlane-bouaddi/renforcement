let note = [12, 8, 15, 6, 18, 9, 14];

let soume =0;
let M;
for(let i=0;i<note.length;i++){
    soume += note[i];
}

console.log(soume);
M = soume /note.length;
console.log(M);

let max =note[0];
let min =note[0];
let count =0;
for(let i=0;i<note.length;i++){
    if(note[i]>max){
        max = note[i];
}

    if(note[i]<min){
        min = note[i];
}

if(note[i]>10){
    count++;
}
}


console.log(max);
console.log(min);


console.log(count);
