/* Write your code below. Good luck! 🙂 */

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`The tip is for a bill of ${bills} and ${tip}`);
const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(totals);


