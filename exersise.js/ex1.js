let T =['ruge','bloue','joure','width','mouve'];
T.push('ghi');
T.pop();

console.log(T);


let note =[10, 15, 8, 20, 12];
let total =0;
let max = note[0];
let min = note[0];
let M;
for(let i=0;i<note.length;i++){
    total += note[i]; 

    if(note[i]>max){
        max = note[i];
    }

    if(note[i]<min){
        min = note[i];
    }
}
M = total /note.length;
console.log(total);
console.log(M);
console.log(max);
console.log(min);

let name 
let nom=['ghizlane','ikram','ismail','latifa','mohamed','mama'];
// for(let i=0;i<nom.length;i++){
// nom.length[i][0];

// }

console.log(nom[0]);
console.log(nom[nom.length-1]);
nom.unshift('slma');
nom.push('ghigh');
nom.pop();
nom.shift();
console.log(nom);


let number = [2,4,6,8,10];
for(let i=0;i<number.length;i++){
    number[i] = number[i]*3;
}

console.log(number);

let arr = number.map(N =>N*3);
console.log(arr);

let color =['noir','rouge','blue','june'];
 for(let i=0;i<color.length;i++){
    if(color[i] ==='blue'){
        console.log(color[i]);        
        
     }  
}

let f = color.filter(N=>N ==='blue');
console.log(f);

let A = [1,2,3];
let B = [4,5,6];

let AB = A.concat(B);
console.log(AB);

let R =[10,20,30,40];
let K =R.reverse();
console.log(K);

// let alpha =['a','b','c','d'];

// let C = alpha.toUpperCase();
// console.log(C);


let pair =[3,6,9,12,15];

for(let i=0;i<pair.length;i++){
    if(pair[i]%2 == 0){
        console.log(pair[i]);
        
    }
}






let Y = ['ruge','bloue','joure','width','mouve'];

// push
Y[Y.length] = 'ghi';

// pop
// Y.length = Y.length - 1;

console.log(Y);


EX2

