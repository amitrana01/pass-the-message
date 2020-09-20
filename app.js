// Define UI Vars
const message = document.querySelector('#message');
const lastMessage = document.querySelector('#last-message');
const submitButton = document.getElementById('btn');

// Document listener
submitButton.addEventListener('click', sendMessage);

function sendMessage(e) {
  if (message.value === '') {
    alert('Add a message');
    // add last input message
  }
  console.log(message.value);
  lastMessage.innerText = message.value;
  lastMessage.style.color = 'turquoise';

  e.preventDefault();
}
