//Truthy and falsy values(Bolean)

//Falsy (5 falsy values)
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//Example

//const money = 0; //falsy
const money = 100; //truthy
if(money){
    console.log('Yes');
}else{
    console.log('No');
}

//Example 2
// let chilren; //data type undefined, Falsy
let chilren = 123; // truthy
if(chilren){
    console.log('Yes defined');
}else{
    console.log('No defined, undefined');
}