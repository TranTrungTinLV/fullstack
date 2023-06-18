//Arrow Function

// const calcAge = birthday => 2023 - birthday;
// console.log(calcAge(2002))

const calcAge = (birthday, firstName) => {
    const age = 2023 - birthday;
    return `${age} of ${firstName}`;
}

console.log(calcAge(2002, 'Tín'));