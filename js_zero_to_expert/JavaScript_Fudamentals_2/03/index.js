// Function Declarations vs Expressions

// Function declarations(khai báo hàm)
const age1 = calcAge(2002);
function calcAge(birthday) {
    return 2023 - birthday;
}

// console.log(age1);


// Function expressions(biểu thức hàm)
const calcAge2 = function (birthday) {
    return 2023 - birthday;
}




