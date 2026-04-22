 const clients = [
    { name: 'A', order: { products: [3,5,2], price: 150 } },
    { name: 'g', order: { products: [3,5,2], price: 200 } },
    { name: 'i', order: { products: [3,5,2], price: 250 } },
    { name: 's', order: { products: [3,5,2], price: 300 } }
];


let max = clients[0].order.price;
for(let i=0;i<clients.length;i++){
    if(clients[i].order.price > max){
        max = {price : clients[i].order.price,name : clients[i].name}
       
        
    }
   
}
// console.log(max);
 
//ex 
let pair =[1,2,3,4,5,6,7,8];

for(let i=0;i<pair.length;i++){
    if(pair[i] %2 == 0){
        // console.log(pair[i]);
        
    }
}

//ex

let impair =[1,2,3,4,5,6,7,8];

for(let i=0;i<impair.length;i++){
    if(impair[i]%2 !== 0){
        // console.log(impair[i]);
        
    }
}

//ex
// console.log(`arr`);


// let arr =[1,2,3,4,5,6,7,8];

// for(let i=0;i<arr.length;i++){

//     if(arr[i]% (i+2) !== 0 || arr[i] ===2 && arr[i] >=2){
//         console.log(arr[i]);
//     }


// }

let S = [1,4,2,3,3,4,5,7];
for(let i=0;i<S.length;i++){
    let count =0;
    for(let j =0; j<S.length;j++){
        if(S[i] == S[j]){
            count++;
        }
    }
    
    if(count === 1){
        console.log(S[i]);
        
    }
}

