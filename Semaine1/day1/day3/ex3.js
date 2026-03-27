let tournoi =[
    {nom: 'ahmed', points : 3 , buts_pour :3, buts_contre : 4, matchs_joues :5},
    {nom: 'ismal', points : 5 , buts_pour :2, buts_contre : 2, matchs_joues :8},
    {nom: 'adam', points : 3 , buts_pour :3, buts_contre : 2, matchs_joues :6},
    {nom: 'islam', points : 8 , buts_pour :2, buts_contre : 3, matchs_joues :6},
]

// let buts ={};
let max =tournoi[0];
for(let i=0;i<tournoi.length;i++){
   let buts = tournoi[i].buts_pour - tournoi[i].buts_contre;

   console.log(buts);
}


let Buts = tournoi.sort(function (a,b){    
    return a.points - b.points;
});

// console.log('kkk');
for(let i=1;i<Buts.length;i++){
    
    if(Buts[i].points - Buts[i-1].points == 0){
        let v1 = Buts[i].buts_pour - Buts[i].buts_contre;
        let v2 = Buts[i-1].buts_pour - Buts[i-1].buts_contre;

        if (v1 - v2 < 0) {
            let diff = Buts[i-1]
            Buts[i-1] = Buts[i]
            Buts[i] =diff
        }
    }else{
        console.log(`${Buts[i].points}`); 
    }
}


console.log(Buts);


for(let i=0;i<tournoi.length;i++){
    console.log(`${i+1} - ${tournoi[i].nom} - ${tournoi[i].points} -( ${tournoi[i].buts_pour - tournoi[i].buts_contre})`);
    
}