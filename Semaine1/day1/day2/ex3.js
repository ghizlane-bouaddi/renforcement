let recettes =[
    {pseudo :"shein", note : 2,commentaire : "nice", date : 2025},
    {pseudo :"jumia", note : 3,commentaire : "nice", date : 2026},
    {pseudo :"jumia", note : 1,commentaire : "nice", date : 2026},
    {pseudo :"shein", note : 4,commentaire : "niceee", date : 2022},
    {pseudo :"temu", note : 4,commentaire : "nice", date : 2021}
]

let total = 0;

for(let i=0;i<recettes.length;i++){
    total += recettes[i].note;
}

let M =0;

M = total / recettes.length;
console.log(total);
console.log(M);
console.log(Math.round(M));

let N ={};

for(let i=0;i<recettes.length;i++){
    let note = recettes[i].note;

    if(!N[note]){
        N[note] =0;
    }

    N[note] ++;
}

console.log(N);


for(let i=0;i<recettes.length;i++){
if(recettes[i].note >3){
    console.log(`positifs`);
}else{
    console.log(`négatifs `);
}
}

let note = recettes.sort(function(a,b){
    return a.note - b.note;
});

for(let i=0;i<recettes.length;i++){
    console.log(recettes[i].note);
}

let max = recettes[0];
for(let i=0;i<recettes.length;i++){
    // console.log(recettes[i].pseudo);
    // console.log(recettes[i].commentaire.length);
    // console.log(max.commentaire.length);
    
    if(recettes[i].commentaire.length > max.commentaire.length){
       max = recettes[i];
    }
}

console.log(max);

