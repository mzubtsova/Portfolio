// JavaScript


let i = 0;
const text = "Hello, my name is Marina";
const speed = "200";
function typeWriter() {

    if (i < text.length) {
        document.querySelector('.greetings').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    };
}

typeWriter();


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
    } else {
        alert('Thank you for your email! I will connect you shortly!');
        nameInput.value = '';
        emailInput.value = '';
        userFeedback.value = '';
    }
})

