let darticles =[
    {id :1, nom:'gh', prix : 120, stock_disponible:50,quantité :20},
    {id :2, nom:'isd', prix : 100, stock_disponible:10,quantité : 50},
    {id :3, nom:'sgv', prix : 30, stock_disponible:20,quantité :10},
    {id :4, nom:'gdsv', prix : 70, stock_disponible:100,quantité :80}
]

darticles.quantité = 20;

let prodect =[];
let pro = {
    id : 1,
    nom : 'is',
    prix : 120,
    quantité : 10,
    stock_disponible : 20

}


for(let i=0;i<darticles.length;i++){
    if(darticles[i].id == pro.id ){
        if( darticles[i].stock_disponible >darticles[i].quantité){
            
        prodect.push(darticles[i],pro.quantité);
        console.log('ajoute');
        }
       console.log('klxi 3amr');
        
    }
}

for(let i=0;i<darticles.length;i++){
    if(darticles[i].quantité <darticles[i.stock_disponible]){
        console.log('la ttjawzha');
        
    }else{
        console.log('ttjwzha');
        console.log(darticles[i].quantité);
        
        
    }
}

let D = darticles.filter(d => d.id !==1);
console.log(D);


let total = 0;

for(let i=0;i<darticles.length;i++){
    total = darticles[i].prix * darticles[i].quantité;
    console.log(darticles[i] ,total);
}


let promo =0
let totalss =0;
let code = 'BIENVENUE';
for(let i=0;i<darticles.length;i++){
    totalss += darticles[i].prix;
    if(code === 'BIENVENUE'){
        promo = totalss * 0.15;
       
        
    }else if(code === 'NOEL2025' &&total > 150){
        promo = darticles[i]* 0.10;
        
        
    }else if(code === 'LIVGRATUITE'){
         promo = darticles[i]* 0.07;
       
         
    }
}

let T = totalss - promo;
console.log(`total  : ${totalss}`);
console.log(`promo : ${promo}`);
console.log(`T : ${T}`);


