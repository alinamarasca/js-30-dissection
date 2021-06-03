import {handleCheck} from '../handlers/handler.js'
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// checkboxes.forEach((checkbox) =>
// checkbox.addEventListener("click", (event) => console.log(event))
// );

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => console.log(e)));