//Toán tử phần dư(Remainder Operator)

console.log(5 % 3); //dư 2
console.log(5 / 2); // 5 = 2*2+1
console.log(8 % 3);

//kiểm tra chẵn lẻ

const isEven = () => {
    for (var i = 0; i < 10; i++) if (i % 2 === 0) {
        console.log(`chan ${i}`)
    }else{
        console.log(`lẻ ${i}`)}
}
isEven();