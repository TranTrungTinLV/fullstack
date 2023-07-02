let arr = ['a','b','c','d','e'];


//Slice method
console.log(arr.slice(2)); // start c
console.log(arr.slice(2,4)); // start c end d
console.log([...arr]); //

//splice(mối nối)
console.log(arr.splice(2));// giữ lại 2 phần tử đầu tiên
console.log(arr); 

//reverse(đảo ngược) tương tự với arr2[arr2.length-1]
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.reverse());

//concat(nối 2 cái chuỗi lại)
const arr1 = [1,2,3,4,5,6,7,8,9,10,11,'...'];
console.log(arr1.concat(arr2));
//tương tự phương pháp concat [...arr1,...arr2]

//JOIN
const letters = [...arr1, ...arr2];
console.log(letters.join('-'))