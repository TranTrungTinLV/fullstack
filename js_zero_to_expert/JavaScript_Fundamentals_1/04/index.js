// Type conversion and coercion


//Type Conversion(loại chuyển đổi)
const inputYear = '1998';
console.log(inputYear + 10) //chuỗi
//chuyển đổi chuỗi thành số
console.log(Number(inputYear) + 10) //Number
//Lưu ý
console.log(Number('Levi')) //NaN nó cũng là nằm trong data type Number, nhưng nó là Not a Number
// chuyển đổi số thành chuỗi
console.log(typeof String(23), typeof 23);


// Type Coercion (kiểu ép buộc)
console.log('23' - '10' - 3); //number vì dấu '-' là toán tử nên lúc này nó sẽ là chuỗi thành số
console.log('23' + '10' + 3); //String dấu + lúc này thực hiện việc nối chuỗi

//Example
let n = '1' + 1; // data type String
n -= 1; // data type Number
console.log(n);// n = 10

