'use strict';

//REST PATERN AND PARAMETTER
const restaurant = {
    name: 'Classico Italino',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    category: ['Italian', 'Pizzeria', 'Vegetarion'], //
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (StaterIndex, mainIndex) {
        return [this.starterMenu[StaterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    oderPasta: function (ing1, ing2, ing3) {
        console.log(`${ing1},${ing2},${ing3}`)
    },
    orederPizza:function(mainIndredients,...otherIndredients) {
        console.log(`${mainIndredients}`)
        console.log(`${otherIndredients}`)
    }
};



const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, z] = arr;
//console.log(x,z);

const [first, Second] = restaurant.category;
let [main, , secondary] = restaurant.category; //
console.log(first, Second); //[0,1] 
console.log(main, secondary); //[0,2] 

//chuyển đỏi giữa các biển
const temp = main;
main = secondary;
secondary = temp;
console.log('temp ' + temp)
console.log(main, secondary);

// 2 giá trị được trả về từ 1 hàm
const [staterCourses, mainCourses] = restaurant.order(0, 2) //Focaccia and Risotto
console.log(staterCourses, mainCourses);
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);


// Objects REST PATERN AND PARAMETTER(toán tử 3 chấm)

const {
    sat,
    ...weekend
} = restaurant.openingHours;
console.log(weekend)

// function
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    console.log(sum)
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const {orederPizza} = restaurant;
orederPizza('mush','1','2','3','4') //mainIndredient: 'mush'