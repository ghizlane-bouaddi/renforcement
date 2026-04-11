let users = [
  {id:1, pseudo:"ghizlane", email:"g@gmail.com", role:"vendeur", note_moyenne:4.5, solde:1000},
  {id:2, pseudo:"ikram", email:"i@gmail.com", role:"acheteur", note_moyenne:4.2, solde:500},
  {id:3, pseudo:"salma", email:"s@gmail.com", role:"vendeur", note_moyenne:4.8, solde:2000},
  {id:4, pseudo:"omar", email:"o@gmail.com", role:"acheteur", note_moyenne:3.9, solde:300},
  {id:5, pseudo:"yassine", email:"y@gmail.com", role:"vendeur", note_moyenne:4.1, solde:1500}
];

let annonce =[
    {id : 1,vendeur_id : 1 ,titre : 'pc',description : "hello hna kini pc wa3rin",prix: 1000.00,categorie : 'Électronique',etat : 'neuf',statut : 'vendu',date_publication:'12/11/2025'},
    {id : 2,vendeur_id : 3 ,titre : 'pc',description : "hello hna kini pc wa3rin",prix: 1000.00,categorie : 'Électronique',etat : 'neuf',statut : 'vendu',date_publication:'12/11/2025'}

]
let annonces = [];

function Annonce(annonce){
    for(let i=0;i<users.length;i++){
        if(users[i].id == annonce.vendeur_id && users[i].role =='vendeur'){
            annonces.push(annonce);
            console.log("Annonce ajoutée");
        }
    }
    
    
}

Annonce(annonce);


function UpditeAnnonce(id){
    let annoncess = annonces.find(N => N.id == id);
    if(annoncess){
        annoncess.prix = 200;
        console.log('modefection les annonse',annoncess);
    }else{
        console.log('ma tbdl walo',annoncess);
        
    }
}

UpditeAnnonce(1)


function deleteAnnonse(id){
    for(let i=0;i< annonces.length;i++){
        if(annonces[i].id == id){
            annonces.splice(i,1);
            console.log('tmsah',annonces);
        }else{
             console.log('ma tmsh walo',annonces);
        }
    }
}

deleteAnnonse(2);


let A = users.sort(function (a,b){
    return a.pseudo.localeCompare(b.pseudo);
});

for(let i=0;i<users.length;i++){
    console.log(users[i].pseudo);
}

let solde = users.sort(function(a,b){
    return a.solde - b.solde;
});

for(let i=0;i<users.length;i++){
    console.log(users[i].solde);
    
}

