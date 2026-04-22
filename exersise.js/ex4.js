//Supprimer les éléments dupliqués d'un tableau

// let A = [1,6,2];
// let B = [-2,3,-4];

// let P =1;

// for(let i=0;i<A.length;i++){
//     P = B[i] * A[i];
// }

// console.log(P);

// //EX 2 
// let T =[1,3,4,9,0,6,11,1];

// for(let i=0;i<T.length;i++){
//     for(let j =0;j<T.length-1;j++){
//       if(T[j] > T[j+1]){
//         let temp = T[j];
//         T[j] = T[j+1];
//         T[j+1] = temp;
//       }
//     }
// }

// console.log(T);


// //min 

// for(let i=0;i<T.length;i++){
//   for(let j=0;j<T.length-1;j++){
//     if(T[j] <T[j+1]){
//       let temp = T[j];
//       T[j] = T[j+1];
//       T[j+1] = temp;
//     }
//   }
// }

// console.log(T);

// let R =[1,4,5,6,3,5,2,6,1];


// for(let i=0;i<R.length;i++){
//   let count =0;
//   for(let j=0;j<R.length;j++){
//     if(R[i] === R[j]){
//       count++;
//     }
//   }

  
// if(count == 2){
//   console.log(R[i]);
// }
// }

//S;

// let S = [1,2,3,2,1,0,7,8,5];
// let R =[];
// for(let i=0;i<S.length;i++){
//   let count =0;
//   for(let j=0;j<S.length;j++){
//     if(S[i] === S[j]){
//       count++;
//     }
//   }

//   if(count === 1){
//    R.push(S[i]);
    
//   }
// }

// console.log(R);

// let M =[1,2,3,6,8,3,0,88,57];

// let max1 = M[0];
// let max2 = M[0];
// for(let i=0;i<M.length;i++){
//   if(M[i] >max1){
//    max2 = max1;
//    max1 = M[i]; 
    
//   }else if(M[i]> max2 && M[i]!== max1){
//     max2 = M[i];
//   }
// }

// console.log(max2);



// let M =[1,8,0,6,11,5];
//  let S =0;
//  let moyane;

//  for(let i=0;i<M.length;i++){
//   S += M[i];
//  }

// moyane = S/M.length;

// console.log(moyane);

// let P = [1,2,3,4,5,6];

// for(let i=0;i<P.length;i++){
//   if(P[i] %2 ==0){
//     console.log(P[i]);
    
//   }
// }

// let person =[
//   {nom : 'ghizlsne',age :20 ,statut:'done' ,amount :100},
//   {nom : 'ikram',age :18 ,statut:'done' ,amount :150},
//   {nom : 'ismail',age :11 ,statut:'done' ,amount :140},
//   {nom : 'slma',age :24 ,statut:'done' ,amount :200},
//   {nom : 'ikramato',age :19 ,statut:'done' ,amount :110},
// ]


// for(let i=0;i<person.length;i++){
//   if(person[i].age >18){
//     console.log(person[i].nom);
    
//   }
// }

// let T =[1,2,3,4,5,6];

// for(let i=0;i<T.length/2;i++){
//   let temp = T[i];
//   T[i] = T[T.length-i-1];
//   T[T.length-1-i] = temp
// }

// console.log(T);

 

let C = [1,2,2,3,3,3,5,5];


for(let i=0;i<C.length;i++){
 
let count =0;
  for(let j=0;j<C.length;j++){
    if(C[i] === C[j]){
      count++;
    }
  }


if(count == 2){
  console.log(C[i] + "-" + count);
  
}

if(count == 3){
  console.log(C[i] + "-" + count);
  
}
}


let A = [1,2,3];
let B =[4,5,6];

let AB =[];

for(let i=0;i<A.length;i++){
  AB[AB.length] = A[i];
}

for(let i=0;i<B.length;i++){
  AB[AB.length] = B[i];
}

console.log(AB);


let data = [
  { name: "A", score: 10 },
  { name: "B", score: 25 },
  { name: "C", score: 18 }
];

let max = data[0].score;
for(let i=0;i<data.length;i++){
  if(data[i].score > max){
    max = data[i].score
  }
}

console.log(max);




let Input = [1, 2, 3];

let count =0;

for(let i=0;i<Input.length;i++){
  let sum =0;
  for(let j=i;j<Input.length;j++){
    sum += Input[j];

    if(sum %2 !== 0){
      count++;
    }
  }
  console.log(count);

}




let arr = ["Project Alpha", "Project Beta","Project Gamma", "Project Gamma", "Project Delta", "Project Epsilon" , "Project Epsilon"] ;


for (let i = 0; i < arr.length; i++) {
  let count =0;
  for (let j = 0; j < arr.length; j++) {
    if(arr[i] == arr[j]){
      count++;
    }
  }

  if(count === 1){
    console.log(arr[i]);
    
  }
  
}

//ex1 ;

