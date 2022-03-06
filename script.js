// JavaScript

const items = Array.from(document.getElementsByClassName('item'));

console.log(items);

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('flip');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('flip');
    })
});