
console.log(Math.sqrt(2)); //can bac 2 cua 2
console.log(2 ** (1 / 2)); //can bac 2 cua 2(2 luy thua 1/2)
console.log(2 ** 3); // luy thua

console.log(Math.max(5, 18, 2, 3, 100)); //Giá trị lớn nhất
console.log(Math.min(5, 18, 2, 3, 100)); //Giá trị nhỏ nhất

console.log(Math.PI); //số pi
console.log(Math.E); //số e

console.log(Math.trunc(Math.random() * 6)); //ngẫu nhiên 1-5 loại bỏ số thập phân

//làm tròn số nguyên (rounding integer)
//Math(.trunc,round,ceil,floor)

console.log(Math.trunc(23.3));//23

console.log(Math.round(23.3));//23
console.log(Math.round(23.9));//24

console.log(Math.ceil(23.3));//24
console.log(Math.ceil(23.8));//24

console.log(Math.floor(23.3));//23
console.log(Math.floor('23.9'));//23

//làm tròn số thập phân(rounding decimals)
console.log((2.7).toFixed(0)); //kết quả là 1 string = 3
console.log(+(2.7).toFixed(0)); //kết quả là 1 number = 3

