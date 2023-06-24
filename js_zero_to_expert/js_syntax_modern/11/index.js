'use strict'

const rest = new Map();

rest.set(1, 'Levi');
console.log(rest.get(1));

rest.set('Levi', ['aka', 'tin']).set('open', 11).set('close', 23).set(true, 'optimus').set(false, 'lowkey');

const time = 21
console.log(rest.get(time > rest.get('open')) && rest.get(time > rest.get('close')))