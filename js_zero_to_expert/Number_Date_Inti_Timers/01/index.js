// number string to number
console.log(typeof(+"23"))

//Base 10, 1-9
//Base 2, 0 1

//Parse
console.log(Number.parseInt('30px',10));
console.log(parseInt('e23')); //this is 

//check Not a number(isNaN()) always return boolean
console.log(Number.isNaN('23'));
console.log(Number.isNaN(23));
console.log(Number.isNaN(+'20X'))

// check if value is number() isFinite
console.log(Number.isFinite('23'));
console.log(Number.isFinite(23));
console.log(Number.isFinite(+'20X'))