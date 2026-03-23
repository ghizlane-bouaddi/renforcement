let article   =[
    {nom : "Pc",quantité  : 15, prix:20},
    {nom : "phone",quantité  : 35,prix :2},
    {nom : "camera",quantité  : 25,prix :15}

]
let total =0;
for(let i=0;i<article.length;i++){
    console.log(`nom : ${article[i].nom} quantité : ${article[i].quantité} prix : ${article[i].prix}`);
    console.log(`nom : ${article[i].nom} | total : ${total += article[i].prix * article[i].quantité }`);
}
