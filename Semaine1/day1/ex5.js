let étudiants =[
    {nom : 'ghizlane' ,prenom : 'bouaddi',age : 24,moyenne : 14},
    {nom : 'ikram' ,prenom : 'bouaddi',age : 22,moyenne : 10}
];

for(let i =0;i<étudiants.length;i++){
    if(étudiants[i].moyenne >=12){
        console.log(`${étudiants[i].nom} - ${étudiants[i].moyenne}`);   
    }
}

let age = étudiants.sort(function(a,b){
    return a.age + b.age;
});

for(let i=0;i<étudiants.length;i++){
    console.log(`${étudiants[i].nom} - ${étudiants[i].age}`);
}

let trouve =0;

for(let i=0;i<étudiants.length;i++){
    if(étudiants[i].nom == 'sss'){
        trouve =1;
        console.log(`${étudiants[i].nom}`);
    }
}

if(trouve == 0){
    console.log('ma kinx dak smia');
}

