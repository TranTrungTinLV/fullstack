'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};



const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4]; //

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
    const sov = sort ? movements.slice().sort((a, b) => a - b) : movements;
    sov.map(
        (mov, i) => {
            console.log(mov, i)
            const type = mov > 0 ? 'deposit' : 'withdrawal';
            const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>`;
            containerMovements.insertAdjacentHTML('afterbegin', html)
        }
    )
}

const createUser = (accs) => accs.forEach(
    acc => {
        acc.username = acc
            .owner
            .toLowerCase()
            .split(' ')
            .map(
                name => name[0]
            )
            .join('');

    });
createUser(accounts);
const updateUI = (acc) => {
    //Display Movements;
    displayMovements(acc.movements);

    //Display Balance;
    calcDisplaybelance(acc)

    //Display Summary;
    calcDisplaySumary(acc.movements)
}
const calcDisplaybelance = function (acc) {
    acc.balance = acc.movements.reduce(
        (mov, cur, i) =>
            mov + cur
        , 0
    );

    labelBalance.textContent = `${acc.balance} EUR`
}

const calcDisplaySumary = function (movements) {
    const incomes = movements.filter(mov => mov > 0).reduce((mov, acc) => mov + acc, 0);
    const outcomes = movements.filter(mov => mov < 0).reduce((mov, acc) => mov + acc, 0);
    const interestcomes = movements.filter(mov => mov > 0).map(mov => (mov * 1.2) / 100).reduce((mov, acc) => mov + acc, 0);
    labelSumIn.innerHTML = `${incomes}€`;
    labelSumOut.innerHTML = `${Math.abs(outcomes)}€`;
    labelSumInterest.innerHTML = `${interestcomes}€`
}

//Event handle
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('hello');
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) { // .? nhằm kiểm tra xem chúng có tồn tại mã pin ko
        //Clear Input
        inputLoginPin.value = inputLoginUsername.value = '';
        inputLoginPin.blur()
        //Display UI message;
        labelWelcome.textContent = `Hello ${currentAccount.owner}`;
        containerApp.style.opacity = 100;
        //updateUI
        updateUI(currentAccount);


    } else {
        alert('Vui lòng nhập lại')
    }
})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    const amount = Number(inputTransferAmount.value);
    inputTransferAmount.value = inputTransferTo.value = '';
    console.log(amount, receiverAcc)
    if (amount > 0
        && receiverAcc
        && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        alert('Transfer Valid');
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUI(currentAccount);
    } else {
        alert('Not valid');

    }
})

//FindIndex
btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Delete');if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username,
            // console.log(index)
        );
        console.log(index);
        accounts.splice(index, 1);
        console.log(accounts);
        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';

    } else {
        console.log('opp')
    }
})

//Some and every
console.log(movements);

console.log(movements.includes(-130)) //includes() kiểm tra xem phần tử đó cóó tồn tại không(chỉ kiểm tra)
const anyDeposits = movements.some(mov => mov > 0); // vừa kiểm tra và có 
console.log(anyDeposits);

//LOAN
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        //Add movement
        currentAccount.movements.push(amount);
        //Update UI
        updateUI(currentAccount);
    }
})

let sorted = false;
//Sort
btnSort.addEventListener('click',function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements,!sorted);
    sorted = !sorted
})

//Sort array

// //Ascending
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1
// },
// console.log('sort', movements));

// //Descending
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
// },
// console.log('sort', movements));

//Viết ngắn gọn 
//Ascending
movements.sort((a, b) => a - b)
console.log('sort asc', movements);

//Descending
movements.sort((a, b) => b - a)
console.log('sort des', movements);
/////////////////////////////////////////////////



// const checkDogs = function (dogsJulia, dogsKate) {
//     const dogsJuliaCorrected = dogsJulia.slice();
//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);
//     console.log(dogsJuliaCorrected);
//     const dogs = dogsJuliaCorrected.concat(dogsKate)
//     dogs.map((dog, i, arr) => {
//         console.log(i, dog);
//         if (dog >= 3) { return `The number ${i + 1} is ${dog} adult` } else { return `The number ${i + 1} is ${dog} puppy` }
//     })
// }

// console.log(checkDogs([3, 5, 2, 12, 7], [9, 16, 6, 8, 3]))
