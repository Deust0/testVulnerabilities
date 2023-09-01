//Codigo VULNERABLE:
/*const content = document.getElementById('content');
const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('named');
const paragraph = document.createElement('p');
paragraph.innerHTML = '¡Hola, ' + name1 + '!';
content.appendChild(paragraph);*/

const content = document.getElementById('content');
const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('named');


const paragraph = document.createElement('p');
const textNode = document.createTextNode('¡Hola, ' + name1 + '!');
paragraph.appendChild(textNode);


content.appendChild(paragraph);