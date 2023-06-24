//Logical Assingment Operator

const rest1 = {
    name: 'Capri',
    numGuest: 20,
    // numGuest:0
}

const rest2 = {
    name: 'La Greva',
    owner: 'Giova',
}

//OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10; //thêm numGuest vào
// console.log(rest1, rest2);

//Nullist(null and undefined - not 0)
// rest1.numGuest = rest1.numGuest ?? 10;
// rest2.numGuest = rest2.numGuest ?? 10; //thêm numGuest vào
// console.log(rest1, rest2);

//AND assignment operator //thay thế obj nào dang tồn tại và undefined nếu không có obj đó
rest1.numGuest &&= 10;
rest2.numGuest &&= 10;
console.log(rest1, rest2);
