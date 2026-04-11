let nom =[
  {name : 'ghizlane',age : 24,city : 'youssefia'},
  {name : 'ikram',age : 20,city : 'raba'},
  {name : 'ismail',age : 26,city : 'casa'},
]

console.log(nom);

nom[1].phone ='0908383890';
console.log(nom);

nom[2].city='youyou'

for(let i=0;i<nom.length;i++){
  console.log(`${nom[i].name},${nom[i].city},${nom[i].age},${nom[i].phone},`);
  
}


let prodect =[
  {nom : 'pc',prix :12.00,quntite : 10},
  {nom : 'phone',prix :12.00,quntite : 50},
  {nom : 'samsunge',prix :12.00,quntite : 20}
]


let total =0;
for(let i=0;i<prodect.length;i++){
   total = prodect[i].prix * prodect[i].quntite;
   console.log(`${i} : ${total}`);
}

console.log(total);

let title =[
  {nom : 'sumsung',email : "sumsung@gmail.com",phone :"0704030201",city : 'ypussefia'},
  {nom : 'canva',email : "canva@gmail.com",phone :"0704000001",city : 'casa'},
  {nom : 'alpha',email : "alpha@gmail.com",phone :"0600030201",city : 'asfi'},
]

for(let i=0;i<title.length;i++){
  if(title[i].city ==='asfi'){
    console.log(`${title[i].nom}`);
    
  }
}

 title.date ='10/4/2026';

for(let i=0;i<title.length;i++){
   console.log(`${title.nom}, ${title.email}, ${title.phone},${title.city},${title.date}`);

} 


let restue =[
  {nom : 'lahm' ,quntite :20, wahda : 12,pric :12,indar :15},
    {nom : 'baid' ,quntite :50, wahda : 32,pric :25,indar :85},
  {nom : 'djaj' ,quntite :100, wahda : 50,pric :102,indar :95},

]


for(let i=0;i<restue.length;i++){
  if(restue[i].quntite >restue[i].indar){
    console.log(restue[i].nom);
    
  }
}

let T =0

for(let i=0;i<restue.length;i++){
  T += restue[i].quntite;
}

console.log(T);

let tt =0;
let F =[
  {nom :'daw',pric :30,quntite:4},
    {nom :'lma',pric :70,quntite:2},
      {nom :'dariba',pric :50,quntite:7},
]

let TVA ;
for(let i=0;i<F.length;i++){
  tt = F[i].pric * F[i].quntite;
  console.log(tt);

  TVA = F.prix+0.20;
  console.log(`${i} :${TVA}`);
} 

console.log(TVA);
console.log(tt);


let music =[
  {title : 'lalala',nom :'ghizlne', moda :"3.23", status : 'roc'},
  {title : 'hohia',nom :'simo', moda :"3.12", status : 'rabe'},

]
for(let i=0;i<music.length;i++){
  console.log(music[i].title);
  if(music[i].status ==='roc'){
    console.log(music[i].title);
    
  }
}


let note =[
  {nom : 'ghizlsne',age :24,not :12},
    {nom : 'ikram',age :20,not :19},
      {nom : 'ismail',age :26,not :18}
]

let trouve =0
for(let i=0;i<note.length;i++){
  if(note[i].nom === 'ikram'){
    trouve =1
  }
}

if(trouve ==1){
  console.log('kina');
  
}else{
  console.log('ma kinx');
  
}

let number =[3,7,2,9,5]

let max = number[0];
let min = number[0];
let conutr =0;
for(let i=0;i<number.length;i++){
  if(number[i] > max){
    max = number[0];
  }

  if(number[i] < min){
    min = number[i];
  }

  if(number[i] >=5){
    conutr++;
  }
}

console.log(max);
console.log(min);
console.log(conutr);


