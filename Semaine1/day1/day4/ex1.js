let réservations =[
    {id :1 , nom_client : 'ghizlane', nombre_personnes : 20,date : '10/11/2026',heure : '12:00', statut : 'confirmée',telephone :'0607080900'},
    {id :2 , nom_client : 'ikram', nombre_personnes : 30,date : '07/12/2026',heure : '15:00', statut : 'annulée',telephone :'0607080900'},
    {id :3 , nom_client : 'slma', nombre_personnes : 15,date : '10/11/2026',heure : '12:00', statut : 'confirmée',telephone :'0607080900'},
    {id :4 , nom_client : 'ismail', nombre_personnes : 8,date : '22/01/2026',heure : '23:00', statut : 'attente',telephone :'0607080900'},

]

let dateR = {
    date : '10/11/2026',
    heure : '12:00',
    statut : 'confirmée'
}
let total =0;

for(let i=0;i<réservations.length;i++){
    
    if(réservations[i].date == dateR.date && réservations[i].heure == dateR.heure){
        total += réservations[i].nombre_personnes;
    } 
}

if(total>30){
    console.log(dateR.statut ='attente');
    
}else {
    console.log(dateR.statut ='confirmée');
    
}


let totals =0;

let personnes ={
    id :2 ,
     nom_client : 'ikram',
      nombre_personnes : 50,
      date : '07/12/2026',
      heure : '15:00',
       statut : 'annulée',
       telephone :'0607080900'
}

for(let i=0;i<réservations.length;i++){
    if(réservations[i].id == personnes.id){
        réservations[i].statut ='annulée';
       
    }

    if(réservations[i].date == personnes.date && réservations[i].heure == personnes.heure && réservations[i].statut=='confirmée'){
        totals += réservations[i].nombre_personnes; 
    }
}

if(totals + personnes.nombre_personnes >30){
    console.log(personnes.statut ='attente');
    
}else{
    console.log(personnes.statut ='annulée');
    
}

let datee = '10/11/2026';
let result =[];

for(let i=0;i<réservations.length;i++){
    if(réservations[i].date == datee){
        result.push(réservations[i]);
    }
}

let réservation = result.sort(function(a,b){
    return a.heure.localeCompare(b.heure);
})

for(let i=0;i<result.length;i++){
    console.log(réservation[i].heure);
    
}



