let contact =[
    {
        nom :'sheinLite',
        entreprise : 'shein',
        email : 'shein@gmail.com',
        telephone :'0703020108',
        ville : 'asfi',
        adresse : {rue :'all amal', code_postal: 4000, ville:'asfi' , pays: 'marc'}
    },

    {
        nom :'jumiaLite',
        entreprise : 'jumia',
        email : 'jumia@gmail.com',
        telephone :'0703020100',
        ville : 'rbat',
        adresse : {rue :'all hsanne', code_postal: 4800, ville:'rabat' , pays: 'marc'}
    }
]

for(let i=0;i <contact.length;i++){
    console.log(`${contact[i].nom} - ${contact[i].ville} - ${contact[i].adresse.ville}`);
}

let ville = {};

for(let i=0;i<contact.length ;i++){
    let v = contact[i].ville;

    if(!ville[v]){
        ville[v] =[];
    }

    ville[v].push(contact[i].nom);
}

console.log(ville);


let result = contact.filter(contacts => contacts.entreprise =='shein');
console.log(result);

for(let i=0;i<contact.length;i++){
    if(contact[i].email == 'shein@gmail.com'){
        contact[i].adresse.ville = 'rabat';
        contact[i].adresse.rue = 'lhai lm3arif';
        contact[i].adresse.code_postal = '10000';
    }
}
 console.log(contact);

 for(let i=0 ;i<contact.length;i++){
     if(contact[i].email == 'shein@gmail.com'){
        contact[i].date ={
            jour : 1,
            mois :1,
            annee : 2026
        };
    }
    if(contact[i].email == 'jumia@gmail.com'){
        contact[i].date ={
            jour : 10,
            mois :3,
            annee : 2026
        };
    }
 }
  console.log(contact);


let date ={
     jour : 26,
     mois : 3,
     annee : 2026
}
   

for(let i=0;i<contact.length;i++){
    if(contact[i].date.annee == date.annee){
        if(date.mois - contact[i].date.mois >=1){
            let jours =0;
           switch(contact[i].date.mois){
            case 2 : jours =28;
            break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8: 
            case 10:
            case 12:  jours = 31;
            break;
            case 4:
            case 6:
            case 9:
            case 11: jours = 30;
           }
            let total = (jours - contact[i].date.jour) + date.jour;

            if(total > 30){
                console.log('hello');
                console.log(contact[i].nom);
            }

        }
    }
}









