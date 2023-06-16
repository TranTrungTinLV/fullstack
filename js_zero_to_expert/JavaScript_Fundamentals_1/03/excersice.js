/* Write your code below. Good luck! 🙂 */



const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIheighter = BMIJohn < BMIMark;
console.log(BMIheighter)
console.log(BMIJohn, BMIMark);