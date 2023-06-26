'use strict'
document.body.append(document.createElement('textarea'));
const btn = document.createElement('button');
btn.style.padding = '8px';
btn.style.margin = '8px';
btn.textContent = 'Click'
document.body.append(btn)

document.querySelector('button').addEventListener('click', function () {
    let output;
    const text = document.querySelector('textarea').value;
    const rows = text.split(`\n`);
    console.log(rows)
    for (const [index, row] of rows.entries()) {
        const [first, Second] = row.toLowerCase().trim().split('_');
        output = first + Second.replace(Second[0], Second[0].toUpperCase());
        console.log(`${index} ${output.padEnd(20)}${'✅ '.repeat(index + 1)}`);
        
    }
})
