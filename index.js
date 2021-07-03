// Write your code here!
const r = document.getElementById('main');
r.remove();

const element = document.createElement('h1');
const sweetMessage = document.createElement('li');

element.id="victory";
sweetMessage.innerHTML = "Vincent is the champion";

document.body.appendChild(element);
element.appendChild(sweetMessage);

const newHeader = document.querySelector('h1#victory');