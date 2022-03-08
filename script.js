// JavaScript


let i = 0;
const text = "Hello, I am Marina";

const speed = "200";
function typeWriter() {

    if (i < text.length) {
        document.querySelector('.greetings').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    };
}

typeWriter();


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

