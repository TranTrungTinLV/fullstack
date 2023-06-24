'use strict'
//For Of
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
    }
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu)

for (const item of menu) {
    console.log(item)
}

for (const item of menu.entries()) {
    // console.log(`${item[0] +1}:${item[1]}`)
    console.log(item)
} //lập thành mỗi mảng là 1 phần tử cùng index