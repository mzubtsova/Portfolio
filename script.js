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
// work on form element
const formElement = document.querySelector('form');
console.log(formElement);
formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    // const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    // const userFeedback = document.getElementById('feedback');

    // const userName = nameInput.value;
    const userEmail = emailInput.value;
    // const userMessage = userFeedback.value;

    if (userEmail === "") {
        alert("Please include your email!");
    // } else if (userEmail === "") {
    //     alert('Please include your email!');
    // } else if (userMessage === "") {
    //     alert('Please leave us a message. We appreciate your opinion!');
    } else {
        alert('Thank you for your email! I will connect you shortly!');
        nameInput.value = '';
        emailInput.value = '';
        userFeedback.value = '';
    }
})