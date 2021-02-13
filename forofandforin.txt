// for in loops 

const user = {
    id:1,name:'Reshul',age:53,
}

for(let k in user){
//     // get keys 
//     console.log(k);
//     // get values 
//     console.log(user[k]);

    console.log(`${k}: ${user[k]}`);
}

 
// for of loops 

let fruits = ['banana','apple','orange','papaya'];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// using for of

for(let fruit of fruits){
    console.log('for of:'+fruit);
}

// using for in 

for(let i in fruits){
    console.log(i);
}

// another example 

for(let i of 'kargayekaand'){
    console.log(i);
}