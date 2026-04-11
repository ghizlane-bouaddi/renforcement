//ex 21 

let prodect = [
    {Mois : 5 , CA :10000, Nombre_clients :50, Ville : 'casa'},
    {Mois : 3 , CA :4000, Nombre_clients :60, Ville : 'youssefia'},
    {Mois : 1 , CA :50000, Nombre_clients :50, Ville : 'asfi'},
    {Mois : 7 , CA :12000, Nombre_clients :10, Ville : 'raba'},

]
let t =0;
for(let i=0;i<prodect.length;i++){
    t +=prodect[i].CA;
}

let M = t/prodect.length;

let max = prodect[0];
let min =prodect[0];
for(let i=0;i<prodect.length;i++){
    if(prodect[i].CA >max){
        max = prodect[i];
    }

    if(prodect[i].CA<min){
        min = prodect[i];
    }

    if(prodect[i].CA >50000){
        console.log(prodect[i].Mois);   
    }
}

console.log(t);
console.log(M);
console.log(max);
console.log(min);



//ex22

let person =[
    {utilisateur : 'ghizlane', évaluation :8, commentaire : 'wa3ra ', date :{jour :1,mois :3 ,annes :2026}},
    {utilisateur : 'ismail', évaluation :9, commentaire : 'nadi ', date :{jour :1,mois :3 ,annes :2026}},
    {utilisateur : 'ikram', évaluation :7, commentaire : 'fna ', date :{jour :1,mois :3 ,annes :2026}},
    {utilisateur : 'ilham', évaluation :5, commentaire : 'waw ', date :{jour :1,mois :3 ,annes :2026}},
    {utilisateur : 'slma', évaluation :2, commentaire : 'khiba ', date :{jour :1,mois :3 ,annes :2026}},

]

let total =0
let m;
let trouve =0;
let trouve1 =0
let trouve2 =0
for(let i=0;i<person.length;i++){
    total +=person[i].évaluation;

    if(person[i].évaluation){
        trouve++;
    }

    if(person[i].évaluation>=4){
       console.log(person[i].évaluation);
    }

    if(person[i].évaluation<=2){
        console.log(person[i].évaluation);
    }
}

m = total/person.length;

console.log(m);
console.log(trouve);


//ex23

let groub = [
    {équipe :'slmi', points:2, buts_pour :2, buts_contre :0},
     {équipe :'alelmi', points:8, buts_pour :2, buts_contre :3},
      {équipe :'m3am', points:5, buts_pour :3, buts_contre :6}

]

let F =0;
for(let i=0;i<groub.length;i++){
    F = groub[i].buts_pour - groub[i].buts_contre
    console.log(`fari9 no9at ${i} - ${F}`);
}


let point = groub.sort(function(a,b){
    return a.points - b.points
});

for(let i=0;i<groub.length;i++){
    console.log(groub[i].points);
    
}

let gool = groub.sort(function(a,b){
    return a.F - b.F
});

for(let i=0;i<groub.length;i++){
    console.log(groub[i].F);
    
}

//ex24 

let reston = [
    {id :1, nom_client :'ghizlane', quantité :10, date :{jour :1 ,mois :2,annee:2026}, heure :'13:13', statut:'hale'},
    {id :1, nom_client :'isaaail', quantité :40, date :{jour :1 ,mois :2,annee:2026}, heure :'13:13', statut:'sad'},
    {id :1, nom_client :'ikram', quantité :10, date :{jour :1 ,mois :2,annee:2026}, heure :'13:13', statut:'hale'},
    {id :1, nom_client :'aichae', quantité :59, date :{jour :1 ,mois :2,annee:2026}, heure :'13:13', statut:'hale'},
    {id :1, nom_client :'latifa', quantité :30, date :{jour :1 ,mois :2,annee:2026}, heure :'13:13', statut:'sad'}

]

let count =0
for(let i=0;i<reston.length;i++){
    if(reston[i].quantité <=30){
        count =1;
    }
}

if(count ==1){
    console.log(`lmkan mtofir`);
    
} else{
    console.log('lmkan mhjoz');
    
}


// ex 25
