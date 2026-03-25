let ventes  =[
    {mois : 'march',chiffre_affaires : 30000, nb_clients :10, ville :'youssoufia'},
    {mois : 'march',chiffre_affaires : 50000, nb_clients :10, ville :'youssoufia'},
    {mois : 'mai',chiffre_affaires : 52000, nb_clients :15, ville :'casa'},
    {mois : 'avrile',chiffre_affaires :31000, nb_clients :20, ville :'rbate'},
    {mois : 'mai',chiffre_affaires : 14000, nb_clients :25, ville :'youssoufia'}
]

let total =0;

for(let i=0;i<ventes.length ;i++){
    total +=ventes[i].chiffre_affaires;
}
console.log(total);

console.log(total / ventes.length);

let max =0;
for(let i=0;i<ventes.length ;i++){
if(ventes[i].chiffre_affaires > max){
    max = ventes[i].chiffre_affaires
}
}
console.log(max);

let min = ventes[0];

for(let i=0;i<ventes.length ;i++){
if(ventes[i].nb_clients < min){
    min = ventes[i].nb_clients
}
}

console.log(min);

let mois =[];

mois = ventes.filter(vente=>vente.chiffre_affaires>=12000);
console.log(mois);

let resume ={};
for(let i=0;i<ventes.length;i++){
     let ville = ventes[i].ville
     if(!resume[ville]){
        resume[ville] = { ca: 0, clients: 0 };
     }

    resume[ville].ca += ventes[i].chiffre_affaires;
    resume[ville].clients += ventes[i].nb_clients;

}
console.log(resume);


let date_ca = ventes.sort(function(a,b){
    return a.chiffre_affaires - b.chiffre_affaires
});

for(let i=0;i<ventes.length;i++){
    console.log(`${ventes[i].mois} - ${ventes[i].chiffre_affaires}`);
}

// console.log(result);


// let MM = 0; 
// for(let i=0;i<ventes.length;i++){
//     MM = M[i] - M[i-1];
// }

// console.log(mm)
///ex8
let M ={};
let cont =0;
for(let i=0;i<ventes.length;i++){
    let mois = ventes[i].mois;
    if(!M[mois]){
        M[mois] = 0;
    }

    M[mois] += ventes[i].chiffre_affaires; 
}




console.log(M);

