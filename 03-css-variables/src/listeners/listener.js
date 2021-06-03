import {handleUpdate} from '../handlers/handler.js'
const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// inputs.forEach(input => input.addEventListener('change', (e) => console.log(e)));
// inputs.forEach(input => input.addEventListener('mousemove', (e) => console.log(e)));