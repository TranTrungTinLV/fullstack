function logger() {
    alert('Hello');
}

// calling/running/invoking function
logger();


function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `Juice with ${apple} and ${orange}`;
    return juice;
}


// const fruitReturn = console.log(fruitProcessor(5, 0));
//không thể hiện giá trị trong 1 biến nào chỉ nhập và trả thẳng về kết quả
console.log(fruitProcessor(5, 0))