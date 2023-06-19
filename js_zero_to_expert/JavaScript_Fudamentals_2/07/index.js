//Object
const jonas = {
    firstName: 'Tín',
    birthday: 2002,
    lastName: 'Trần',
    job: 'student',
    friend: ['Levi', 'Cherry'],
    calcAge: function () {
        this.age = 2023 - this.birthday;
        return this.age;
    },
    getSummary: function () {
        return `My Name is ${this.firstName}, I'm live in ${this.location}, I'm ${this.calcAge()} years old`
    }
}
// console.log(jonas.fisrtName, jonas.lastName)
// console.log(jonas['lastName'])
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

// const interestIn = prompt('What do you want about Jonas');
// console.log(jonas[interestIn]);

//thêm key và value
jonas.location = 'VietNam';
jonas['friends'];
jonas['facebook'] = 'TinTran'
console.log(jonas.calcAge())
console.log(jonas.age);
console.log(jonas.getSummary())










