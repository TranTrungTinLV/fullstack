"use strict"

//creating variable
const openModal = document.querySelectorAll('.show-modal');
console.log(openModal); //array
const closeModal = document.querySelector('.close-modal'); //
const modal = document.querySelector('.modal');
const overLayModal = document.querySelector('.over-lay');

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function () {
        console.log('hello');
        modal.classList.remove('hidden');
        overLayModal.classList.remove('hidden');
    });
}

closeModal.addEventListener('click', function () {
    let buttonInerHTML = this.innerHTML;
    makeKey(buttonInerHTML);
    modal.classList.add('hidden');
    overLayModal.classList.add('hidden');
    // console.log(buttonInerHTML);

})

overLayModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overLayModal.classList.add('hidden');
    console.log('hjgg')

})



document.addEventListener('keydown', function (e) {
    console.log(e.key);
    makeKey(e.key);
    console.log(e.key);
})

function makeKey(key) {
    switch (key) {
        case "Escape":
            modal.classList.add('hidden');
            overLayModal.classList.add('hidden')
            break;

        default:
            break;
    }
}


