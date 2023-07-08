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
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
};



const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
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

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';
    const sov = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
    sov.forEach(
        (mov, i) => {
            console.log(mov, i)
            const type = mov > 0 ? 'deposit' : 'withdrawal';
            const date = new Date(acc.movementsDates[i]);
            const day = `${date.getDate()}`.padStart(2, 0);
            const month = `${date.getMonth() + 1}`.padStart(2, 0);
            const years = `${date.getFullYear()}`;
            const minutes = `${date.getMinutes()}`;
            const seconds = `${date.getSeconds()}`;
            const displayDate = `${day}/${month}/${years}`;
            const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__date">${displayDate}</div>
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
    displayMovements(acc);

    //Display Balance;
    calcDisplaybelance(acc)

    //Display Summary;
    calcDisplaySumary(acc)
}
const calcDisplaybelance = function (acc) {
    acc.balance = acc.movements.reduce(
        (mov, cur, i) =>
            mov + cur
        , 0
    );

    labelBalance.textContent = `${acc.balance} EUR`
}

const calcDisplaySumary = function (acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((mov, acc) => mov + acc, 0);
    const outcomes = acc.movements.filter(mov => mov < 0).reduce((mov, acc) => mov + acc, 0);
    const interestcomes = acc.movements.filter(mov => mov > 0).map(mov => (mov * 1.2) / 100).reduce((mov, acc) => mov + acc, 0);
    labelSumIn.innerHTML = `${incomes}€`;
    labelSumOut.innerHTML = `${Math.abs(outcomes)}€`;
    labelSumInterest.innerHTML = `${interestcomes}€`
}

//Event handle
let currentAccount,timer;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('hello');
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) { // .? nhằm kiểm tra xem chúng có tồn tại mã pin ko
        //Clear Input
        inputLoginPin.value = inputLoginUsername.value = '';
        inputLoginPin.blur();
        //Display UI message;
        labelWelcome.textContent = `Hello ${currentAccount.owner}`;
        containerApp.style.opacity = 100;
        //countdown
        if (timer) clearInterval(timer);
        timer = startLogOut();
        //updateUI
        updateUI(currentAccount);

        //date
        const date = new Date();
        const day = `${date.getDate()}`.padStart(2, 0);
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const years = `${date.getFullYear()}`.padStart(2, 0);
        labelDate.textContent = `${day / month / years}`

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
        setTimeout(()=>{
            currentAccount.movements.push(-amount);
            receiverAcc.movements.push(amount);
            updateUI(currentAccount);
            
        },2500)
    } else {
        alert('Not valid');

    }
    clearInterval(timer);
            timer = startLogOut();
})

//FindIndex
btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Delete'); if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
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
    const amount = +Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        //Add movement
        currentAccount.movements.push(amount);

        //Add Transfer Date
        currentAccount.movementsDates.push(new Date())
        //Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
    //Reset timer
    clearInterval(timer);
    timer = startLogOut();
})

//DATE
const now = new Date();
const date = `${now.getDate()}`.padStart(2, 0);

//Countdown timer
const startLogOut = () => {
    const tick = ()=>{
        const min = String(Math.trunc(time/60)).padStart(2,0);
        const sec = String(time%60).padStart(2,0);

        //UI 
        labelTimer.textContent = `${min}:${sec}`;

        if(time === 0){
            clearInterval(timer);
            containerApp.style.opacity = 0;
        };
        time--;
    }
    let time = 10;
    tick();
    const timer = setInterval(tick,1000)
    return timer;
}
// labelDate.textContent = `${date}/${month}/${years}, ${hours}:${minutes}:${seconds}`;
let sorted = false;
//Sort
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted
})


//Rounding number
// labelBalance.addEventListener('click', function () {
//     [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//         if (i % 2 === 0) {
//             row.style.backgroundColor = 'red'
//         }
//     })
// })

//tính tổng tiền gửi vào ngân hàng
const bankDeposit = accounts.flatMap(acc => acc.movements).sort((a, b) => a - b).filter(mov => mov > 0).reduce((sum, cur) => sum + cur); //flat + map 
console.log(bankDeposit)

const bankDeposit1000 = accounts.flatMap(acc => acc.movements).sort((a, b) => a - b).filter(mov => mov >= 1000);
const Sum1000 = bankDeposit1000.reduce((sum, cur) => (cur >= 100 ? sum++ : sum), 0);
console.log(bankDeposit1000)
console.log(Sum1000)

//tính tổng tiền gửi và rút
const sums = accounts.flatMap(acc => acc.movements).reduce((count, cur) => {
    cur > 0 ? count.deposit += cur : count.withdrawals += cur;
    return count;
}, { deposit: 0, withdrawals: 0 });
console.log(sums.deposit, sums.withdrawals)

//Làm cho title đẹp lên
const convertTitleCase = function (title) {
    const exception = ['name', 'is']

    const titleCase = title.toLowerCase().split(' ').map(word => exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
    return titleCase
}

console.log(convertTitleCase('my name is nguyễn thị hồng xuân'))


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
