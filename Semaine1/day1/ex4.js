let article =[
    {nom : 'pc', quantité : 15, prix :20},
    {nom : 'phone', quantité : 25, prix :10},
    {nom : 'sace', quantité : 20, prix :15}
]

let total =0;
for(let i=0;i<article.length;i++){
    console.log(`${article[i].nom} - ${article[i].quantité} - ${article[i].prix} dh`);
    console.log(`${article[i].nom} - ${total =article[i].quantité *  article[i].prix}dh`);
    console.log(`${article[i].nom} - total ${total =(article[i].quantité *  article[i].prix *1.2) }dh`);
}