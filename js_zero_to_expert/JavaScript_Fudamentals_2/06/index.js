//Arrays and Object

const years = [2022, 2023, 2024, 2025];
console.log(years);
console.log(years[years.length - 1]) // lấy phần tử cuối

//method arrays alone
const friends = ['Levi', 'Mai', 'Cherry'];
//Add elements
const newFriends = friends.unshift('Jay');
console.log(friends);
friends.push('John');
console.log(friends)

//Remove elements
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);


