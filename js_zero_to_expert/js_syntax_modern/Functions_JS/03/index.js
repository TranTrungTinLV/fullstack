'use strict'
//Accepting callback function

const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
};

const upperfisrtWord = function (str) {
    const [first, ...other] = str.split(' ');
    console.log(first);
    console.log(other)
    return [first.toUpperCase(), ...other].join(' ');
}

//HOF 
const transformer = function(str,fn){
    console.log(`${fn(str)}`)
}

transformer('javascript is the best',upperfisrtWord);
transformer('javascript is the best',oneWord)
