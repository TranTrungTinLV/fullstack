"use strict"

//Optional chaining
'use strict';
//Enhanced obj literals
const openingHours = {
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
}

const restaurant = {
    name: 'Classico Italino',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    category: ['Italian', 'Pizzeria', 'Vegetarion'], //
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (StaterIndex, mainIndex) {
        return [this.starterMenu[StaterIndex], this.mainMenu[mainIndex]]
    },

    //Enhance object literals
    openingHours,
    oderPasta: function (ing1, ing2, ing3) {
        console.log(`${ing1},${ing2},${ing3}`)
    }
};

if (restaurant.openingHours && restaurant.openingHours.lo) {
    console.log(restaurant.openingHours.fri); // open and close
} 