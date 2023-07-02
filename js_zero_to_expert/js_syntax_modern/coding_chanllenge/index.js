'use strict';

const game = {
    team1: 'Manchester United',
    team2: 'Real Madrid',
    players: [
        [
            'David De Gea', //gk
            'Harry Maguire',
            'Bruno Fernandes',
            'Marcus Rashford',
            'Paul Pogba',
            'Edinson Cavani',
            'Luke Shaw',
            'Mason Greenwood',
            'Jadon Sancho',
            'Aaron Wan-Bissaka',
            'Raphael Varane'
        ],
        [
            'Thibaut Courtois', //gk
            'Sergio Ramos',
            'Karim Benzema',
            'Eden Hazard',
            'Luka Modric',
            'Toni Kroos',
            'Casemiro',
            'Ferland Mendy',
            'Dani Carvajal',
            'Vinicius Junior',
            'Nacho'
        ]
    ],
    score: '2:1',
    scored: ['Marcus Rashford', 'Karim Benzema', 'Thibaut Courtois', //gk
        'Sergio Ramos',
        'Karim Benzema',
        'Eden Hazard',
    ],
    date: '2023-06-23',
    time: '20:00',
    odds: {
        team1: 2.5,
        x: 3.2,
        team2: 2.8
    }
};
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

//tạo 2 mảng 
const {
    players
} = game

const [players1, players2] = players;
console.log(players1, players2);

//tạo biến thủ môn và thủ môn là gk
const [gk1, ...feilPlayers] = players1;
console.log(gk1, feilPlayers);

//tạo 1 mảng với tất cả người chơi
const allPlayer = [...players1, ...players2];
console.log(allPlayer)

//tạo 1 mảng cộng 3 người chơi mới
const players3Final = [...players1, 'Levi', 'Tín', 'Steve'];
console.log(players3Final)

//lấy tỉ lệ cược odds
const {
    odds: {
        team1,
        x: draw, //đặt x thành draw
        team2
    }
} = game

console.log(team1, team2, draw)

//6 dưa số lượng người chơi tùy ý vào

const printGoals = (...players) => {
    console.log(`${players.length} goals were scroded`)
}

printGoals(...game.scored)