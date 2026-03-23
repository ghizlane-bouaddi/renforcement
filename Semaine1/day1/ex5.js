let étudiants =[
    {nom : 'ghizlane' ,prenom : 'bouaddi',age : 24,moyenne : 14},
    {nom : 'ikram' ,prenom : 'bouaddi',age : 22,moyenne : 14}
];
let max =0;
for(let i=0;i<étudiants.length;i++){
    if(étudiants[i].moyenne>=12){
        console.log(`nom : ${étudiants[i].nom} - prénom : ${étudiants[i].prenom} -age : ${étudiants[i].age} - ${étudiants[i].moyenne}` )
    }
    // if(étudiants[i].age>max){
    //     max = étudiants[i].age;
    //     console.log(`age : ${max}`);
    // }
}

étudiants.sort(function(a,b){
    return b.age - a.age;
});
for (let i = 0; i < étudiants.length; i++) {
    console.log(`${étudiants[i].nom} - ${étudiants[i].age} ans`);
}

// if(a.age >b.age){
//     console.log(`age : ${étudiants.age}`);
// }

console.log('\n');
let trouve =0;
for(let i=0;i<étudiants.length;i++){
   
    if(étudiants[i].nom =='slma'){
       console.log(`${étudiants[i].nom} - ${étudiants[i].age}`);
       trouve =1;
    }
}

if(trouve == 0){
    console.log(`Étudiant non trouvé`);
}

