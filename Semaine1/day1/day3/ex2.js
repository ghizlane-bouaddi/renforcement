let restaurant =[
    {nom : 'jmlaLite', quantite : 20, unite :'kg',prix_unitaire : 2, seuil_alerte: 21, categorie :'légume'},
    {nom : 'mab9ax', quantite : 20, unite :'kg',prix_unitaire : 5, seuil_alerte: 10, categorie :'viande'}
]

for(let i=0;i<restaurant.length;i++){
    if(restaurant[i].quantite <restaurant[i].seuil_alerte){
        console.log(`alerte stock bas ${restaurant[i].nom}`);
    }
}

let total =0;
for(let i=0;i<restaurant.length;i++){
    console.log(`${restaurant[i].nom} - total ${restaurant[i].quantite * restaurant[i].prix_unitaire}`);
    
}

let C = {};
for(let i=0;i<restaurant.length;i++){
    let stock = restaurant[i].categorie;

    if(!C[stock]){
        C[stock] =0;
    }

   C[stock] += restaurant[i].quantite * restaurant[i].prix_unitaire;

}

console.log(C);

plat =[
    {nom:'viande',prix_unitaire : 22,unite :'kg'}
]
for(let i=0 ;i< plat.length;i++){
    console.log('hello');
    console.log(`${plat[i].nom}  - ${plat[i].prix_unitaire} - ${plat[i].unite}`);
    for(let j=0;j<restaurant.length;j++){
         if(plat[i].nom == restaurant[j].categorie){
        let stock =  restaurant[j].quantite - plat[i].prix_unitaire ;
        if(stock <0){
            console.log(`${plat[i].nom} ma kaynach`);
            
        }

    }
   
    }


}



for(let i=0;i<restaurant.length;i++){
    if(restaurant[i].quantite < restaurant[i].seuil_alerte){
        let cmmond = (restaurant[i].seuil_alerte *2) - restaurant[i].quantite;
        console.log(cmmond);
        
    }


}
