let chansons =[
    {titre : 'ana', artiste : 'ghizlane', durée : 192, genre : 'romansi'},
    {titre : 'la', artiste : 'ikram', durée : 211, genre : 'drama'},
    {titre : 'hia', artiste : 'ismail', durée : 133, genre : 'Jazz'},
    {titre : 'wii', artiste : 'younes', durée : 156, genre : 'sade'},
    {titre : 'lalala', artiste : 'ahlam', durée : 212, genre : 'Rock'},
    {titre : 'nonino', artiste : 'latifa', durée : 344, genre : 'sade'},
]


for(let i=0;i<chansons.length;i++){
    console.log(`${chansons[i].titre}`);
}

let rock = [];

rock = chansons.filter(chanson=>chanson.genre === 'Rock');
console.log(rock);



for(let i=0;i<chansons.length;i++){
let minutes = Math.floor(chansons[i].durée / 60);
let seconds  = chansons[i].durée %60
console.log(`chansons minutes ${minutes} chansons seconds ${seconds}`);
}

let total =0;

for(let i=0;i<chansons.length;i++){
    total = total + chansons[i].durée;
   
   
}

console.log(total);
minutes = Math.floor(total/60);
s = total %60;
console.log(`${minutes} : ${s}`);
let max = 0;
for(let i=0;i<chansons.length;i++){
    
if(chansons[i].durée > max){
  max = chansons[i].durée
}
}
console.log(max);


let trouve =0;
for(let i=0;i<chansons.length;i++){
    if(chansons[i].durée >=600){
        trouve =1;
        console.log(chansons[i].durée);
        
    }
}

// let jazz = chansons.filter(chanson=>chansons.genre === ' Jazz');
// console.log(jazz);
for(let i=0;i<chansons.length;i++){
if(chansons[i].genre === 'Jazz'){
    console.log(`${chansons[i].titre} - ${chansons[i].artiste} - ${chansons[i].durée} - ${chansons[i].genre}`);
}
}

let date = chansons.sort(function(a,b){
    return a.durée - b.durée;
});

for(let i=0;i<chansons.length;i++){
    console.log(`${chansons[i].titre} - ${chansons[i].durée}`);
    
}