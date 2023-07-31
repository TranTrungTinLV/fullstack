const p = document.querySelector('p');

//bất đồng bộ
setTimeout(
    () => {
        p.textContent = 'Hello, my name is Tin';
        console.log('Hello')
    }, 5000
)
// p.textContent = 'Hello, my name is'
setTimeout(() => {
    p.style.color = 'red';
}, 6000)

//excersices
const img = document.querySelector('.dog');
img.src = ''
img.addEventListener('load', function (e) {
    img.classList.add('loaded');
});
