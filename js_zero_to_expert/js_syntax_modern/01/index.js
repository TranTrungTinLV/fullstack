'use strict';

//Detructing Array
const restaurant = {
    name: 'Classico Italino',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    category: ['Italian', 'Pizzeria', 'Vegetarion'], //
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (StaterIndex, mainIndex) {
        return [this.starterMenu[StaterIndex], this.mainMenu[mainIndex]]
    }
}



//Array 
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, z] = arr;
// //console.log(x,z);

// const [first, Second] = restaurant.category;
// let [main, , secondary] = restaurant.category; //
// console.log(first, Second); //[0,1] 
// console.log(main, secondary); //[0,2] 

// //chuyển đỏi giữa các biển
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('temp ' + temp)
// console.log(main, secondary);

// // 2 giá trị được trả về từ 1 hàm
// const [staterCourses, mainCourses] = restaurant.order(0, 2) //Focaccia and Risotto
// console.log(staterCourses, mainCourses);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k)



const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k)