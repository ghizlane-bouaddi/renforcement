// let name = ['ghizlane','slma'];
// name.push('ilham');
// console.log(name);

// let number = [1,2,3,4,5,10];

// number.forEach(numbr => {
//    console.log(numbr);
   
// });

// let numb = number.find(N=>N ==10);
// console.log('kina',numb);


// let fill = number.filter(N=>N>=5);
// console.log(fill);

// let mm = number.map(P=>P*2);
// console.log(mm);

// let users = [
//   { id: 1, name: "Ali", age: 20 },
//   { id: 2, name: "Sara", age: 17 },
//   { id: 3, name: "Yassine", age: 25 }
// ];

// let user =[
//     {id: 4, name: "hhh", age: 25}
// ];

// for(let i=0;i<users.length;i++){
//     user.push(users[i]);
// }

// console.log(user);

// let use = users.forEach(N=>{
// console.log(N.name);
// });



// let id = users.find(N=>N.id == 2);
// console.log(id);

// let lage = users.filter(A=>A.age >=18);
// console.log(lage);


// let up = users.forEach(u => {
//     console.log(u.name.toUpperCase());
    
// });

// let produits = [
//   { id: 1, nom: "PC", prix: 5000 },
//   { id: 2, nom: "Phone", prix: 2000 }
// ];

// let produi = [
//      { id: 3, nom: "PC", prix: 3000 },
// ]

// for(let i=0;i<produits.length;i++){
//     produi.push(produits[i]);
// }

// console.log(produi);

// let p = produi.forEach(N=>{
//     console.log(N);
    
// });
// let Up = produits.find(U=>U.id === 1);
// if(Up){
//   Up.prix =200;
// }
       

    
// let del = produitsi.filter(D => D.id !== 1);
// console.log(del);


// let prx = produits.filter(p => p.prix >3000);
        
//     console.log(prx);
    


// let T =[1,2,3,4,5,6,7,8,9,0];
// console.log(T);

// for(let i=0;i<T.length;i++){
//     if(T[i]%2 ==0){
//         console.log(T[i]);
        
//     }
// }

// let summe =0;

// for(let i=0;i<T.length;i++){
//     summe = summe+T[i];
// }
// console.log(summe);


// let max = T[0];

// for(let i=0;i<T.length;i++){
//     if(T[i] >max){
//         max = T[i];
//     }
// }

// console.log(max);

// let min =T[0];

// for(let i=0;i<T.length;i++){
//     if(T[i] <min){
//         min = T[i];
//     }
// }
// console.log(min);


// let trouve =0;
// for(let i=0;i<T.length;i++){
//     if(T[i]>6){
//     console.log(T[i]);

//     }
    
// }

// let TT ={
//     marque : "ronge",
//     modèle : '5 vole',
//     annee : '2020'
// }

// console.log(`had sira hia sirat ${TT.marque} min naw3 ${TT.modèle}, oxiat snat : ${TT.annee}`);
// TT.annee =2026
// console.log(`had sira hia sirat ${TT.marque} min naw3 ${TT.modèle}, oxiat snat : ${TT.annee}`);

// TT.color = "red";
// console.log(`had sira hia sirat ${TT.marque} min naw3 ${TT.modèle}, oxiat snat : ${TT.annee} ikhtart ana lawn ${TT.color}`);

let etudiants =[
    {nom :"ghizlane",note : 12},
    {nom :"ismail",note : 19},
    {nom :"ikram",note : 17},
    {nom :"ilham",note : 10},
    {nom :"ismail",note : 8}
]

for(let i=0;i<etudiants.length;i++){
    if(etudiants[i].note>10){
        console.log(etudiants[i]);
        
    }
}

let soume =0;
let M;

for(let i=0;i<etudiants.length;i++){
    soume +=etudiants[i].note;
}

    M = soume/etudiants.length;


console.log(M);

let max = etudiants[0].note;

for(let i=0;i<etudiants.length;i++){
    if(etudiants[i].note>max){
        max = etudiants[i].note;
    }
}

console.log(max);

let min = etudiants[0].note;

for(let i=0;i<etudiants.length;i++){
    if(etudiants[i].note <min){
        min =etudiants[i].note;
    }
}

console.log(min);
 etudiants.push({nom :'latifa',note :15});
console.log(etudiants);


products =[
    {nom : 'pc', prix :1200, stock: 19},
    {nom : 'phone', prix :14200, stock: 40},
    {nom : 'bluttot', prix :200, stock: 0},
       
]

for(let i=0;i<products.length;i++){
    if(products[i].stock ==0){
        console.log(products[i]);
        
    }
}

let total = 0;

for(let i=0;i<products.length;i++){
    total +=products[i].stock
}
console.log(total);

let totals =0
for(let i=0;i<products.length;i++){
    totals += products[i].prix * products[i].stock 
}

console.log(totals);

let prodect = 0;

for(let i=0;i<products.length;i++){
    products[i].prix= products[i].prix *1.20; 

    console.log(products[i]);
    
}