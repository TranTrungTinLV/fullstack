//Bolean Logic
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

console.log(3 || 'Levi') //3 
console.log('' || 'Levi') // nó sẽ trả về Levi vì nhận giá trị truthly
console.log(true || 0) // true(truthly)
console.log(false || '') // false(falthy) trả vè ' '
console.log(undefined || null) // null vì undefined là falthy

console.log(undefined || '' || 0 || "Hello" || null) //Hello vì string là giá trị truthly ưu tiên

// restaurant.numberGuest = 23;
const guest = restaurant.numberGuest ? restaurant.numberGuest : 'no guest';
console.log(guest)

// short curciling and OR
const guest2 = restaurant.numberGuest || 10;
console.log(guest2)